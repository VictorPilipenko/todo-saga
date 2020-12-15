import { Suspense, lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from '../store'
import RouteNProgress from './suspenseFallback'
import PrivateRoute from './hoc/private'
import PublicRoute from './hoc/public'

const NotFound = lazy(() => import('../pages/404'))
const SignUp = lazy(() => import('../pages/sign-up'))
const SignIn = lazy(() => import('../pages/sign-in'))
const PasswordRecovery = lazy(() => import('../pages/password-recovery'))
const PasswordChange = lazy(() => import('../pages/password-change'))
const ToDo = lazy(() => import('../pages/todo'))

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
            <PublicRoute path="/sign-up" component={SignUp} title="helmet.signup.title" description="helmet.signup.description" />
            <PublicRoute path="/sign-in" component={SignIn} title="helmet.signin.title" description="helmet.signin.description" />
            <PublicRoute path="/password-recovery" component={PasswordRecovery} title="helmet.password.recover.title" description="helmet.password.recover.description" />
            <PublicRoute path="/password-change" component={PasswordChange} title="helmet.password.change.title" description="helmet.password.change.description" />
            <PrivateRoute path="/todo" component={ToDo} title="helmet.todo.title" description="helmet.todo.description" />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </ConnectedRouter>
    </>
  )
}

export default Routes
