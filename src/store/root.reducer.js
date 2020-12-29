import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import * as AUTH_TYPES from './restful/auth/types'
import auth from './restful/auth/reducers'
import theme from './local/theme/reducers'
import todos from './restful/todo/reducers'
import locale from './local/locale/reducers'
import sockets from './sockets/reducers'
import profile from './restful/profile/reducers'
import { removeAccessToken, removeRefreshToken } from '../utils/auth'

const root = (history) => {
  const appReducer = combineReducers({
    sockets,
    auth,
    profile,
    locale,
    theme,
    todos,
    router: connectRouter(history),
  })
  const initialState = appReducer({}, {})
  const rootReducer = (state, action) => {
    if (action.type === AUTH_TYPES.SIGN_OUT) {
      removeAccessToken()
      removeRefreshToken()
      state = {
        ...initialState,
        auth: {
          ...initialState.auth,
          isLogged: false,
        },
        router: {
          ...initialState.router,
          location: {
            ...initialState.router.location,
            pathname: '/',
          },
        },
        locale: {
          ...state.locale,
        },
        theme: {
          ...state.theme,
        },
      }
    }
    return appReducer(state, action)
  }
  return rootReducer
}

export default root
