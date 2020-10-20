import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const ControlBar = ({
  defaultGrid,
  cells,
  setCells,
  buffer,
  setBuffer,
  isRunning,
  setIsRunning,
  nextGeneration
}) => {
  const [generation, setGeneration] = useState(1);
  const [speedToggle, setSpeedToggle] = useState(true);

  const seedGrid = () => {
    let arr = new Array(25);
    for (let a = 0; a < 25; a++) {
      arr[a] = new Array(25);
      for (let b = 0; b < 25; b++) {
        arr[a][b] = Math.round(Math.random());
      }
    }
    return arr;
  };

  const setRandom = () => {
    const newCells = seedGrid();
    setCells(newCells);
    setBuffer(nextGeneration(newCells, 25, 25));
    setGeneration(1);
    setIsRunning(false);
  };

  const iterate = () => {
    setCells(buffer);
    setBuffer(nextGeneration(buffer, 25, 25));
    setGeneration(generation + 1);
  };

  useEffect(() => {
    if (isRunning) {
      const timeout = setTimeout(
        () => {
          iterate();
        },
        speedToggle ? 500 : 1000
      );
      return () => clearTimeout(timeout);
    }
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='h5' align='center' gutterBottom>
          Generation: {generation}
        </Typography>
      </Grid>
      <Grid item container justify='space-around'>
        <Button variant='contained' onClick={() => setIsRunning(!isRunning)}>
          play/pause
        </Button>
        <Button
          variant='contained'
          onClick={() => {
            iterate();
          }}
        >
          next
        </Button>
        <Button variant='contained' onClick={() => setRandom()}>
          seed
        </Button>
        <Button
          variant='contained'
          onClick={() => {
            setCells(defaultGrid);
            setBuffer(defaultGrid);
            setGeneration(1);
            setIsRunning(false);
          }}
        >
          clear
        </Button>
        <Button
          variant='contained'
          onClick={() => setSpeedToggle(!speedToggle)}
        >
          fast/slow
        </Button>
      </Grid>
    </Grid>
  );
};

export default ControlBar;
