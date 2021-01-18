import React from 'react';
import { MenuItem, Select, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { change_init_value } from '../../redux/actions/currency';

function PieceOfExchange() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return (
    <div>
      <TextField variant='outlined' type='number' placeholder='Value here' value={state.initValue} onChange={(e)=>{dispatch(change_init_value(e.target.value))}}/>
      <Select variant='outlined'>
        <MenuItem value='USD'>USD</MenuItem>
        <MenuItem value='NOK'>NOK</MenuItem>
      </Select>
    </div>
  );
}
export default PieceOfExchange;
