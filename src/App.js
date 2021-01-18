import { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from './Components/Button';
import PieceOfExchange from './Components/PieceOfExchange';
import { useDispatch, useSelector } from 'react-redux';
import {
  change_init_value,
  change_dest_value,
  change_init_curr,
  change_dest_curr,
  get_rates_thunk,
} from './redux/actions/currency';

function App() {
  const dispatch = useDispatch();
  const {initCurr, destCurr} = useSelector((state) => state);

  useEffect(() => {
    dispatch(get_rates_thunk());
  }, [initCurr, destCurr]);//при каждом изменении изначальной валюты или конечной, а также после того, как компонент замаунтится, отправим запрос на получение курса и списка валют

  //функция, которая будет менять валюты местами
  const handleSwitchCurrency = () => {
    dispatch(change_init_curr(destCurr));//нам надо изменить исх и конечные валюты местами
    dispatch(change_dest_curr(initCurr));
    dispatch(get_rates_thunk());//и запросить новый курс
  };
  //функция, которая будет следить за изменением количества исх или конечного значения, в зависимости от того, от кого придет event
  const handleValueChange = (event) => {
    if (event.target.name === 'initValueInput') {
      dispatch(change_init_value(event.target.value));
    } else {
      dispatch(change_dest_value(event.target.value));
    }
  };
  //функция, которая будет следить за изменением количества исх или конечного значения, в зависимости от того, от кого придет event

  const handleCurrChange = (event) => {
    if (event.target.name === 'initCurrInput') {
      dispatch(change_init_curr(event.target.value));
    } else {
      dispatch(change_dest_curr(event.target.value));
    }
  };
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justify='center'
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={6}>
        <Container maxWidth='sm'>
          <h5 style={{'text-align':'center'}}>THE DESIGN IS AWESOME</h5>
          <h2 style={{'text-align':'center'}}>CURRENCY CONVERTER</h2>
          <PieceOfExchange
            initOrDest={'init'}
            handleValueChange={handleValueChange}
            handleCurrChange={handleCurrChange}
          />
          <Button handleSwitchCurrency={handleSwitchCurrency}/>
          <PieceOfExchange
            initOrDest={'dest'}
            handleValueChange={handleValueChange}
            handleCurrChange={handleCurrChange}
          />
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
