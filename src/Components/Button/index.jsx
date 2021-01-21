import { IconButton } from '@material-ui/core';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  change_init_curr,
  change_dest_curr,
  get_rates_thunk
} from '../../redux/actions/currency';

function Button() {
  const dispatch = useDispatch();
  const initCurr = useSelector((state) => state.initCurr);
  const destCurr = useSelector((state) => state.destCurr);
  
  //функция, которая будет менять валюты местами и запрашивать новый курс
  const handleSwitchCurrency = () => {
    dispatch(change_init_curr(destCurr));
    dispatch(change_dest_curr(initCurr));
    dispatch(get_rates_thunk());
  };
  return (
    <IconButton onClick={handleSwitchCurrency}>
      <AutorenewIcon /> Switch Currencies
    </IconButton>
  );
}

export default Button;
