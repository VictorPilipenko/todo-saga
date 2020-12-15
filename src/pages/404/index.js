import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import DefaultHelmet from '../../common/helmet/default';
import { GoHome, Wrapper } from "./index.styled"

const NotFound = () => {
  return <>
    <DefaultHelmet
      title="helmet.404.title"
      description="helmet.404.description"
    />
    <Wrapper>404!</Wrapper>
    <GoHome
      size='large'
      type='primary'
    >
      <Link to='/todo'>
        <FormattedMessage id="404.button" />
      </Link>
    </GoHome>
  </>
}

export default NotFound



