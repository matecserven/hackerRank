'use strict';

const timeConversion = (string) => {
  let arr = string.slice(0, -2).split(':');
  if (string.includes('AM')) {
    if (arr[0] === '12') {
      arr[0] = '00';
    }
  }
  if (string.includes('PM')) {
    if (arr[0] !== '12') {
      arr[0] = Number(arr[0]) + 12;
    }
  }
  return arr.join(':');
};

console.log(timeConversion('12:00:00PM'));
console.log(timeConversion('00:00:00PM'));
console.log(timeConversion('05:05:00PM'));
console.log(timeConversion('12:00:00AM'));
console.log(timeConversion('00:00:00AM'));
console.log(timeConversion('05:05:00AM'));