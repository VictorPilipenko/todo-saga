import { call, put, delay } from 'redux-saga/effects'
import { cloneableGenerator } from '@redux-saga/testing-utils'
import { getAPI } from '../../api/todo'
import combinedActions, { getTodos, getTodosFailure, getTodosSuccess } from '../actions/todo'
import { getTodosSaga, createSaga } from './todo'

describe('getTodosSaga with redux-saga native testing', () => {
  const generator = cloneableGenerator(getTodosSaga)()

  it('calls the API', () => {
    const result = generator.next().value
    expect(result).toEqual(call(getAPI))
  })

  describe('and the request is successful', () => {
    let clone

    beforeAll(() => {
      clone = generator.clone()
    })

    it('raises success action', () => {
      const data = []
      const result = clone.next(data).value
      expect(result).toEqual(put(getTodosSuccess()))
    })

    it('performs no further work', () => {
      const result = clone.next().done
      expect(result).toBe(true)
    })
  })

  describe('and the request fails', () => {
    let clone

    beforeAll(() => {
      clone = generator.clone()
    })

    it('raises failed action', () => {
      const error = new Error("404 Not Found")
      const result = clone.throw(error).value
      expect(result).toEqual(put(getTodosFailure(error)))
    })

    it('performs no further work', () => {
      const result = clone.next().done
      expect(result).toBe(true)
    })
  })
})

const sagaTypes = ['create', 'mark', 'delete']
sagaTypes.forEach(sagaType => {
  describe(`${sagaType}TodoSaga with redux-saga native testing`, () => {
    const action = {
      payload: {}
    }
    const generator = cloneableGenerator(createSaga(sagaType))(action)
    const combinedAction = combinedActions[sagaType]

    it('calls the API', () => {
      const result = generator.next().value
      expect(result).toEqual(call(combinedAction.api, action.payload))
    })

    describe('and the request is successful', () => {
      let clone

      beforeAll(() => {
        clone = generator.clone()
      })

      it('raises success action', () => {
        const result = clone.next().value
        expect(result).toEqual(put(combinedAction.success()))
      })

      it('raises getTodos action', () => {
        const result = clone.next().value
        expect(result).toEqual(put(getTodos()))
      })

      it('performs no further work', () => {
        const result = clone.next().done
        expect(result).toBe(true)
      })
    })

    describe('and the request fails', () => {
      let clone

      beforeAll(() => {
        clone = generator.clone()
      })

      it('raises failed action', () => {
        const error = new Error("404 Not Found")
        const result = clone.throw(error).value
        expect(result).toEqual(put(combinedAction.failure(error)))
      })

      it('performs no further work', () => {
        const result = clone.next().done
        expect(result).toBe(true)
      })
    })
  })
})
