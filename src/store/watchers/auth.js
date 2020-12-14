import { takeEvery } from "redux-saga/effects";
import { signUpSaga, signInSaga } from '../sagas/auth'
import * as TYPES from '../types'

export default function* authSaga() {
  yield takeEvery(TYPES.SIGN_UP_REQUEST, signUpSaga)
  yield takeEvery(TYPES.SIGN_IN_REQUEST, signInSaga)
}
