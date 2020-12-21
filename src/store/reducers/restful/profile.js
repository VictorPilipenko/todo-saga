import * as TYPES from '../../types/restful'

const initialState = {
  loading: false,
  info: {},
  error: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_PROFILE_REQUEST:
      return {
        ...initialState,
        loading: true,
      };
    case TYPES.GET_PROFILE_SUCCESS:
      return {
        ...initialState,
        info: action.payload,
      };
    case TYPES.GET_PROFILE_FAILURE:
      return {
        ...initialState,
        error: action.payload,
      }
    default:
      return state
  }
}

export default reducer
