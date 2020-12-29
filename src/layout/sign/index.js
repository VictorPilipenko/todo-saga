import { Alert, Typography } from 'antd'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Background, ErrorAlert } from './index.styled'

const { Paragraph } = Typography

const SignLayout = ({ children }) => {
  const { error } = useSelector((state) => state.auth)
  return (
    <Background>
      {children}
      {error && (
        <ErrorAlert>
          <Alert message={error} type="error" />
        </ErrorAlert>
      )}
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
