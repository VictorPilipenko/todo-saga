
import { IntlProvider } from 'react-intl'
import { ConfigProvider } from 'antd'
import { useSelector } from 'react-redux'
import Widgets from '../widgets'
import Routes from '../routes'

const App = () => {
  const { locale, messages, components } = useSelector(state => state.locale)

  return (
    <ConfigProvider locale={components}>
      <IntlProvider locale={locale} messages={messages}>
        <Widgets />
        <Routes />
      </IntlProvider>
    </ConfigProvider>
  )
}

export default App
