import { takeLatest } from "redux-saga/effects"
import { localeSaga } from '../sagas/locale'

import * as TYPES from '../types'

export default function* localesSaga() {
  yield takeLatest(TYPES.LOCALE_SAGA, localeSaga)
}
