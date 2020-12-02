import React from 'react'
import { Route } from 'react-router-dom';
import PublicLayout from '../layout/public';

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps => (
        <PublicLayout>
          <Component {...routeProps} />
        </PublicLayout>
      )}
    />
  )
}

export default PublicRoute
