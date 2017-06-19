import React from 'react';
import { withRouter } from 'react-router';
//import { ConnectedRouter } from 'react-router-redux';
import { HashRouter } from 'react-router-dom';

import Layout from './Layout';
//import history from './history';

const NonBlockApp = withRouter(Layout);

const Routes = () => (
  <HashRouter>
    <NonBlockApp />
  </HashRouter>
);

export default Routes;
