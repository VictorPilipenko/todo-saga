import { put, call } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import notification from '../../../common/notification'
import {
  removeRecoveryPasswordConfirmToken,
  setAccessToken,
  setRefreshToken,
} from '../../../utils/auth'
import combinedActions from './actions'
// import { openSocket } from "../../../actions/sockets"

const createSaga = (sagaType) =>
  function* (action) {
    const combinedAction = combinedActions[sagaType]
    try {
      const { data } = yield call(combinedAction.api, action.payload)
      data?.accessToken && setAccessToken(data.accessToken)
      data?.refreshToken && setRefreshToken(data.refreshToken)
      yield put(combinedAction.success(action.payload))
      switch (sagaType) {
        case 'signUp':
        case 'signIn':
          // yield put(openSocket())
          yield put(push('/profile'))
          break
        case 'passwordRecoveryStep2':
          yield put(removeRecoveryPasswordConfirmToken())
          break
        default:
          return
      }
      notification.success(sagaType)
    } catch (error) {
      const { response } = error
      if (response) {
        yield put(combinedAction.failure(response.data))
      }
      notification.error(sagaType)
    }
  }

export const signUpSaga = createSaga('signUp')
export const signInSaga = createSaga('signIn')
export const passwordRecoveryStep1Saga = createSaga('passwordRecoveryStep1')
export const passwordRecoveryStep2Saga = createSaga('passwordRecoveryStep2')
