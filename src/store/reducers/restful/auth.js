import * as TYPES from '../../types/restful'
import { LOCATION_CHANGE } from 'connected-react-router';

const initialState = {
  loading: false,
  isCheckYourEmail: false,
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
        isCheckYourEmail: initialState.isCheckYourEmail,
      };
    case TYPES.SIGN_UP_REQUEST:
    case TYPES.SIGN_IN_REQUEST:
    case TYPES.PASSWORD_RECOVERY_STEP_1_REQUEST:
    case TYPES.PASSWORD_RECOVERY_STEP_2_REQUEST:
      return {
        ...state,
        loading: true,
        err: initialState.err,
        isCheckYourEmail: initialState.isCheckYourEmail,
      };
    case TYPES.SIGN_UP_SUCCESS:
    case TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: initialState.loading,
        err: initialState.err,
        isCheckYourEmail: initialState.isCheckYourEmail,
      };

    case TYPES.PASSWORD_RECOVERY_STEP_1_SUCCESS:
      return {
        ...state,
        isCheckYourEmail: true,
        loading: initialState.loading,
        err: initialState.err,
      };
    case TYPES.PASSWORD_RECOVERY_STEP_2_SUCCESS:
      return {
        ...state,
        loading: initialState.loading,
        err: initialState.err,
        isCheckYourEmail: initialState.isCheckYourEmail,
      };
    case TYPES.SIGN_UP_FAILURE:
    case TYPES.SIGN_IN_FAILURE:
    case TYPES.PASSWORD_RECOVERY_STEP_1_FAILURE:
    case TYPES.PASSWORD_RECOVERY_STEP_2_FAILURE:
      return {
        ...state,
        user: initialState.user,
        loading: initialState.loading,
        err: action.payload.message,
        isCheckYourEmail: initialState.isCheckYourEmail,
      }
    default:
      return state
  }
}

export default reducer
