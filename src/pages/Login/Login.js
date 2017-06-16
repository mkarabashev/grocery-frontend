import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { loginUser } from 'actions/login';

class Login extends Component {
  constructor(props) {
    super(props);

    this.initialInput = '';
    this.changeInput = this.changeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      input: this.initialInput
    };

  }

  handleSubmit(e) {
    const {
      props: { loginUser },
      state: { input },
      changeInput,
      initialInput
    } = this;

    e.preventDefault();

    const user = input.trim();
    if (user.length > 0) loginUser(user);

    changeInput(initialInput);
  }

  changeInput(newInput) {
    this.setState({
      input: newInput
    });
  }

  render() {
    const {
      state: { input },
      changeInput,
      handleSubmit
    } = this;

    return (
      <section className="login">
        <h1 className="any__title">Login Page</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            value={input}
            onChange={(e, value) => changeInput(value)}
            floatingLabelText="User"
          />
          <RaisedButton
            type="submit"
            className="login__btn"
            label="Log in"
            primary
          />
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.get('username')
})

const mapDispatchToProps = dispatch => ({
  loginUser: user => {
    dispatch(loginUser(user));
    dispatch(push('/'));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
