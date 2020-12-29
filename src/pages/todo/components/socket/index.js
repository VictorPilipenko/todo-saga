import { Alert, Button, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { closeSocket, openSocket } from '../../../../store/sockets/actions'
import { WifiOutlined } from '@ant-design/icons'

const { Paragraph } = Typography

const SocketComponent = () => {
  const dispatch = useDispatch()
  const { message, connecting, isConnected, error } = useSelector(
    (state) => state.sockets
  )

  return (
    <>
      {error && <Alert message={error?.type} type="error" />}
      <Paragraph>
        {isConnected && <WifiOutlined />} last data: {message}
      </Paragraph>
      <Button
        loading={connecting}
        onClick={() => {
          isConnected ? dispatch(closeSocket()) : dispatch(openSocket())
        }}
      >
        {isConnected ? 'close socket connection' : 'open socket connection'}
      </Button>
    </>
  )
}

export default SocketComponent
