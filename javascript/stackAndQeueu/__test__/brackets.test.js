'use strict';
const stackQueueBrackets = require('../stack-queue-brackets/brackets');

describe('testing',()=>{
  it('test 1',()=>{
    let str ='{{(jfj@[hfjhfjh])}}';
    expect(stackQueueBrackets(str)).toBe(true);
  });
  it('test 2',()=>{
    let str ='';
    expect(stackQueueBrackets(str)).toBe('empty');
  });
  it('test 3',()=>{
    let str ='{ggf}(111)[@#]';
    expect(stackQueueBrackets(str)).toBe(true);
  });
  it('test 4',()=>{
    let str ='{(})';
    expect(stackQueueBrackets(str)).toBe(false);
  });
  it('test 5',()=>{
    let str ='{(}})[';
    let str2 ='[}';
    expect(stackQueueBrackets(str)).toBe(false);
    expect(stackQueueBrackets(str2)).toBe(false);

  });
});
