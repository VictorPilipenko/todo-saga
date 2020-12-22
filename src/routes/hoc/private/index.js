import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import DefaultHelmet from '../../../common/helmet/default';
import PrivateLayout from '../../../layout/private';

const PrivateRoute = ({ component: Component, title, description, ...rest }) => {
  const { isLogged } = useSelector(state => state.auth)
  const handleRender = routeProps => {
    if (!isLogged) {
      return <Redirect to={{
        pathname: '/sign-in'
      }} />
    } else {
      return <PrivateLayout>
        {
          title && description &&
          <DefaultHelmet
            title={title}
            description={description}
          />
        }
        <Component {...routeProps} />
      </PrivateLayout>
    }
  }

  return (
    <Route
      {...rest}
      render={handleRender}
    />
  )
}

export default PrivateRoute
