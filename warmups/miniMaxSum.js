'use strict';

const miniMaxSum = (arr) => {
  let minSum = 0;
  let maxSum = 0;
  arr.sort((a, b) => a - b);
  minSum = arr.slice(0, arr.length - 1).reduce((acc, curr) => acc + curr);
  maxSum = arr.slice(1).reduce((acc, curr) => acc + curr);
  console.log(minSum, maxSum);
};

miniMaxSum([221, 7, 69, 2, 8974]);
