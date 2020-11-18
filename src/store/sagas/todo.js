import { put, call } from "redux-saga/effects";
import { getAPI } from "../../api/todo";
import notification from "../../common/notification";
import combinedActions, { getTodosSuccess, getTodosFailure, getTodos } from "../actions/todo";

export const createSaga = sagaType => function* (action) {
  const combinedAction = combinedActions[sagaType]
  try {
    yield call(combinedAction.api, action.payload)
    yield put(combinedAction.success())
    notification.success(sagaType)
    yield put(getTodos())
  } catch (err) {
    yield put(combinedAction.failure(err))
    notification.error(sagaType)
  }
}

export const createTodoSaga = createSaga("create")
export const markTodoSaga = createSaga("mark")
export const deleteTodoSaga = createSaga("delete")

export function* getTodosSaga() {
  try {
    const { data } = yield call(getAPI)
    yield put(getTodosSuccess(data))
    notification.success("get")
  } catch (err) {
    yield put(getTodosFailure(err))
    notification.error("get")
  }
}
