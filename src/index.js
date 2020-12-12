import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import App from './app'
import store from "./store"
import GlobalStyle from './styles/global'

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
)
