import React from 'react';
import PixelGrid from 'react-pixel-grid';

const Grid = () => {
  function nextGeneration(arr, w, h) {
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
  }

  let arr = new Array(25);
  for (let a = 0; a < 25; a++) {
    arr[a] = new Array(25);
    for (let b = 0; b < 25; b++) {
      arr[a][b] = Math.round(Math.random());
    }
  }

  let newArr = nextGeneration(arr, 25, 25);

  return <PixelGrid data={arr} />;
};

export default Grid;
