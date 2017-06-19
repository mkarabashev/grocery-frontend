import React from 'react';
import { withRouter } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import Layout from './Layout';
import history from './history';

const NonBlockApp = withRouter(Layout);

const Router = () => (
  <ConnectedRouter history={history}>
    <NonBlockApp />
  </ConnectedRouter>
);

export default Router;
