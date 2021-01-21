import { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from './Components/Button';
import PieceOfExchange from './Components/PieceOfExchange';
import { useDispatch } from 'react-redux';
import { get_rates_thunk } from './redux/actions/currency';
import CurrencySelect from './Components/CurrencySelect';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_rates_thunk());
  }, []); //после того, как компонент замаунтится, отправим запрос на получение курса и списка валют

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
          <h5 style={{ textAlign: 'center' }}>THE DESIGN IS AWESOME</h5>
          <h2 style={{ textAlign: 'center' }}>CURRENCY CONVERTER</h2>
          <div>
            <PieceOfExchange initOrDest={'init'} />
            <CurrencySelect initOrDest={'init'} />
          </div>
          <Button />
          <div>
            <PieceOfExchange initOrDest={'dest'} />
            <CurrencySelect initOrDest={'dest'} />
          </div>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
