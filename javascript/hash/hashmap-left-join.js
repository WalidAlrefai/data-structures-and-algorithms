// 'use strict';
// const Hash = require('./hashTable');
// const hashTable1 = new Hash(10);
// hashTable1.set('fond', 'enamored');
// hashTable1.set('wrath', 'anger');
// hashTable1.set('diligent', 'employed');
// hashTable1.set('outfit', 'garb');
// hashTable1.set('guide', 'usher');

// const hashTable2 = new Hash(10);
// hashTable2.set('fond', 'averse');
// hashTable2.set('wrath', 'delight');
// hashTable2.set('guide', 'follow');
// hashTable2.set('flow', 'be');
// hashTable1.set('guide', 'usher');

// console.log(leftJoin(hashTable1,hashTable2));

'use strict';


function leftJoin(h1, h2) {
  let result = [];
  console.log(h1.buckets);
  h1.buckets.forEach(elem => {
    Object.keys(elem.head.value).forEach((key) => {
      result.push([key, h1.get(key), h2.get(key)]);
    });
  });
  return result;
}

module.exports = leftJoin;

// leftJoin(hashTable1,hashTable2);



