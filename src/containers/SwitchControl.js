import React, { Component } from 'react';

import SwitchItem from 'components/SwitchItem';

class SwitchControl extends Component {
  constructor(props) {
    super(props);
    this.makeActive = this.makeActive.bind(this);
    this.checkActive = this.checkActive.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      active: this.props.menuItems[0]
    };
  }

  makeActive(item) {
    this.setState({
      active: item
    });
  }

  checkActive(item) {
    return item === this.state.active;
  }

  handleClick(item) {
    this.makeActive(item);
    this.props.callback(item);
  }

  render() {
    const {
      props: { menuItems, callback },
      checkActive,
      handleClick
    } = this;

    const switches = menuItems.map((item, i) =>
      <span key={item}>
        <SwitchItem name={item} isActive={checkActive(item)} onClick={() => handleClick(item)} />
        {i < menuItems.length - 1 && ` / `}
      </span>
    );

    return (
      <div>
        {switches}
      </div>
    );
  }
}

export default SwitchControl;
