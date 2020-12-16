import API from '../../config/restful'
import { getRefreshToken, getRecoveryPasswordConfirmToken } from '../../utils/auth'

export const signUpAPI = auth => API.post("auth/up", auth)
export const signInAPI = auth => API.post("auth/in", auth)
export const refreshAPI = () => API.post("auth/refresh", {
  headers: {
    Authorization: getRefreshToken()
  }
})
export const passwordRecoveryStep1API = auth => API.post("auth/password/recovery", auth)
export const passwordRecoveryStep2API = auth => API.post("auth/password/change", auth, {
  headers: {
    RecoveryConfirm: getRecoveryPasswordConfirmToken()
  }
})
