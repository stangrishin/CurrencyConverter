import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from './Components/Button';
import PieceOfExchange from './Components/PieceOfExchange';
import { useDispatch, useSelector } from 'react-redux';
import { change_init_value, change_dest_value } from './redux/actions/currency';

function App() {
  const dispatch = useDispatch();
  const handleValueChange = (event) => {
    console.log(event.target.name);
    if (event.target.name === 'initValueInput') {
      dispatch(change_init_value(event.target.value));
    } else {
      dispatch(change_dest_value(event.target.value));
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
          <PieceOfExchange
            initOrDest={'init'}
            handleValueChange={handleValueChange}
          />
          <Button />
          <PieceOfExchange
            initOrDest={'dest'}
            handleValueChange={handleValueChange}
          />
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
