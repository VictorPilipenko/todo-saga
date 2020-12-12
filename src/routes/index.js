import React, { Suspense, lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import NProgress from 'nprogress'
import RouteNProgress from '../utils/routeNProgress'
import config from '../config/nprogress'
import PublicRoute from '../utils/publicRoute'
import PrivateRoute from '../utils/privateRoute'
import { history } from '../store'
NProgress.configure(config)

const ToDo = lazy(() => import('../pages/todo'))
const SignUp = lazy(() => import('../pages/signup'))
const NotFound = lazy(() => import('../pages/404'))

const Routes = () => {
  return (
    <> 
      <ConnectedRouter history={history} >
        <Suspense fallback={<RouteNProgress />}>
          {
            window.location.pathname === '/' &&
            <Redirect to={{
              pathname: '/todo'
            }} />
          }
          <Switch>
            <PrivateRoute path="/todo" component={ToDo} title="helmet.todo.title" description="helmet.todo.description" />
            <PublicRoute path="/signup" component={SignUp} title="helmet.signup.title" description="helmet.signup.description" />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </ConnectedRouter>
    </>
  )
}

export default Routes
