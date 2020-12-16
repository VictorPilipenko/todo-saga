import { takeLatest } from "redux-saga/effects"
import { localeSaga } from '../../sagas/local/locale'
import * as TYPES from '../../types/local'

export default function* localesSaga() {
  yield takeLatest(TYPES.LOCALE_SAGA, localeSaga)
}
