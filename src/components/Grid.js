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
  };

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '20px '.repeat(25),
          gridTemplateRows: '20px',
          gap: '2px 2px',
          backgroundColor: 'black',
          border: '2px solid black',
          margin: '0 auto',
          width: '548px'
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
                onClick={() => toggleCell(i, j)}
              ></div>
            );
          });
        })}
      </div>
      <ControlBar defaultGrid={defaultGrid} cells={cells} setCells={setCells} />
    </>
  );
};

export default Grid;
