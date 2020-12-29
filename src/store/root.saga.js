import { all } from 'redux-saga/effects'

import profileSaga from './restful/profile/watchers'
import todosSaga from './restful/todo/watchers'
import authSaga from './restful/auth/watchers'

import themesSaga from './local/theme/watchers'
import localesSaga from './local/locale/watchers'

import socketsSaga from './sockets/watchers'

export default function* rootSaga() {
  yield all([
    profileSaga(),
    todosSaga(),
    authSaga(),
    localesSaga(),
    themesSaga(),
    socketsSaga(),
  ])
}
