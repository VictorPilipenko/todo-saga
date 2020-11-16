import { put, call, delay } from "redux-saga/effects";
import { getAPI } from "../../api/todo";
import combinedActions, { getTodosSuccess, getTodosFailure, getTodos } from "../actions/todo";

const createSaga = sagaType => function* (action) {
  const combinedAction = combinedActions[sagaType]
  try {
    yield call(combinedAction.api, action.payload)
    yield put(combinedAction.success())
    yield put(getTodos())
  } catch (err) {
    yield put(combinedAction.failure(err))
  }
}

export const createTodoSaga = createSaga("create")
export const markTodoDoneSaga = createSaga("mark")
export const deleteTodoSaga = createSaga("delete")

export function* getTodosSaga() {
  try {
    yield delay(1000)
    const { data } = yield call(getAPI)
    yield put(getTodosSuccess(data))
  } catch (err) {
    yield put(getTodosFailure(err))
  }
}
