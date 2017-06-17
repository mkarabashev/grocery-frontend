import { Component } from 'react';

class FormService extends Component {
  constructor(props) {
    super(props);
    this.resetState = this.resetState.bind(this);
    this.handleInput = this.handleInput.bind(this);

    this.state = {
      shouldReset: false
    };
  }

  componentDidUpdate() {
    if (this.state.shouldReset) this.setState({
      shouldReset: false
    })
  }

  resetState() {
    this.setState({
      shouldReset: true
    });
  }

  handleInput(inputName, inputValue) {
    this[inputName] = inputValue.trim();
  }
}

export default FormService;
