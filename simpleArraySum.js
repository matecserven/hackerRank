'use strict';

const simpleArraySum = (arr) => {
  return arr.reduce((sum, elem) => sum + elem);
}

console.log(simpleArraySum([1, 2, 3]));
