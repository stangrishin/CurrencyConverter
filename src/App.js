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
  const initCurr = useSelector((state) => state.initCurr);
  const destCurr = useSelector((state) => state.destCurr);

  useEffect(() => {
    dispatch(get_rates_thunk());
  }, [initCurr, destCurr]); //при каждом изменении изначальной валюты или конечной, а также после того, как компонент замаунтится, отправим запрос на получение курса и списка валют

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
          <h5 style={{ 'text-align': 'center' }}>THE DESIGN IS AWESOME</h5>
          <h2 style={{ 'text-align': 'center' }}>CURRENCY CONVERTER</h2>
          <PieceOfExchange initOrDest={'init'} />
          <Button />
          <PieceOfExchange initOrDest={'dest'} />
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
