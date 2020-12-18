import { ConfigProvider } from 'antd'
import { IntlProvider } from 'react-intl'
import { useSelector } from 'react-redux'
import Widgets from '../widgets'
import Routes from '../routes'
// import { openSocket } from '../store/actions/sockets'
// import useDispatchOnFirstMount from '../hooks/useDispatchOnFirstMount'

const App = () => {
  const { language, messages, components } = useSelector(state => state.locale)
  // const { isConnected } = useSelector(state => state.sockets)

  // useDispatchOnFirstMount({
  //   handler: !isConnected && openSocket()
  // })

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
