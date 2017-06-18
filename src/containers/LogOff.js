import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import RaisedButton from 'material-ui/RaisedButton';

import { logOff } from 'actions/auth/login';

const LogOff = ({ logOff }) => (
  <RaisedButton label="Log off" />
);

const mapDispatchToProps = dispatch => ({
  logOff: e => {
    e.preventDefault();
    dispatch(logOff());
    dispatch(push('/login'));
  }
})

export default connect(
  null,
  mapDispatchToProps
)(LogOff);
