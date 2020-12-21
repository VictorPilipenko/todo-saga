import { put, call } from "redux-saga/effects"
import notification from "../../../../common/notification"
import combinedActions from "../../../actions/restful/profile"

const createSaga = sagaType => function* () {
  const combinedAction = combinedActions[sagaType]
  try {
    const { data } = yield call(combinedAction.api)
    yield put(combinedAction.success(data))
    notification.success(sagaType)
  } catch (error) {
    const { response } = error
    if (response) {
      yield put(combinedAction.failure(response.data))
    }
    notification.error(sagaType)
  }
}

export const getProfileSaga = createSaga("getProfile")
