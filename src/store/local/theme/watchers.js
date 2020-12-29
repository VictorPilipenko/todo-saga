import { takeLatest } from 'redux-saga/effects'
import { themeSaga } from './sagas'
import * as TYPES from './types'

export default function* themesSaga() {
  yield takeLatest(TYPES.THEME_SAGA, themeSaga)
}
