import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

import { Input, FormService } from 'containers';
import { loginIfNeeded } from 'actions/login';
import { notEmptyMany } from 'utils/validation';

class Login extends FormService {
  constructor(props) {
    super(props);
    this.username = '';
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { props: { loginUser }, resetState, username } = this;
    const fields = [ username ];

    if (notEmptyMany(fields)) {
      loginUser({ username });
      resetState();
    }
  }

  render() {
    const { state: { shouldReset }, handleInput, handleSubmit } = this;

    return (
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="any__title">Login Page</h1>
        <Input
          className="form__input"
          label="Username"
          reset={shouldReset}
          callback={input => handleInput('username', input)}
        />
        <p>
          Don't have an account?&nbsp;
          <Link to="/register">Create a new one.</Link>
        </p>
        <RaisedButton
          type="submit"
          className="form__btn"
          label="Log in"
          primary
        />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.get('username')
})

const mapDispatchToProps = dispatch => ({
  loginUser: loginData => {
    dispatch(loginIfNeeded(loginData));
    //dispatch(push('/'))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
