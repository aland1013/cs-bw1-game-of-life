import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import StopIcon from '@material-ui/icons/Stop';

const Rules = () => {
  return (
    <Grid container alignItems='center'>
      <Grid item xs={12}>
        <Typography variant='h4' align='center' gutterBottom>
          Rules:
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1' gutterBottom>
          The Game of Life is depicted on the 25x25 grid of square cells shown
          on the left. Each cell is in one of two possible states, alive
          (black), or dead (white). Every cell interacts with its eight
          neighbors, which are the cells that are horizontally, vertically, or
          diagonally adjacent to it. At each step in time, the following
          transitions occur:
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <StopIcon fontSize='small' />
      </Grid>
      <Grid item xs={11}>
        <Typography variant='body1' gutterBottom>
          Any live cell with fewer than two live neighbors dies, as if by
          underpopulation.
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <StopIcon fontSize='small' />
      </Grid>
      <Grid item xs={11}>
        <Typography variant='body1' gutterBottom>
          Any live cell with two or three live neighbors lives on to the next
          generation.
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <StopIcon fontSize='small' />
      </Grid>
      <Grid item xs={11}>
        <Typography variant='body1' gutterBottom>
          Any live cell with more than three live neighbors dies, as if by
          overpopulation.
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <StopIcon fontSize='small' />
      </Grid>
      <Grid item xs={11}>
        <Typography variant='body1' gutterBottom>
          Any dead cell with exactly three live neighbors becomes a live cell,
          as if by reproduction.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1'>
          The initial pattern constitutes the seed of the system. The first
          generation is created by applying the rules set forth above to every
          cell in the seed. Births and deaths occur simultaneously, and the
          discrete moment at which this happens is called a 'tick.' Each
          generation is a pure function of the preceding one. The rules are
          applied repeatedly to create future generations.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Rules;
