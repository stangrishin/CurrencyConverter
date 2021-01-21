import React from 'react';
import { MenuItem, Select } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  change_init_curr,
  change_dest_curr,
} from '../../redux/actions/currency';

function CurrencySelect({ initOrDest }) {
  const dispatch = useDispatch();
  const curr = useSelector((state) => state[`${initOrDest}Curr`]);
  const dependencies = useSelector((state) => state.allTheCurrencies);


  //функция, которая будет следить за изменением самой исх или конечной валюты, в зависимости от того, от кого придет event
  const handleCurrChange = (event) => {
    if (event.target.name === 'initCurrInput') {
      dispatch(change_init_curr(event.target.value));
    } else {
      dispatch(change_dest_curr(event.target.value));
    }
  };

  return (
    <Select
      name={`${initOrDest}CurrInput`} //нужно уникальное для поля имя, чтобы мы различали затем, какой диспатч запускать
      variant='outlined'
      value={curr}
      onChange={handleCurrChange}
    >
      {dependencies.map((
        currency //список доступных валют для выбора
      ) => (
        <MenuItem key={currency} value={currency}>
          {currency}
        </MenuItem>
      ))}
    </Select>
  );
}

export default CurrencySelect;
