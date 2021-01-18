import React from 'react';
import { MenuItem, Select, TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { change_init_value } from '../../redux/actions/currency';

function PieceOfExchange({ initOrDest, handleValueChange, handleCurrChange }) {
  const state = useSelector((state) => state);

  return (
    <div>
      <TextField
        name={`${initOrDest}ValueInput`}
        variant='outlined'
        type='number'
        placeholder='Value here'
        value={state[`${initOrDest}Value`]}
        onChange={handleValueChange}
      />
      <Select
        name={`${initOrDest}CurrInput`}
        variant='outlined'
        value={state[`${initOrDest}Curr`]}
        onChange={handleCurrChange}
      >
        {state.allTheCurrencies.map((currency) => (
          <MenuItem key={currency} value={currency}>
            {currency}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
export default PieceOfExchange;
