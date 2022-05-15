'use strict';
const HashTable = require('./hashTable');
function repeatedWord(str){
  const hash = new HashTable(10);
  const arr = str.split(/[, ]+/);
  let result = '';
  for(let i = 0; i < arr.length; i++){
    if(!hash.contains(arr[i])){
      hash.set(arr[i], 1);
    }else{
      result = arr[i];
      break;
    }
  }
  return result;
}
module.exports = repeatedWord;
