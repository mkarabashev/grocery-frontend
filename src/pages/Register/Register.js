import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import { Input, FormService } from 'containers';
import { notEmptyMany } from 'utils/validation';
import { registerIfNeeded } from 'actions/register';

class Register extends FormService {
  constructor(props) {
    super(props);

    this.username = '';
    this.firstName = '';
    this.lastName = '';
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const {
      props: { registerUser },
      username,
      firstName,
      lastName,
      resetState
    } = this;

    const fields = [ username, firstName, lastName ];

    e.preventDefault();

    if (notEmptyMany(fields)) {
      registerUser({ username, firstName, lastName });
      resetState();
    }
  }

  render() {
    const { state: { shouldReset }, handleInput, handleSubmit } = this;

    return (
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="any__title">Register</h1>
        <Input
          className="form__input"
          label="First Name"
          reset={shouldReset}
          callback={input => handleInput('firstName', input)}
        />
        <Input
          className="form__input"
          label="Last Name"
          reset={shouldReset}
          callback={input => handleInput('lastName', input)}
        />
        <Input
          className="form__input"
          label="Username"
          reset={shouldReset}
          callback={input => handleInput('username', input)}
        />
        <RaisedButton
          type="submit"
          className="form__btn"
          label="Register"
          primary
        />
      </form>
    );
  }
}

const mapDisptachToProps = dispatch => ({
  registerUser: (userData) => {
    dispatch(registerIfNeeded(userData))
  }
})

export default connect(
  null,
  mapDisptachToProps
)(Register);
