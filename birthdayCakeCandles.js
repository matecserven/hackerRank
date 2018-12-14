'use strict';

const birthdayCakeCandles = (arr) => {
  return arr.sort((a, b) => b - a).filter((highest) => arr[0] === highest).length;  
};

console.log(birthdayCakeCandles([1, 5, 6, 6, 5, 2]));