import React from 'react';
import { MenuItem, Select, TextField } from '@material-ui/core';

function PieceOfExchange() {
  return (
    <div>
      <TextField
        variant='outlined'
        type='number'
        placeholder='Value here'
      />
      <Select variant='outlined'>
        <MenuItem value='USD'>USD</MenuItem>
        <MenuItem value='NOK'>NOK</MenuItem>
      </Select>
    </div>
  );
}
export default PieceOfExchange;
