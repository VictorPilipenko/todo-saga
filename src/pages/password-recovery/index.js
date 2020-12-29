import { Typography } from 'antd'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PasswordRecover from './components'

const { Title, Paragraph } = Typography

const PasswordRecoverPage = () => {
  const { isCheckYourEmail } = useSelector((state) => state.auth)

  return (
    <>
      {isCheckYourEmail ? (
        <Typography>
          <Title>We have sent an email to the account with the email</Title>
          <Paragraph>Please check your email history</Paragraph>
          <Paragraph>
            <ul>
              <li>
                <Link to="/sign-in">sign-in</Link>
              </li>
              <li>
                <Link to="/sign-up">sign-up</Link>
              </li>
            </ul>
          </Paragraph>
        </Typography>
      ) : (
        <PasswordRecover />
      )}
    </>
  )
}
export default PasswordRecoverPage
