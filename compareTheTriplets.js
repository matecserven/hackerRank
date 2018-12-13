'use strict';

const numbersOfJohn = [1, 2, 3];
const numbersOfBob = [2, 2, 2];

const compareTriplets = (arrayA, arrayB) => {
  let score = [0, 0];
  
  arrayA.forEach((elem, index) => {
    if (elem > arrayB[index]) {
      score[0]++;
    } else if (elem < arrayB[index]) {
      score[1]++;
    }
  });

  return score;
};

console.log(compareTriplets(numbersOfJohn, numbersOfBob));