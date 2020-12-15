import { put, call } from "redux-saga/effects"
import notification from "../../common/notification"
import { removeRecoveryPasswordConfirmToken, setAccessToken, setRefreshToken } from "../../utils/auth"
import combinedActions from "../actions/auth"

const createSaga = sagaType => function* (action) {
  const combinedAction = combinedActions[sagaType]
  try {
    const { data } = yield call(combinedAction.api, action.payload)
    setAccessToken(data.accessToken)
    action.payload.rememberMe && setRefreshToken(data.refreshToken)
    yield put(combinedAction.success(data))
    notification.success(sagaType)
    if (sagaType === "passwordRecoveryStep2") {
      removeRecoveryPasswordConfirmToken()
    }
  } catch (err) {
    yield put(combinedAction.failure(err))
    notification.error(sagaType)
  }
}

export const signUpSaga = createSaga("signUp")
export const signInSaga = createSaga("signIn")
export const passwordRecoveryStep1Saga = createSaga("passwordRecoveryStep1")
export const passwordRecoveryStep2Saga = createSaga("passwordRecoveryStep2")
