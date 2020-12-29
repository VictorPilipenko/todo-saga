import { put } from 'redux-saga/effects'
import { changeAppTheme } from './actions'

export function* themeSaga(action) {
  try {
    yield put(changeAppTheme(action.payload))
  } catch (error) {}
}
