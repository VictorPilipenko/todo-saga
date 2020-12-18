import { put } from "redux-saga/effects";
import { changeAppTheme } from "../../actions/local/theme";

export function* themeSaga(action) {
  try {
    yield put(changeAppTheme(action.payload))
  } catch (error) { }
}
