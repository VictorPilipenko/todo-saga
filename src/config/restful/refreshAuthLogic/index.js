import { refreshAPI } from "../../../api/restful/auth"
import { removeAccessToken, removeRefreshToken, setAccessToken } from "../../../utils/auth"

// Function that will be called to refresh authorization
const refreshAuthLogic = failedRequest => {
  return refreshAPI
    .then(tokenRefreshResponse => {
      setAccessToken(tokenRefreshResponse.data.token)
      failedRequest.response.config.headers.Authorization = 'Bearer ' + tokenRefreshResponse.data.token
      return Promise.resolve()
    })
    .catch(error => {
      console.log("refresh fail")
      removeAccessToken()
      removeRefreshToken()
      return Promise.reject(error)
    })
}

export default refreshAuthLogic
