import { LOCATION_CHANGE } from 'connected-react-router'
import { takeLatest, fork, cancel, take, takeEvery } from 'redux-saga/effects'
import {
  createTodoSaga,
  getTodosSaga,
  markTodoSaga,
  deleteTodoSaga,
} from './sagas'
import * as TYPES from './types'

const cancellationFlow = (saga) =>
  function* (action) {
    const task = yield fork(saga, action)
    yield take(LOCATION_CHANGE)
    yield cancel(task)
  }

export default function* todosSaga() {
  yield takeLatest(TYPES.GET_TODOS_REQUEST, cancellationFlow(getTodosSaga))
  yield takeEvery(TYPES.CREATE_TODO_REQUEST, createTodoSaga)
  yield takeEvery(TYPES.MARK_TODO_DONE_REQUEST, markTodoSaga)
  yield takeEvery(TYPES.DELETE_TODO_REQUEST, deleteTodoSaga)
}
