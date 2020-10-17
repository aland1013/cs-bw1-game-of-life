import React from 'react';

const ControlBar = ({ defaultGrid, cells, setCells }) => {
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

  const nextGeneration = (arr, w, h) => {
    let newArr = new Array(h);
    for (let a = 0; a < h; a++) {
      newArr[a] = new Array(w);
    }

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        let neighbors = 0;

        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            if (x === 0 && y === 0) {
            } else if (
              typeof arr[i + x] != 'undefined' &&
              typeof arr[i + x][j + y] != 'undefined' &&
              arr[i + x][j + y]
            ) {
              neighbors++;
            }
          }
        }

        const cell = arr[i][j];
        const total = cell + neighbors;

        if (total === 3) {
          newArr[i][j] = 1;
        } else if (total === 4) {
          newArr[i][j] = cell;
        } else {
          newArr[i][j] = 0;
        }
      }
    }

    return newArr;
  };

  return (
    <>
      <button onClick={() => setCells(nextGeneration(cells, 25, 25))}>
        next
      </button>
      <button onClick={() => setCells(seedGrid())}>random</button>
      <button onClick={() => setCells(defaultGrid)}>clear</button>
    </>
  );
};

export default ControlBar;
