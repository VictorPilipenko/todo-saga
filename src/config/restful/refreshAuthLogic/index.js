import axios from 'axios';
import store from '../../../store';
import { signOut } from '../../../store/actions/restful/auth';
import { getRefreshToken, setAccessToken } from "../../../utils/auth"

// Function that will be called to refresh authorization
const refreshAuthLogic = failedRequest => {
  return axios
    .get('/api/refresh', {
      headers: {
        'x-auth-refresh-token': getRefreshToken()
      }
    })
    .then(({ data }) => {
      setAccessToken(data.token)
      failedRequest.response.config.headers.Authorization = 'Bearer ' + data.token
      return Promise.resolve()
    })
    .catch(error => {
      store.dispatch(signOut())
    })
}

export default refreshAuthLogic
