import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route {...rest} render={props => user
    ? <Component {...props} />
    : <Redirect to={{
      pathname: '/login',
      state: { from: props.location }
    }}/>
  }/>
);

const mapStateToProps = state => ({
  user: state.user.get('username')
})

export default connect(mapStateToProps)(PrivateRoute);
