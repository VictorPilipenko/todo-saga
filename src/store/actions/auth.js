import { createAction } from "redux-actions"
import * as TYPES from '../types'
import {
  signUpAPI,
  signInAPI, passwordRecoveryStep1API, passwordRecoveryStep2API
} from "../../api/auth"

export const signUp = createAction(TYPES.SIGN_UP_REQUEST) // post
export const signUpSuccess = createAction(TYPES.SIGN_UP_SUCCESS)
export const signUpFailure = createAction(TYPES.SIGN_UP_FAILURE)

export const signIn = createAction(TYPES.SIGN_IN_REQUEST)
export const signInSuccess = createAction(TYPES.SIGN_IN_SUCCESS)
export const signInFailure = createAction(TYPES.SIGN_IN_FAILURE)

export const passwordRecoveryStep1 = createAction(TYPES.PASSWORD_RECOVERY_STEP_1_REQUEST)
export const passwordRecoveryStep1Success = createAction(TYPES.PASSWORD_RECOVERY_STEP_1_SUCCESS)
export const passwordRecoveryStep1Failure = createAction(TYPES.PASSWORD_RECOVERY_STEP_1_FAILURE)

export const passwordRecoveryStep2 = createAction(TYPES.PASSWORD_RECOVERY_STEP_2_REQUEST)
export const passwordRecoveryStep2Success = createAction(TYPES.PASSWORD_RECOVERY_STEP_2_SUCCESS)
export const passwordRecoveryStep2Failure = createAction(TYPES.PASSWORD_RECOVERY_STEP_2_FAILURE)

export const signOut = createAction(TYPES.SIGN_OUT)

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
  },
  passwordRecoveryStep1: {
    api: passwordRecoveryStep1API,
    success: passwordRecoveryStep1Success,
    failure: passwordRecoveryStep1Failure
  },
  passwordRecoveryStep2: {
    api: passwordRecoveryStep2API,
    success: passwordRecoveryStep2Success,
    failure: passwordRecoveryStep2Failure
  },
}

export default combinedActions
