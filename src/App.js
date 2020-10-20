import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Board from './components/Board';
import Rules from './components/Rules';
import ControlBar from './components/ControlBar';

function App() {
  return (
    <Container>
      <Typography variant='h1' align='center' gutterBottom>
        Conway's Game of Life
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Board />
        </Grid>
        <Grid item xs={6}>
          <Rules />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
