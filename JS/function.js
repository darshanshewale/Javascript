"use strict";

// default parameter

const creatbooking = function (flightnum, numpass = 2, price = 34) {
  console.log(flightnum, numpass, price);
};

creatbooking("MP13");

//passing argument  value / reference

const flight = "MD23";
const Rahul = {
  name: "Rahul KL",
  passport: 1234,
};

const checkin = function (flightnum, passenger) {
  flightnum = "MP123";
  passenger.name = "Mr" + passenger.name;

  if (passenger.passport === 1234) {
    console.log("checkin");
  } else {
    console.log("wrong passport");
  }
};

checkin(flight, Rahul);
console.log(flight); //did not changed as primitive type as copied
console.log(Rahul); // refrence in head as non primitive value

//function accepting callback function
//used in built in javascript function make more resuable and help for abstraction

const Mumbai = function (num) {
  return num * 50;
};

const Delhi = function (run) {
  return run * 29;
};

const team = function (str, fun) {
  console.log(str);
  console.log(fun(23));
};

team("Mumbai", Mumbai);

//function return function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}: ${name}`);
  };
};

const greethey = greet("hello");
greethey("rahul");

// call and apply method

const emirated = {
  airline: "Emirates",
  code: "EM",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
    );
    this.bookings.push({ flight: `${this.code} ${flightNum}` }, name);
  },
};

emirated.book(3, "Vijay");

const indigo = {
  airline: "indigo",
  code: "IN",
  bookings: [],
};
const b1 = emirated.book;

b1.call(indigo, 12, "Rahul");

const flightdata = [1, "rakesh"];

b1.apply(indigo, flightdata);

b1.call(indigo, ...flightdata);

//bind method

const bookew = b1.bind(indigo);
bookew(2, "manas");

// Invoked function expression

(function () {
  console.log("this will run once");
})();

//closures

const securebooking = function () {
  let passengercount = 0;

  return function () {
    passengercount++;
    console.log(`${passengercount}passenger`);
  };
};

const booker = securebooking();
booker();
