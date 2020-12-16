import { Alert } from 'antd'
import { Typography } from 'antd'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Background } from './index.styled'

const { Paragraph } = Typography

const SignLayout = ({ children }) => {
  const { err } = useSelector(state => state.auth)
  return (
    <Background>
      {children}
      {err && <Alert message={err} type="error" />}
      <Paragraph>
        <ul>
          <li>
            <Link to="/sign-in">sign-in</Link>
          </li>
          <li>
            <Link to="/sign-up">sign-up</Link>
          </li>
          <li>
            <Link to="/password-recovery">password-recovery</Link>
          </li>
        </ul>
      </Paragraph>
    </Background>
  )
}

export default SignLayout
