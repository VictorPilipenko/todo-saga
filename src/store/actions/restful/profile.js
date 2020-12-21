import { createAction } from "redux-actions"
import * as TYPES from '../../types/restful'
import {
  getProfileAPI
} from "../../../api/restful/profile"

export const getProfile = createAction(TYPES.GET_PROFILE_REQUEST)
export const getProfileSuccess = createAction(TYPES.GET_PROFILE_SUCCESS)
export const getProfileFailure = createAction(TYPES.GET_PROFILE_FAILURE)

const combinedActions = {
  getProfile: {
    api: getProfileAPI,
    success: getProfileSuccess,
    failure: getProfileFailure
  },
}

export default combinedActions
