'use strict';

const LinkedLilst = require('../index');

describe('Linked List', () => {
  it('test insert before ',()=>{
    const link = new LinkedLilst();
    link.append('A');
    link.append('B');
    link.append('C');


    expect(link.getKth(0)).toBe('C');
    expect(link.getKth(1)).toBe('B');
    expect(link.getKth(3)).toBe('A');
    expect(link.getKth(7)).toBe('exception');
    expect(link.getKth(-1)).toBe('exception');

  });
});
