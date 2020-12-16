import { takeLatest } from "redux-saga/effects";
import { themeSaga } from "../../sagas/local/theme";
import * as TYPES from '../../types/local'

export default function* themesSaga() {
  yield takeLatest(TYPES.THEME_SAGA, themeSaga)
}
