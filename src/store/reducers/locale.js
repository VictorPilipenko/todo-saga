import RU_Components from 'antd/es/locale/ru_RU'
import US_Components from 'antd/es/locale/en_US'

import RU from '../../locale/ru'
import US from '../../locale/en'

import * as TYPES from '../types'

const language = navigator.language === 'ru-RU' ? 'ru' : 'en'
const messages = navigator.language === 'ru-RU' ? RU : US
const components = navigator.language === 'ru-RU' ? RU_Components : US_Components

const localLanguage = localStorage.getItem('language')
const localMessages = localStorage.getItem('language') === 'ru' ? RU : US
const localComponents = localStorage.getItem('language') === 'ru' ? RU_Components : US_Components

const initialState = {
  locale: localLanguage || language,
  messages: localMessages || messages,
  components: localComponents || components,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CHANGE_APP_LOCALE:
      return {
        locale: action.payload.locale,
        messages: action.payload.messages,
        components: action.payload.components,
      }
    default:
      return state
  }
}

export default reducer
