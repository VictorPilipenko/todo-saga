import axios from "axios";
import { cacheAdapterEnhancer, Cache } from 'axios-extensions';
import notification from "../common/notification";

export const axiosCache = new Cache({ maxAge: 30 * 1000 });

const cacheConfig = {
  enabledByDefault: false,
  cacheFlag: 'useCache',
  defaultCache: axiosCache
}

const instance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/VictorPilipenko/todo-saga',
  headers: {
    'Cache-Control': 'no-cache'
  },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, cacheConfig)
});

// I keep track of the current requests that are being executed
export const currentExecutingGetRequests = {};

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

    // here you could add the authorization header to the request

    return originalRequest;
  },
  (err) => {
    return Promise.reject(err);
  }
);

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
      case 401: // authentication error, logout the user
        notification.warning('Unauthorized');
        // localStorage.removeItem('token');
        // router.push('/auth');
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
);

export default instance;
