import API from '../../config/restful'
import { getRecoveryPasswordConfirmToken } from '../../utils/auth'

export const signUpAPI = (auth) => API.post('signup', auth)
export const signInAPI = (auth) => API.post('signin', auth)
export const passwordRecoveryStep1API = (auth) =>
  API.post('auth/password/recovery', auth)
export const passwordRecoveryStep2API = (auth) =>
  API.post('auth/password/change', auth, {
    headers: {
      RecoveryConfirm: getRecoveryPasswordConfirmToken(),
    },
  })
