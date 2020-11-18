import axios from "axios";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
});

const calculatePercentage = (loaded, total) => Math.floor(loaded * 1.0) / total

instance.interceptors.request.use(
  config => {
    NProgress.start()
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.defaults.onDownloadProgress = e => {
  const percentage = calculatePercentage(e.loaded, e.total)
  NProgress.set(percentage)
}

instance.interceptors.response.use(
  response => {
    NProgress.done()
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
