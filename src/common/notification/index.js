import { notification as notifi } from 'antd'
import config from '../../config/notification'

const notification = {
  error: (message) => {
    notifi.error({
      message: message || 'error',
      ...config,
    })
  },
  success: (message) => {
    notifi.success({
      message: message || 'success',
      ...config,
    })
  },
  warning: (message) => {
    notifi.warning({
      message: message || 'warning',
      ...config,
    })
  },
  info: (message) => {
    notifi.info({
      message: message || 'info',
      ...config,
    })
  },
}

export default notification
