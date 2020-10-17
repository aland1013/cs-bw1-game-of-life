import React, { useState } from 'react';
import ControlBar from './ControlBar';

let defaultGrid = [];
let row = [];
for (let a = 1; a <= 25; a++) {
  row.push(0);
}
for (let b = 1; b <= 25; b++) {
  defaultGrid.push(row);
}

const Grid = () => {
  const [cells, setCells] = useState(defaultGrid);
  const [buffer, setBuffer] = useState(defaultGrid);
  const [isRunning, setIsRunning] = useState(false);

  const toggleCell = (i, j) => {
    let newCells = [];

    for (let a = 0; a < cells.length; a++) {
      newCells[a] = cells[a].slice();
    }

    if (cells[i][j] === 0) {
      newCells[i][j] = 1;
    } else {
      newCells[i][j] = 0;
    }

    setCells(newCells);
    setBuffer(nextGeneration(newCells, 25, 25));
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
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '20px '.repeat(25),
          gridTemplateRows: '20px',
          gap: '1px 1px',
          backgroundColor: 'black',
          border: '1px solid black',
          margin: '0 auto',
          width: '524px'
        }}
      >
        {cells.map((row, i) => {
          return row.map((cell, j) => {
            return (
              <div
                style={{
                  backgroundColor: cell === 1 ? 'black' : 'white',
                  justifySelf: 'stretch',
                  alignSelf: 'stretch',
                  minHeight: '20px'
                }}
                onClick={() => (isRunning ? null : toggleCell(i, j))}
              ></div>
            );
          });
        })}
      </div>
      <ControlBar
        defaultGrid={defaultGrid}
        cells={cells}
        setCells={setCells}
        buffer={buffer}
        setBuffer={setBuffer}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        nextGeneration={nextGeneration}
      />
    </>
  );
};

export default Grid;
