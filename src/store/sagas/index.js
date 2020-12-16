import { all } from "redux-saga/effects";

import authSaga from "../watchers/restful/auth";
import todosSaga from '../watchers/restful/todo'
import themesSaga from "../watchers/local/theme";
import localesSaga from "../watchers/local/locale";
import socketsSaga from "../watchers/sockets";

export default function* rootSaga() {
  yield all([
    socketsSaga(),
    authSaga(),
    localesSaga(),
    themesSaga(),
    todosSaga(),
  ])
}
