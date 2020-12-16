import { createAction } from "redux-actions"
import * as TYPES from '../../types/sockets'

export const getMessage = createAction(TYPES.GET_MESSAGE)
export const openSocket = createAction(TYPES.OPEN_SOCKET)
export const closeSocket = createAction(TYPES.CLOSE_SOCKET)
