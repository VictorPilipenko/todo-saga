import { eventChannel } from 'redux-saga'
import { call, take, put } from 'redux-saga/effects'
import { events } from '../../api/sockets/events'
import { getMessage } from './actions'

function socketChannel(socket) {
  return new eventChannel((dispatch) => {
    // Message Events
    socket.on(events.dateFresh, (data) => {
      dispatch(getMessage(data))
    })

    // we need to return a unsubscriber function that handles any necessary cleanup
    // since we don't need any cleanup we just pass an empty function
    return () => {}
  })
}

// inbound handles passing actions from the event channel to the sagas
export function* inbound(socket) {
  const channel = yield call(socketChannel, socket)
  while (true) {
    const action = yield take(channel)
    yield put(action)
  }
}
