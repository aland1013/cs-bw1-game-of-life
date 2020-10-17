import React, { useState, useEffect } from 'react';

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
    <div
      style={{
        width: '50%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: '20px auto'
      }}
    >
      <button onClick={() => setIsRunning(!isRunning)}>play/pause</button>
      <button
        onClick={() => {
          iterate();
        }}
      >
        next
      </button>
      <button onClick={() => setRandom()}>random</button>
      <button
        onClick={() => {
          setCells(defaultGrid);
          setBuffer(defaultGrid);
          setGeneration(1);
          setIsRunning(false);
        }}
      >
        clear
      </button>
      <button onClick={() => setSpeedToggle(!speedToggle)}>fast/slow</button>
      <h3>Generation: {generation}</h3>
    </div>
  );
};

export default ControlBar;
