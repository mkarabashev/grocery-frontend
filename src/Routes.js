import React from 'react';
import { Route, withRouter } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { PrivateRoute } from './components';
import history from './history';
import * as pages from './pages';

const Routes = () => (
  <div>
    <PrivateRoute exact path="/" component={pages.Home} />
    <Route path="/login" component={pages.Login} />
    <Route path="/register" component={pages.Register} />
  </div>
);

const NonBlockApp = withRouter(Routes);

const Router = () => (
  <ConnectedRouter history={history}>
    <NonBlockApp />
  </ConnectedRouter>
);

export default Router;
