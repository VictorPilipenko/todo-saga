import { connectRouter } from 'connected-react-router'
import { combineReducers } from "redux";
import * as TYPES from '../types/local'
import auth from "./restful/auth";
import theme from "./local/theme";
import todos from "./restful/todo";
import locale from "./local/locale";
import sockets from "./sockets/message";
import { removeAccessToken, removeRefreshToken } from '../../utils/auth';

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
      removeAccessToken()
      removeRefreshToken()
      state = {
        ...initialState,
        auth: {
          ...initialState.auth,
          isLogged: false
        }
      }
    }
    return appReducer(state, action)
  }
  return rootReducer
}

export default root
