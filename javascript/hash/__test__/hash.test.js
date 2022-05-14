'use strict';
const { it } = require('eslint/lib/rule-tester/rule-tester');
const HashTable = require('../hashTable');

describe('Hash Table', () => {
  it('works', () => {
    const hash = new HashTable(10);
    expect(hash).toBeInstanceOf(HashTable);
  });
  it('can hash', () => {
    const hash = new HashTable(10);
    expect(hash.hash('walid')).toBe(1);
    expect(hash.hash('islam')).toBe(5);
    expect(hash.hash('ibrahim')).toBe(5);
  });
  it('can set and get', () => {
    const hash = new HashTable(10);
    hash.set('name', 'bob');
    expect(hash.get('name')).toBe('bob');
  });
  it('key that does not exist ', () => {
    const hash = new HashTable(10);
    expect(hash.get('name')).toBe(null);
  });
  it('test key', () => {
    const hash = new HashTable(10);
    hash.set('name', 'bob');
    hash.set('age', '20');
    hash.set('value', '100');
    expect(hash.keys()).toEqual(['name', 'value', 'age']);
  });
  it('test contains', () => {
    const hash = new HashTable(10);
    hash.set('name', 'bob');
    hash.set('age', '20');
    hash.set('value', '100');
    expect(hash.contains('name')).toBe(true);
    expect(hash.contains('value')).toBe(true);
    expect(hash.contains('age')).toBe(true);
    expect(hash.contains('name1')).toBe(false);
  });
  it('handle a collision in the hash table', () => {
    const hash = new HashTable(10);
    hash.set('name', 'bob');
    hash.set('age', '20');
    hash.set('name', 'bob2');
    console.log(hash);
    expect(hash.get('name')).toBe('bob');
  });
  it(' hash a key to an in-range value', () => {
    const hash = new HashTable(10);
    hash.set('walid', 'bob');
    hash.set('age', '20');
    hash.set('walid', 'bob2');
    expect(hash.hash('walid')).toBe(1);
  });
});
