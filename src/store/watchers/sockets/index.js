import { call, take, fork, put, takeLeading } from "redux-saga/effects"
import { connect, disconnect } from "../../../config/sockets"
import { openSocketFailure, openSocketSuccess } from "../../actions/sockets"
import { inbound } from "../../sagas/sockets/inbound"
import * as TYPES from '../../types/sockets'
import * as LOCAL_TYPES from '../../types/local'

export default function* socketsSaga() {
  while (true) {
    try {
      yield take(TYPES.OPEN_SOCKET_REQUEST)
      const socket = yield call(connect)
      yield put(openSocketSuccess())
      yield fork(inbound, socket)
      yield takeLeading([
        TYPES.CLOSE_SOCKET, 
        LOCAL_TYPES.SIGN_OUT
      ], disconnect, socket)
    } catch (error) {
      yield put(openSocketFailure(error))
    }
  }
}
