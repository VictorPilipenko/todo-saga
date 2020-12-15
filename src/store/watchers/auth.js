import { takeEvery } from "redux-saga/effects";
import { 
  signUpSaga, 
  signInSaga, 
  passwordRecoveryStep1Saga, 
  passwordRecoveryStep2Saga,
} from '../sagas/auth'
import * as TYPES from '../types'

export default function* authSaga() {
  yield takeEvery(TYPES.SIGN_UP_REQUEST, signUpSaga)
  yield takeEvery(TYPES.SIGN_IN_REQUEST, signInSaga)
  yield takeEvery(TYPES.PASSWORD_RECOVERY_STEP_1_REQUEST, passwordRecoveryStep1Saga)
  yield takeEvery(TYPES.PASSWORD_RECOVERY_STEP_2_REQUEST, passwordRecoveryStep2Saga)
}
