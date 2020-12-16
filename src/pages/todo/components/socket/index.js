import { Button, Typography } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { closeSocket, openSocket } from '../../../../store/actions/sockets'
// import { useSocket } from '../../../../hooks/useSocket'
const { Paragraph } = Typography

const SocketComponent = () => {
  // const { data, isConnected } = useSocket({ event: 'date+fresh' })

  const { message } = useSelector(state => state.sockets)
  const dispatch = useDispatch()
  return (
    <>
      {/* <Paragraph>socket connection status: {'' + isConnected}</Paragraph> */}
      <Paragraph>last data: {message}</Paragraph>
      <Button onClick={() => dispatch(openSocket())}>open socket connection</Button>
      <Button onClick={() => dispatch(closeSocket())}>close socket connection</Button>
    </>
  )
}

export default SocketComponent
