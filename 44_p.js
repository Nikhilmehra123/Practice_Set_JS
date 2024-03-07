// How to implement class inheritance in JavaScript?

//  A class can be extended by another class, and the new class will inherit all of its parent class methods.
// the object that initializes the child class will then be able to use methods from both classes. \

class Car {
  constructor(model, name) {
    this.model = model;
    this.name = name;
  }

  start() {
    console.log(this.name);
  }
  end() {
    console.log("Car stopped");
  }
}

class ElectricCar extends Car {
  dashboard() {
    console.log("child method");
  }
  start() {
    super.start();
    super.end();
    this.dashboard();
  }
}

evCar = new ElectricCar("Tesla", "A320");
evCar.start();
