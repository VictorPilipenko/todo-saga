describe('ToDo list', () => {
  const backUrl = "http://localhost:3000/todos"
  const frontUrl = "http://localhost:3001"
  const input = "Learn about cypress"
  const helloText = 'Добавьте, пожалуйста, чем заняться!'

  beforeEach(() => {
    cy
      .visit(frontUrl)
      // before the request goes out we need to set up spying
      // see https://on.cypress.io/network-requests
      .server()
      .route('GET', backUrl).as('get')
      .route('POST', backUrl).as('post')
      .route('PATCH', backUrl.concat('/1')).as('patch')
      .route('DELETE', backUrl.concat('/1')).as('delete')
      .wait('@get').should((xhr) => {
        expect(xhr.status, 'successful GET').to.equal(200)
      })
  })

  it('adds a new todo', () => {
    cy
      .get('button')
      .click()
      .get('input')
      .type(input)
      .type('{enter}')
      .wait('@post').should((xhr) => {
        expect(xhr.status, 'successful POST').to.equal(201)
      })
      .wait('@get').should((xhr) => {
        expect(xhr.status, 'successful GET').to.equal(200)
      })
      .get('ul li:last')
      .should('have.text', input)
  })

  it('mark a new todo', () => {
    cy
      .get('ul li:last div:first')
      .click()
      .wait('@patch').should((xhr) => {
        expect(xhr.status, 'successful PATCH').to.equal(200)
      })
      .wait('@get').should((xhr) => {
        expect(xhr.status, 'successful GET').to.equal(200)
      })
      .get('ul li:last')
      .find('svg')
      .should('have.length', 2)
  })

  it('deletes a new todo', () => {
    cy
      .get('ul li:last')
      .find('svg:last')
      .click({ force: true }) // .hover()
      .wait('@delete').should((xhr) => {
        expect(xhr.status, 'successful DELETE').to.equal(200)
      })
      .wait('@get').should((xhr) => {
        expect(xhr.status, 'successful GET').to.equal(200)
      })
      .get('ul div:first')
      .should('have.text', helloText)
  })

})
