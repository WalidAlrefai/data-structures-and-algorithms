'use strict';

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid =Math.floor(arr.length / 2) ;
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length || right.length) {
    if (left.length !== 0) {
      result.push(left.shift());
    } else if (right.length !== 0) {
      result.push(right.shift());
    }
  }
  return result;
}

module.exports = mergeSort;


