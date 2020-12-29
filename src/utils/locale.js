import RU_Components from 'antd/es/locale/ru_RU'
import US_Components from 'antd/es/locale/en_US'

import RU from '../locale/ru'
import US from '../locale/en'

const getMessages = (language) => {
  switch (language) {
    case 'ru':
      return RU
    default:
      return US
  }
}
const getComponents = (language) => {
  switch (language) {
    case 'ru':
      return RU_Components
    default:
      return US_Components
  }
}

export { getMessages, getComponents }
