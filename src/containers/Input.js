import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class Input extends Component {
  constructor(props) {
    super(props);
    this.initialInput = this.props.initialInput || '';
    this.changeInput = this.changeInput.bind(this);

    this.state = {
      input: this.initialInput
    };

  }

  componentWillReceiveProps({ reset }) {
    if (reset) this.changeInput(this.initialInput);
  }

  changeInput(newInput) {
    const { callback } = this.props;

    this.setState({
      input: newInput
    });

    callback(newInput);
  }

  render() {
    const {
      props: { label, callback, reset, ...otherProps },
      state: { input },
      changeInput
    } = this;

    return (
      <TextField
        {...otherProps}
        value={input}
        onChange={(e, value) => changeInput(value)}
        floatingLabelText={label}
      />
    );
  }
}

export default Input;
