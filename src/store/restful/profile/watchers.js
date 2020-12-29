import { takeEvery } from 'redux-saga/effects'
import { getProfileSaga } from './sagas'
import * as TYPES from './types'

export default function* profileSaga() {
  yield takeEvery(TYPES.GET_PROFILE_REQUEST, getProfileSaga)
}
