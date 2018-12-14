'use strict';

const staircase = (steps) => {
  for (let j = 0; j < steps; j++) {
    let row = '';
    for (let i = 0; i < steps; i++) {
      (j + i > steps - 2) ? row = row.concat('#') : row = row.concat(' ');
    }
    console.log(row);
  }
};

staircase(10);
