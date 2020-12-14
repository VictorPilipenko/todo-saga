import { put, call } from "redux-saga/effects"
import notification from "../../common/notification"
import { setAccessToken, setRefreshToken } from "../../utils/auth"
import combinedActions from "../actions/auth"

const createSaga = sagaType => function* (action) {
  const combinedAction = combinedActions[sagaType]
  try {
    const { data } = yield call(combinedAction.api, action.payload)
    setAccessToken(data.accessToken)
    action.payload.rememberMe && setRefreshToken(data.refreshToken)
    yield put(combinedAction.success(data))
    notification.success(sagaType)
  } catch (err) {
    yield put(combinedAction.failure(err))
    notification.error(sagaType)
  }
}

export const signUpSaga = createSaga("signUp")
export const signInSaga = createSaga("signIn")
