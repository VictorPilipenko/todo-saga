import React from 'react'
import { Route } from 'react-router-dom';
import PrivateLayout from '../layout/private';

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps => (
        <PrivateLayout>
          <Component {...routeProps} />
        </PrivateLayout>
      )}
    />
  )
}

export default PublicRoute
