import { createAction } from "redux-actions"
import * as TYPES from '../types'
import {
  signUpAPI,
  signInAPI
} from "../../api/auth"

export const signUp = createAction(TYPES.SIGN_UP_REQUEST) // post
export const signUpSuccess = createAction(TYPES.SIGN_UP_SUCCESS)
export const signUpFailure = createAction(TYPES.SIGN_UP_FAILURE)

export const signIn = createAction(TYPES.SIGN_IN_REQUEST)
export const signInSuccess = createAction(TYPES.SIGN_IN_SUCCESS)
export const signInFailure = createAction(TYPES.SIGN_IN_FAILURE)

const combinedActions = {
  signUp: {
    api: signUpAPI,
    success: signUpSuccess,
    failure: signUpFailure
  },
  signIn: {
    api: signInAPI,
    success: signInSuccess,
    failure: signInFailure
  }
}

export default combinedActions
