import React from 'react';
import { MenuItem, Select, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { change_init_value } from '../../redux/actions/currency';

function PieceOfExchange({initOrDest, handleValueChange}) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return (
    <div>
      <TextField name={`${initOrDest}ValueInput`} variant='outlined' type='number' placeholder='Value here' value={state[`${initOrDest}Value`]} onChange={handleValueChange}/>
      <Select variant='outlined'>
        <MenuItem value='USD'>USD</MenuItem>
        <MenuItem value='NOK'>NOK</MenuItem>
      </Select>
    </div>
  );
}
export default PieceOfExchange;
