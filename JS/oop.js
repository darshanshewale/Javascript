"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

console.log(jonas instanceof Person);

//prototype

console.log(Person.prototype);

Person.prototype.calAge = function () {
  console.log(2043 - this.birthYear);
};

jonas.calAge(34);

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species);

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

console.log(jonas.hasOwnProperty("firstName"));

const arr = [3, 4, 5, 5, 6, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

//coding challenge

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const Car1 = new Car("BMW", 120);
const Car2 = new Car("Mercedes", 95);

Car.prototype.accelerate = function () {
  this.speed += 10;

  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;

  console.log(this.speed);
};

Car1.accelerate();
Car2.brake();

//ES6 classes

// class personcl = class{
// }

class Personcl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calAge() {
    console.log(2024 - this.birthYear);
  }
}

const jadeja = new Personcl("jadeja", 1996);
jadeja.calAge();

console.log(Personcl.age);

// Setters and Getters

const account = {
  owner: "ram",
  movements: [12, 4, 56, 7, 75],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 88;

console.log(account.movements);

//Object create

const personproto = {
  calcAge() {
    console.log(2034 - this.birthYear);
  },
};

const sham = Object.create(personproto);
console.log(sham);
sham.name = "sham";
sham.birthYear = 44;
sham.calcAge();

//

class cars {
  constructor(maker, speed) {
    this.maker = maker;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
    return;
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedus() {
    return this.speed / 1.6;
  }

  set speedus(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new cars("Ford", 120);
console.log(ford.speedus);

ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedus = 50;
console.log(ford);

//inheritance

const p = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

p.prototype.cal = function () {
  console.log(2034 - this.birthYear);
};

const student = function (firstName, birthYear, course) {
  p.call(this, firstName, birthYear);
  this.course = course;
};

student.prototype = Object.create(p.prototype);

student.prototype.introduce = function () {
  console.log(`my name is ${this.firstName} and I Study ${this.course}`);
};
const rahul = new student("rahul", 1999, "computer science");
console.log(rahul);

rahul.introduce();

rahul.cal();

console.log(rahul.__proto__);
console.log(rahul.__proto__, __proto__);

console.log(rahul instanceof student);
console.log(rahul instanceof p);

//coding challenge

const vehicle = function (maker, speed) {
  this.maker = maker;
  this.speed = speed;
};

vehicle.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.maker} is going at ${this.speed} km/h`);
};

vehicle.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.maker} is going at ${this.speed} km/h`);
};

const electric_Car = function (maker, speed, battary) {
  vehicle.call(this, maker, speed);
  this.battary = battary;
};

electric_Car.prototype = Object.create(vehicle.prototype);

electric_Car.prototype.charge = function (chargeto) {
  this.battary = chargeto;
};

electric_Car.prototype.accelerate = function () {
  this.speed += 20;
  this.battary--;
  console.log(
    `${this.maker} going at ${this.speed}km/h, with a charge of ${this.battary}`
  );
};

const tesla = new electric_Car("Tesla", 120, 23);
tesla.charge(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

//ES6 inheritance

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log("Hey there 👋");
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl("ramesh jadhav", 2012, "Computer Science");
martha.introduce();
martha.calcAge();

//
