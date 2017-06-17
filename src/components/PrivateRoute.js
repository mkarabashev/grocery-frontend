import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, user }) => {
  if (user) return <Component />;
  return <Redirect to='/login' />;
}

const mapStateToProps = state => ({
  user: state.user.getIn([ 'userData', 'username' ])
})

export default connect(mapStateToProps)(PrivateRoute);
