import * as TYPES from '../types'
import { LOCATION_CHANGE } from 'connected-react-router';

const initialState = {
  loading: false,
  user: {
    //   details: {
    //     id: 1,
    //     text: 'text',
    //     done: true,
    //   },
  },
  err: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        loading: initialState.loading,
        err: initialState.err,
      };
    case TYPES.SIGN_UP_REQUEST:
    case TYPES.SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
        err: initialState.err,
      };
    case TYPES.SIGN_UP_SUCCESS:
    case TYPES.SIGN_IN_REQUEST:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: initialState.loading,
        err: initialState.err,
      };
    case TYPES.SIGN_UP_FAILURE:
    case TYPES.SIGN_IN_FAILURE:
      return {
        ...state,
        user: initialState.user,
        loading: initialState.loading,
        err: action.payload.message,
      }
    default:
      return state
  }
}

export default reducer
