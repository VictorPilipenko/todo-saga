import * as TYPES from '../../types/sockets'

const initialState = {
  message: "-"
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_MESSAGE:
      return {
        ...state,
        message: action.payload
      }
    default:
      return state
  }
}

export default reducer
