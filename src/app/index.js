import { ConfigProvider } from 'antd'
import { IntlProvider } from 'react-intl'
import { useSelector } from 'react-redux'
import useDispatchOnFirstMount from '../hooks/useDispatchOnFirstMount'
import { getProfile } from '../store/restful/profile/actions'
import Widgets from '../widgets'
import Routes from '../routes'

const App = () => {
  const { language, messages, components } = useSelector(
    (state) => state.locale
  )
  const { isLogged } = useSelector((state) => state.auth)

  useDispatchOnFirstMount({
    handler: getProfile(),
    condition: isLogged,
  })

  return (
    <ConfigProvider locale={components}>
      <IntlProvider locale={language} messages={messages}>
        <Widgets />
        <Routes />
      </IntlProvider>
    </ConfigProvider>
  )
}

export default App
