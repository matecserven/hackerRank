'use strict';

const plusMinus = (arr) => {
  let plus = 0;
  let minus = 0;
  let zero = 0;

  arr.forEach(elem => {
    if (elem > 0) {
      plus++;
    } else if (elem < 0) {
      minus++;
    } else {
      zero++;
    }
  });

  console.log((plus / arr.length).toFixed(6));
  console.log((minus / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
};

plusMinus([1, 1, 2, -1, -1, 0]);
