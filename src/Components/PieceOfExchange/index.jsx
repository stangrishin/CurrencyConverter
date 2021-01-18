import React from 'react';
import { MenuItem, Select, TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';

function PieceOfExchange({ initOrDest, handleValueChange, handleCurrChange }) {
  const state = useSelector((state) => state);

  return (
    <div>
      <TextField
        name={`${initOrDest}ValueInput`}
        variant='outlined'
        type='number'
        placeholder='Value here'
        //Значение в поле должно быть ограничено 3мя знаками после запятой, но при этом поле можно очистить полностью
        value={
          state[`${initOrDest}Value`] === ''
            ? ''
            : Math.floor(state[`${initOrDest}Value`] * 1000) / 1000
        }
        onChange={handleValueChange}
      />
      <Select
        name={`${initOrDest}CurrInput`}//нужно уникальное для поля имя, чтобы мы различали затем, какой диспатч запускать
        variant='outlined'
        value={state[`${initOrDest}Curr`]}
        onChange={handleCurrChange}
      >
        {state.allTheCurrencies.map((currency) => (//список доступных валют для выбора
          <MenuItem key={currency} value={currency}>
            {currency}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
export default PieceOfExchange;
