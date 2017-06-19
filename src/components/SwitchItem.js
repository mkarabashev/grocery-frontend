import React from 'react';

const SwitchItem = ({ name, isActive, ...rest }) => {
  const css = `lists__switch-item ${isActive && 'lists__switch-item--active'}`
  return (
    <span {...rest} className={css}>{name}</span>
  )
};

export default SwitchItem;
