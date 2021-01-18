import { IconButton } from '@material-ui/core';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import React from 'react';

function Button({handleSwitchCurrency}) {

  return (
    <IconButton onClick={handleSwitchCurrency}>
      <AutorenewIcon /> Switch Currencies
    </IconButton>
  );
}

export default Button;
