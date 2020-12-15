import { all } from "redux-saga/effects";

import authSaga from "../../watchers/auth";
import todosSaga from '../../watchers/todo'
import themesSaga from "../../watchers/theme";
import localesSaga from "../../watchers/locale";

export default function* rootSaga() {
  yield all([
    authSaga(),
    localesSaga(),
    themesSaga(),
    todosSaga(),
  ])
}
