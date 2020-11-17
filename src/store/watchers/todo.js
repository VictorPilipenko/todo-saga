import { takeLatest } from "redux-saga/effects";
import {
  createTodoSaga, getTodosSaga, markTodoSaga, deleteTodoSaga
} from '../sagas/todo'
import * as TYPES from '../types'


export default function* todosSaga() {
  yield takeLatest(TYPES.GET_TODOS_REQUEST, getTodosSaga);
  yield takeLatest(TYPES.CREATE_TODO_REQUEST, createTodoSaga);
  yield takeLatest(TYPES.MARK_TODO_DONE_REQUEST, markTodoSaga);
  yield takeLatest(TYPES.DELETE_TODO_REQUEST, deleteTodoSaga);

}
