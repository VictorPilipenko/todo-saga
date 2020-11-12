
import React from "react";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";
import ToDo from '../pages/todo'
import NotFound from '../pages/notFound'
const history = createBrowserHistory();

const App = () => {
  return (
    <>
      <Router history={history} >
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
      </Router>
    </>
  )
};

export default App;
