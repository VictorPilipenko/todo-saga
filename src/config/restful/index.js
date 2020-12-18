import axios from "axios"
import { cacheAdapterEnhancer, Cache } from 'axios-extensions'
import createAuthRefreshInterceptor from 'axios-auth-refresh'
import notification from "../../common/notification"
import { getAccessToken } from "../../utils/auth"
import refreshAuthLogic from "./refreshAuthLogic"

export const axiosCache = new Cache({ maxAge: 5 * 1000 })

const cacheConfig = {
  enabledByDefault: false,
  cacheFlag: 'useCache',
  defaultCache: axiosCache
}

const instance = axios.create({
  baseURL: process.env.REACT_APP_REST_API,
  headers: {
    'Cache-Control': 'no-cache'
  },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, cacheConfig)
})

// Instantiate the interceptor (you can chain it as it returns the axios instance)
createAuthRefreshInterceptor(instance, refreshAuthLogic, {
  statusCodes: [401] // default: [ 401 ]
})

// I keep track of the current requests that are being executed
export const currentExecutingGetRequests = {}

instance.interceptors.request.use(
  (req) => {
    let originalRequest = req;
    const main = req.url.split('?')[0]
    if (originalRequest.method === 'get') {
      if (currentExecutingGetRequests[main]) {
        const source = currentExecutingGetRequests[main];
        delete currentExecutingGetRequests[main];
        source.cancel();
      }
    }
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    originalRequest.cancelToken = source.token;
    currentExecutingGetRequests[main] = source;

    originalRequest.headers.Authorization = getAccessToken()

    return originalRequest;
  },
  (error) => {
    return Promise.reject(error);
  }
)

instance.interceptors.response.use(
  (response) => {
    if (response.config.method === 'get') {
      if (currentExecutingGetRequests[response.request.responseURL]) {
        // here you clean the request
        delete currentExecutingGetRequests[response.request.responseURL];
      }
    }
    else {
      axiosCache.reset()
    }

    return response;
  },
  (error) => {
    const { config, response, message } = error;
    const originalRequest = config;
    const main = originalRequest.url.split('?')[0]

    if (originalRequest.method === 'get') {
      if (axios.isCancel(error)) {
        // here you check if this is a cancelled request to drop it silently (without error)
        return new Promise(() => { });
      }

      if (currentExecutingGetRequests[main]) {
        // here you clean the request
        delete currentExecutingGetRequests[main];
      }
    }

    // here you could check expired token and refresh it if necessary

    // check if it's a server error
    if (!response) {
      notification.warning('Network/Server Error');
      return Promise.reject(error);
    }

    // all the error responses
    switch (response.status) {
      case 400:
        console.error(response.status, message);
        notification.warning('Bad Request');
        break;
      case 401:
        notification.warning('Unauthorized');
        break;
      case 404:
        notification.warning('Data Not Found');
        break;
      case 429:
        notification.warning('Too Many Requests');
        break;
      default:
        console.error(response.status, message);
        notification.error('Server Error');
    }
    return Promise.reject(error);
  }
)

export default instance
