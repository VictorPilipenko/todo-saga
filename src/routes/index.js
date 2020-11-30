
import React, { Suspense, lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import RouteNProgress from '../utils/routeNProgress'
import NProgress from 'nprogress'
import config from '../config/nprogress'
import PublicRoute from '../utils/publicRoute'
import Layout from '../layout'
import { history } from '../store'
NProgress.configure(config)

const ToDo = lazy(() => import('../pages/todo'))
const SignUp = lazy(() => import('../pages/signup'))
const NotFound = lazy(() => import('../pages/notFound'))

const App = () => {
  return (
    <>
      <ConnectedRouter history={history} >
        <Layout>
          <Suspense fallback={<RouteNProgress />}>
            {
              window.location.pathname === '/' &&
              <Redirect to={{
                pathname: '/todo'
              }} />
            }
            <Switch>
              <PublicRoute path="/todo" component={ToDo} />
              <PublicRoute path="/signup" component={SignUp} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Layout>
      </ConnectedRouter>
    </>
  )
}

export default App
