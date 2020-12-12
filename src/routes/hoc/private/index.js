import { Route } from 'react-router-dom';
import DefaultHelmet from '../../../common/helmet/default';
import PrivateLayout from '../../../layout/private';

const PrivateRoute = ({ component: Component, title, description, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps => (
        <PrivateLayout>
          <DefaultHelmet
            title={title}
            description={description}
          />
          <Component {...routeProps} />
        </PrivateLayout>
      )}
    />
  )
}

export default PrivateRoute
