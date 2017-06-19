import React from 'react';
import IconButton from 'material-ui/IconButton';

const AppMenuBtn = ({ btn, ...props }) => (
  <IconButton {...props} iconStyle={{color: "white"}}>
    {btn}
  </IconButton>
);

export default AppMenuBtn;
