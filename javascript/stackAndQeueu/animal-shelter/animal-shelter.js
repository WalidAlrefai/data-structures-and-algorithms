const Queue = require('../Queue');


class AnimalShelter {
  constructor() {
    this.name = "";
    this.queue = new Queue();
  }
  enqueue(animal) {
    this.queue.enqueue(animal);
  }
  dequeue(pref) {
    if (this.queue.peek().name === pref) {
      let animalName = this.queue.peek();
      this.queue.dequeue();
      return animalName;
    } else {
      return null;
    }
  }
}
class Cat extends AnimalShelter {
  constructor(name) {
    super();
    this.name = name;
  }
}
class Dog extends AnimalShelter {
  constructor(name){
    super();
    this.name=name;
  }
}

module.exports = {AnimalShelter,Cat,Dog};
