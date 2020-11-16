import { mount } from 'cypress-react-unit-test'
import React from 'react'
import List from '../../src/pages/todo/components/list'
import { Provider } from 'react-redux'
import store from '../../src/store'

describe('cypress-react-unit-test', () => {
  const input = "Learn about cypress"

  it('empty list', () => {
    mount(<List
      data={[]}
      loading={false}
      err={null}
    />)
    cy.contains('Добавьте, пожалуйста, чем заняться!')
  })

  it('one item in list list', () => {
    mount(
      <Provider store={store}>
        <List
          data={[{
            "text": input,
            "done": false,
            "id": 1,
          }]}
          loading={false}
          err={null}
        />
      </Provider>)
    cy.contains(input)
  })

})
