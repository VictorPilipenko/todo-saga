
import React, { Suspense, lazy } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";
import RouteNProgress from '../utils/routeNProgress';
const history = createBrowserHistory();

const ToDo = lazy(() => import('../pages/todo'));
const NotFound = lazy(() => import('../pages/notFound'));

const App = () => {
  return (
    <>
      <Router history={history} >
        <Suspense fallback={<RouteNProgress />}>
          {
            window.location.pathname === '/' &&
            <Redirect to={{
              pathname: '/todo'
            }} />
          }
          <Switch>
            <Route path="/todo" component={ToDo} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </>
  )
};

export default App;
