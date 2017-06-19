import React from 'react';
import { withRouter } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import Layout from './Layout';
import history from './history';

const NonBlockApp = withRouter(Layout);

const Routes = () => (
  <ConnectedRouter history={history}>
    <NonBlockApp />
  </ConnectedRouter>
);

export default Routes;
