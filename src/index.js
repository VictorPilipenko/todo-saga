import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import GlobalStyle from './styles/global'
import App from './app'
import store from "./store"

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
)
