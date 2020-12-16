import { connectRouter } from 'connected-react-router'
import { combineReducers } from "redux";
import { removeAccessToken, removeRefreshToken } from '../../utils/auth';
import * as TYPES from '../types/local'
import auth from "./restful/auth";
import theme from "./local/theme";
import todos from "./restful/todo";
import locale from "./local/locale";
import sockets from "./sockets/message";

const root = history => {
  const appReducer = combineReducers({
    sockets,
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





