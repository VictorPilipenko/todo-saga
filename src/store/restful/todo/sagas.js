import { put, call, cancelled, select } from 'redux-saga/effects'
import { getAPI } from '../../../api/restful/todo'
import notification from '../../../common/notification'
import { currentExecutingGetRequests } from '../../../config/restful'
import combinedActions, {
  getTodosSuccess,
  getTodosFailure,
  getTodos,
} from './actions'

const getState = (state) => state.todos

const cancelledAll = (api) => {
  Object.keys(currentExecutingGetRequests).forEach((el) => {
    if (el === api) {
      const source = currentExecutingGetRequests[el]
      delete currentExecutingGetRequests[el]
      source.cancel()
    }
  })
}

const getCurrentPage = (currentPage, totalPages, items) => {
  if (totalPages === 1) {
    return 1
  } else if (currentPage === totalPages && items === 0) {
    return totalPages - 1
  }
  return currentPage
}

export const createSaga = (sagaType) =>
  function* (action) {
    const combinedAction = combinedActions[sagaType]
    try {
      yield call(combinedAction.api, action.payload)
      yield put(combinedAction.success(action.payload))
      notification.success(sagaType)
      if (sagaType === 'create' || sagaType === 'delete') {
        const state = yield select(getState)

        const currentPage = state.pagination.currentPage
        const pageSize = state.pagination.pageSize
        const totalPages = state.pagination.totalPages
        const items = state.items.length

        const pagination = {
          page: getCurrentPage(currentPage, totalPages, items),
          pageSize,
        }

        yield put(getTodos(pagination))
      }
    } catch (error) {
      yield put(
        combinedAction.failure({
          id: action.payload.id,
          message: error.message,
        })
      )
      notification.error(sagaType)
    }
  }

export const createTodoSaga = createSaga('create')
export const markTodoSaga = createSaga('mark')
export const deleteTodoSaga = createSaga('delete')

export function* getTodosSaga(action) {
  try {
    const response = yield call(getAPI, action.payload)

    const currentPage = Number.parseInt(action.payload.page)
    const pageSize = Number.parseInt(action.payload.pageSize)
    const totalPages = Math.ceil(response.headers['x-total-count'] / pageSize)
    const totalCount = Number.parseInt(response.headers['x-total-count'])

    const pagination = {
      currentPage,
      pageSize,
      totalPages,
      totalCount,
    }

    yield put(
      getTodosSuccess({
        items: response.data.map((item) => ({
          details: {
            ...item,
          },
          fetchingError: '',
          areFetching: false,
        })),
        pagination,
      })
    )
    notification.success('get')
  } catch (error) {
    yield put(getTodosFailure(error))
    notification.error('get')
  } finally {
    if (yield cancelled()) {
      cancelledAll('todos')
    }
  }
}
