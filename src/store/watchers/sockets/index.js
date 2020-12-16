import { call, take, fork, takeLeading } from "redux-saga/effects"
import { connect, disconnect } from "../../../config/sockets"
import { inbound } from "../../sagas/sockets/inbound"
import * as TYPES from '../../types/sockets'

export default function* socketsSaga() {
  while (true) {
    yield take(TYPES.OPEN_SOCKET)
    const socket = yield call(connect)
    yield fork(inbound, socket)
    yield takeLeading(TYPES.CLOSE_SOCKET, disconnect, socket)
  }
}
