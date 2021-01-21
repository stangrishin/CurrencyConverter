import React from 'react';
import { MenuItem, Select, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  change_init_curr,
  change_dest_curr,
  change_init_value,
  change_dest_value,
} from '../../redux/actions/currency';

function PieceOfExchange({ initOrDest }) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state[`${initOrDest}Value`]);
  const curr = useSelector((state) => state[`${initOrDest}Curr`]);
  const dependencies = useSelector((state) => state.allTheCurrencies);

//функция, которая будет следить за изменением количества исх или конечного значения, в зависимости от того, от кого придет event
  const handleValueChange = (event) => {
    if (event.target.name === 'initValueInput') {
      dispatch(change_init_value(event.target.value));
    } else {
      dispatch(change_dest_value(event.target.value));
    }
  };

  //функция, которая будет следить за изменением самой исх или конечной валюты, в зависимости от того, от кого придет event
  const handleCurrChange = (event) => {
    if (event.target.name === 'initCurrInput') {
      dispatch(change_init_curr(event.target.value));
    } else {
      dispatch(change_dest_curr(event.target.value));
    }
  };

  return (
    <div>
      <TextField
        name={`${initOrDest}ValueInput`}
        variant='outlined'
        type='number'
        placeholder='Value here'
        //Значение в поле должно быть ограничено 3мя знаками после запятой, но при этом поле можно очистить полностью
        value={value === '' ? '' : Math.floor(value * 1000) / 1000}
        onChange={handleValueChange}
      />
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
    </div>
  );
}
export default PieceOfExchange;
