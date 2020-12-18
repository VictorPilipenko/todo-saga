import { createAction } from "redux-actions"
import * as TYPES from '../../types/sockets'

export const openSocket = createAction(TYPES.OPEN_SOCKET_REQUEST)
export const openSocketSuccess = createAction(TYPES.OPEN_SOCKET_SUCCESS)
export const openSocketFailure = createAction(TYPES.OPEN_SOCKET_FAILURE)

export const closeSocket = createAction(TYPES.CLOSE_SOCKET)

export const getMessage = createAction(TYPES.GET_MESSAGE)
