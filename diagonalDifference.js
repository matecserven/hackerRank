'use strict';

let matrix = [[1, 0, 1], [0, 2, 0], [3, 0, 3]];

const diagonalDifference = (matrix) => {
  let diag1 = 0;
  let diag2 = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === (matrix.length - 1) / 2 && j === (matrix.length - 1) / 2) {
        diag1 += matrix[i][j];
        diag2 += matrix[i][j];
      } else if (i === j) {
        diag1 += matrix[i][j];
      } else if (j + i === matrix[i].length - 1) {
        diag2 += matrix[i][j];
      }
    }
  }
  return Math.abs(diag1 - diag2);
};

console.log(diagonalDifference(matrix));
