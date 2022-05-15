'use strict';
const { it } = require('eslint/lib/rule-tester/rule-tester');
const HashTable = require('../hashTable');
const repeatedWord = require('../repeateWord');

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
  it('most repeateWord', () => {
    const str = 'Once upon a time, there was a brave princess who...';
    const str2 = 'it was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way  in short, the period was so far like the present period, that some of it is noisiest authorities insisted on it is being received, for good or for evil, in the superlative degree of comparison only...';
    const str3 ='It was a queer, sultry summer, The summer they electrocuted the Rosenbergs, and I did not know what I was doing in New York...';
    expect(repeatedWord(str)).toEqual('a');
    expect(repeatedWord(str2)).toEqual("it");
    expect(repeatedWord(str3)).toEqual("summer");
  });
});
