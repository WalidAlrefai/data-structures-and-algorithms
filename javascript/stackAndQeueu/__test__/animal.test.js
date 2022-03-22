'use strict'
const {AnimalShelter,Cat,Dog}= require('../animal-shelter/animal-shelter');
describe('testing creation AnimalShelter  ', () => {
  it('test creating an AnimalShelter instance', () => {
      const animal = new AnimalShelter();
      expect(animal).toBeDefined();
  })
})
describe('test AnimalShelter functions ',()=>{
  it('test adding cat object ',async()=>{
    const animal =new AnimalShelter();
    const cat =new Cat("cat");
    animal.enqueue(cat);
    expect(animal.queue.length).toBe(1);
    console.log(animal.queue.peek());
    expect((animal.queue.peek()).name).toEqual("cat");
  });
  it('test adding dog object ',async()=>{
    const animal =new AnimalShelter();
    const dog =new Dog("dog");
    animal.enqueue(dog);
    expect(animal.queue.length).toBe(1);
    expect(animal.queue.peek().name).toEqual("dog");
  });
  it('deleting object ',async()=>{
    const animal =new AnimalShelter();
    const dog =new Dog("dog");
    animal.enqueue(dog);
    expect(animal.queue.length).toBe(1);
    expect(animal.queue.peek().name).toEqual("dog");
    animal.dequeue('dog');
    expect(animal.queue.length).toBe(0);
  });
})
