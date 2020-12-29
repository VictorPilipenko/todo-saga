import { put } from 'redux-saga/effects'
import { changeAppLocale } from './actions'

export function* localeSaga(action) {
  try {
    yield put(changeAppLocale(action.payload))
    localStorage.setItem('language', action.payload.language)
  } catch (error) {}
}
