
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import theme from "../store/reducers/theme";
import todos from "../store/reducers/todo";
import todosSaga from '../store/watchers/todo'

import { createBrowserHistory } from "history"
import themesSaga from "./watchers/theme";
export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  sagaMiddleware,
  routerMiddleware(history)
]
const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));
const reducer = combineReducers({
  theme,
  todos,
  router: connectRouter(history),
})
function* rootSaga() {
  yield all([
    themesSaga(),
    todosSaga()
  ])
}
const store = createStore(reducer, enhancer);
sagaMiddleware.run(rootSaga);

// disable react-dev-tools for production
if (process.env.NODE_ENV === 'production') {
  if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    for (let [key, value] of Object.entries(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[key] = typeof value == "function" ? () => { } : null;
    }
  }
}

export default store;
