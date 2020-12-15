import { connectRouter } from 'connected-react-router'
import { combineReducers } from "redux";
import { removeAccessToken, removeRefreshToken } from '../../../utils/auth';
import * as TYPES from '../../types'
import auth from "../auth";
import theme from "../theme";
import todos from "../todo";
import locale  from "../locale";

const root = history => {
  const appReducer = combineReducers({
    auth,
    locale,
    theme,
    todos,
    router: connectRouter(history),
  })
  const initialState = appReducer({}, {})
  const rootReducer = (state, action) => {
    if (action.type === TYPES.SIGN_OUT) {
      state = initialState
      removeAccessToken()
      removeRefreshToken()
    }
    return appReducer(state, action)
  }
  return rootReducer
}

export default root





