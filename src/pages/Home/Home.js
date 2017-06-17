import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { logOff } from 'actions/login';

const Home = ({ logOff }) => (
  <section>Home Page <a href="/login" onClick={logOff}>log off</a></section>
);

const mapStateToProps = state => ({
  user: state.user.getIn([ 'userData', 'username' ])
});

const mapDispatchToProps = dispatch => ({
  logOff: e => {
    e.preventDefault();
    dispatch(logOff());
    dispatch(push('/login'));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
