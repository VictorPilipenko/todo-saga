import { Route } from 'react-router-dom';
import DefaultHelmet from '../../../common/helmet/default';
import PublicLayout from '../../../layout/public';

const PublicRoute = ({ component: Component, title, description, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps => (
        <PublicLayout>
          <DefaultHelmet
            title={title}
            description={description}
          />
          <Component {...routeProps} />
        </PublicLayout>
      )}
    />
  )
}

export default PublicRoute
