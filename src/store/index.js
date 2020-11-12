
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import todos from "../store/reducers/todo";
import todosSaga from '../store/watchers/todo'

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));
const reducer = combineReducers({
  todos
})
function* rootSaga() {
  yield all([
    todosSaga()
  ])
}
const store = createStore(reducer, enhancer);
sagaMiddleware.run(rootSaga);

export default store;
