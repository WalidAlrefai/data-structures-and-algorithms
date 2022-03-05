'use strict';

const { it } = require('eslint/lib/rule-tester/rule-tester');
const LinkedLilst = require('../index');

describe('Linked List', () => {
  it('works', () => {
    const link = new LinkedLilst();
    expect(link).toBeInstanceOf(LinkedLilst);
    expect(link.head).toBe(null);
  });
  it('insert to empty LL', () => {
    const link = new LinkedLilst();
    link.insert('A');
    expect(link.head.value).toEqual('A');
    expect(link.head.next).toBeNull();
  });
  it('test insert to LL if not empty', () => {
    const link = new LinkedLilst();
    link.insert('A');
    link.insert('B');
    expect(link.head.value).toBe('B');
    expect(link.head.next.value).toBe('A');
    expect(link.head.next.next).toBe(null);
  });
  it('test if node include value', () => {
    const link = new LinkedLilst();
    link.insert('A');
    link.insert('B');
    link.insert('C');
    expect(link.include('A')).toBeTruthy();
    expect(link.include('B')).toBeTruthy();
    expect(link.include('C')).toBeTruthy();
    expect(link.include('x')).toBeFalsy();
    expect(link.include('y')).toBeFalsy();
  });

  it('test of string', () => {
    const link = new LinkedLilst();
    link.insert('C');
    link.insert('B');
    link.insert('A');
    expect(link.toString()).toBe('{A} ->{B} ->{C} ->Null');
  });
});
