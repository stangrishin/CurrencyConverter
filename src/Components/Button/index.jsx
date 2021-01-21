import { IconButton } from '@material-ui/core';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import React from 'react';

function Button({switchcurrs}) {

  return (
    <IconButton onClick={switchcurrs}>
      <AutorenewIcon /> Switch Currencies
    </IconButton>
  );
}

export default Button;
