import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from './Components/Button';
import PieceOfExchange from './Components/PieceOfExchange';

function App() {
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
          <PieceOfExchange />
          <Button />
          <PieceOfExchange />
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
