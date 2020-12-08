import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { ConfigProvider } from 'antd'
import ru_RU from 'antd/es/locale/ru_RU'
import GlobalStyle from './styles/global'
import store from "./store"
import App from './routes'
import CheckOnlineStatusModal from './utils/checkOnlineStatusModal'
import CheckPageVisibilityStatus from './utils/checkPageVisibilityStatus'

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={ru_RU}>
      <CheckOnlineStatusModal />
      <CheckPageVisibilityStatus />
      <GlobalStyle />
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
)