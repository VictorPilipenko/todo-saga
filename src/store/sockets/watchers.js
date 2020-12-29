import { call, take, fork, put, takeLeading } from 'redux-saga/effects'
import { connect, disconnect } from '../../config/sockets'
import { openSocketFailure, openSocketSuccess } from './actions'
import { inbound } from './sagas'
import * as TYPES from './types'
import * as AUTH_TYPES from '../restful/auth/types'

export default function* socketsSaga() {
  while (true) {
    try {
      yield take(TYPES.OPEN_SOCKET_REQUEST)
      const socket = yield call(connect)
      yield put(openSocketSuccess())
      yield fork(inbound, socket)
      yield takeLeading(
        [TYPES.CLOSE_SOCKET, AUTH_TYPES.SIGN_OUT],
        disconnect,
        socket
      )
    } catch (error) {
      yield put(openSocketFailure(error))
    }
  }
}
