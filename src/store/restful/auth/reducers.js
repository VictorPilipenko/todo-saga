import * as TYPES from './types'
import { getAccessToken } from '../../../utils/auth'

const initialState = {
  isLogged: !!getAccessToken(),
  loading: false,
  isCheckYourEmail: false,
  error: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SIGN_UP_REQUEST:
    case TYPES.SIGN_IN_REQUEST:
    case TYPES.PASSWORD_RECOVERY_STEP_1_REQUEST:
    case TYPES.PASSWORD_RECOVERY_STEP_2_REQUEST:
      return {
        ...initialState,
        loading: true,
      }
    case TYPES.SIGN_UP_SUCCESS:
    case TYPES.SIGN_IN_SUCCESS:
      return {
        ...initialState,
        isLogged: true,
      }
    case TYPES.PASSWORD_RECOVERY_STEP_1_SUCCESS:
      return {
        ...initialState,
        isCheckYourEmail: true,
      }
    case TYPES.PASSWORD_RECOVERY_STEP_2_SUCCESS:
      return {
        ...initialState,
      }
    case TYPES.SIGN_UP_FAILURE:
    case TYPES.SIGN_IN_FAILURE:
    case TYPES.PASSWORD_RECOVERY_STEP_1_FAILURE:
    case TYPES.PASSWORD_RECOVERY_STEP_2_FAILURE:
      return {
        ...initialState,
        error: action.payload,
      }
    default:
      return state
  }
}

export default reducer
