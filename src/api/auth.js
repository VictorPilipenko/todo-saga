import API from '../config/axios'
import { getRefreshToken } from '../utils/auth'

export const signUpAPI = auth => API.post("auth/up", auth)
export const signInAPI = auth => API.get("auth/in", auth)
export const refreshAPI = () => API.post("auth/refresh", {
  headers: {
    Authorization: getRefreshToken()
  }
})
