import { getComponents, getMessages } from '../../../utils/locale'
import { getBrowserLanguage } from '../../../utils/network'
import * as TYPES from '../../types/local'

const language = localStorage.getItem('language') || getBrowserLanguage()

const initialState = {
  language,
  messages: getMessages(language),
  components: getComponents(language),
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CHANGE_APP_LOCALE:
      return {
        language: action.payload.language,
        messages: action.payload.messages,
        components: action.payload.components,
      }
    default:
      return state
  }
}

export default reducer
