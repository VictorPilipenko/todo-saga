import * as TYPES from './types'

const initialState = {
  error: '',
  connecting: false,
  isConnected: false,
  message: '-',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.OPEN_SOCKET_REQUEST:
      return {
        ...initialState,
        connecting: true,
      }
    case TYPES.OPEN_SOCKET_SUCCESS:
      return {
        ...initialState,
        isConnected: true,
      }
    case TYPES.OPEN_SOCKET_FAILURE:
      return {
        ...initialState,
        error: action.payload,
      }

    case TYPES.CLOSE_SOCKET:
      return {
        ...initialState,
      }
    case TYPES.GET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      }

    default:
      return state
  }
}

export default reducer
