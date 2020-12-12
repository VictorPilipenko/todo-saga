import { put } from "redux-saga/effects"
import { changeAppLocale } from "../actions/locale"

export function* localeSaga(action) {
  try {
    yield put(changeAppLocale(action.payload))
    localStorage.setItem('language', action.payload.locale)
  } catch (err) { }
}

