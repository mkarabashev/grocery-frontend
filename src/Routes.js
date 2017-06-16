import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { PrivateRoute } from './components';
import { history } from './store';
import * as pages from './pages';

const Routes = () => (
  <ConnectedRouter history={history}>
    <div>
      <PrivateRoute exact path="/" component={pages.Home} />
      <Route path="/login" component={pages.Login} />
      <PrivateRoute path="/home" component={pages.Home} />
    </div>
  </ConnectedRouter>
);

export default Routes;
