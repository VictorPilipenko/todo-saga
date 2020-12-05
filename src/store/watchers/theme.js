import { takeLatest } from "redux-saga/effects";
import { themeSaga } from "../sagas/theme";
import * as TYPES from '../types'

export default function* themesSaga() {
  yield takeLatest(TYPES.APP_THEME, themeSaga)
}
