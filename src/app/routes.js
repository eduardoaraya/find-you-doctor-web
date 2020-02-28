import React from 'react';
import {
  BrowserRouter, Switch, Route, HashRouter,
} from 'react-router-dom';

import Dashboard from '../pages/client/dashboard';
import Login from '../pages/client/login';
import Privacy from '../pages/site/privacy';
import Terms from '../pages/site/terms';

export default function Routes() {
  return (
    <BrowserRouter>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
        </Switch>
      </HashRouter>
    </BrowserRouter>
  );
}
