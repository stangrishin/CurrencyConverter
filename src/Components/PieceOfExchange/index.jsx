import React from 'react';
import { TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  change_init_value,
  change_dest_value,
} from '../../redux/actions/currency';

function PieceOfExchange({ initOrDest }) {
  const dispatch = useDispatch();
  const value = useSelector((state) => state[`${initOrDest}Value`]);

  //функция, которая будет следить за изменением количества исх или конечного значения, в зависимости от того, от кого придет event
  const handleValueChange = (event) => {
    if (event.target.name === 'initValueInput') {
      dispatch(change_init_value(event.target.value));
    } else {
      dispatch(change_dest_value(event.target.value));
    }
  };

  return (
    <TextField
      name={`${initOrDest}ValueInput`}
      variant='outlined'
      type='number'
      placeholder='Value here'
      //Значение в поле должно быть ограничено 3мя знаками после запятой, но при этом поле можно очистить полностью
      value={value === '' ? '' : Math.floor(value * 1000) / 1000}
      onChange={handleValueChange}
    />
  );
}
export default PieceOfExchange;
