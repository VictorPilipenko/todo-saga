import { Suspense, lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../store'
import RouteNProgress from './suspenseFallback'
import PrivateRoute from './hoc/private'
import PublicRoute from './hoc/public'

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
