
import React from 'react'
import { IntlProvider } from 'react-intl'
import { ConfigProvider } from 'antd'
import { useSelector } from 'react-redux'
import CheckOnlineStatusModal from '../utils/checkOnlineStatusModal'
// import CheckPageVisibilityStatus from '../utils/checkPageVisibilityStatus'
import GlobalStyle from '../styles/global'
import Routes from '../routes'

const App = () => {
  const { locale, messages, components } = useSelector(state => state.locale)

  return (
    <ConfigProvider locale={components}>
      <IntlProvider locale={locale} messages={messages}>
        <CheckOnlineStatusModal />
        {/* <CheckPageVisibilityStatus /> */}
        <GlobalStyle />
        <Routes />
      </IntlProvider>
    </ConfigProvider>
  )
}

export default App
