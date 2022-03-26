'use strict';
const Stack = require('../Stack');
function stackQueueBrackets(str) {
  const bracketStack = new Stack();
  let string = str.split('');
  if(string.length === 0){return 'empty';}
  string.forEach((value) => {
    if (value === '(' || value === '{' || value === '[') {
      bracketStack.push(value);
    } else if (value === ')' && bracketStack.peek() === '(') {
      bracketStack.pop();
    } else if (value === '}' && bracketStack.peek() === '{') {
      bracketStack.pop();
    } else if (value === ']' && bracketStack.peek() === '[') {
      bracketStack.pop();
    }
  });

  if (bracketStack.isEmpty()) {
    return true;
  } else {
    return false;
  }
}

module.exports = stackQueueBrackets;

