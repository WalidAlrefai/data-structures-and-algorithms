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
  it('insert to empty LL', () => {
    const link = new LinkedLilst();
    link.append('A');
    expect(link.head.value).toEqual('A');
    expect(link.head.next).toBeNull();
  });
  it('test insert to LL if not empty', () => {
    const link = new LinkedLilst();
    link.append('A');
    link.append('B');
    expect(link.head.value).toBe('A');
    expect(link.head.next.value).toBe('B');
    expect(link.head.next.next).toBe(null);
  });
  it('test insert before ',()=>{
    const link = new LinkedLilst();
    link.append('A');
    link.append('B');
    link.append('C');
    // console.log(link.toString());
    link.insertBefore('C','D');
    console.log(link.toString());
    expect(link.head.value).toBe('A');
    expect(link.head.next.value).toBe('B');
    expect(link.head.next.next.value).toBe('D');
    expect(link.head.next.next.next.value).toBe('C');
    expect(link.head.next.next.next.next).toBe(null);
  });
  it('test insert before ',()=>{
    const link = new LinkedLilst();
    link.append('A');
    link.append('B');
    link.append('C');
    // console.log(link.toString());
    link.insertAfter('B','E');
    console.log(link.toString());
    expect(link.head.value).toBe('A');
    expect(link.head.next.value).toBe('B');
    expect(link.head.next.next.value).toBe('E');
    expect(link.head.next.next.next.value).toBe('C');
    expect(link.head.next.next.next.next).toBe(null);
  });
  it('test isPalindrome ',()=>{
    const link = new LinkedLilst();
    link.insert('A');
    link.insert('B');
    link.insert('A');
    // link.append('A');


    expect(link.isPalindrome()).toBe(true);
  });
  it('testing reverse method:',()=>{
    const link = new LinkedLilst();

    link.insert(6);
    link.insert(5);
    link.insert(4);
    link.insert(3);
    link.insert(2);
    link.insert(1);

    expect(link.reverse().toString()).toBe('{6} ->{5} ->{4} ->{3} ->{2} ->{1} ->Null');
  });
});
