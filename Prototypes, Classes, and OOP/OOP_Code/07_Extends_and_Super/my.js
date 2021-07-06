class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating!!!`
  }

}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    super(name, age)
    this.livesLeft = livesLeft;
  }
  
  meow() {
    return `MEOWWWWWW`
  }
}

const monty = new Cat('Monty', 3);
console.log(monty);
console.log(monty.eat());
console.log(monty.meow());

class Dog extends Pet {

  bark() {
    return `BARKKKK how you doin`;
  }

  eat() {
    return `${this.name} is not eating, so tell him to eat!!`;
  }
}

const beamz = new Dog('Beamz', 3);
console.log(beamz);
console.log(beamz.eat());
console.log(beamz.bark());