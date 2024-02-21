"use strict";

//Asynchornous
//prioority of microtask queue is high over call back queue

console.log("Test Start");
setTimeout(() => console.log("0 sec timer"), 0);
Promise.resolve("resolved promise 1").then((res) => console.log(res));
console.log("Test end");

const testpromise = new Promise(function (resolved, reject) {
  if (Math.random() > 0.5) {
    resolved("Greater than 1");
  } else {
    reject("less than 1");
  }
});

testpromise.then((res) => console.log(res)).catch((res) => console.log(res));

//promisfying settimeout
const wait = function (second) {
  return new Promise(function (resolve) {
    setTimeout(resolve, second * 1000);
  });
};

wait(2)
  .then(() => {
    console.log("I waited for 2 seconds ");
    return wait(1);
  })
  .then(() => console.log("I waited for 1 second"));

//async await
const hello = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  console.log(res);

  return "return fron async is nothing but promise which has be handle by then method";
};

//return value fron async
const retu = hello("Bharat");
retu.then((out) => console.log(out));
console.log("first");

//try catch

try {
  let y = 1;
  const x = 2;
  x = 4;
} catch (error) {
  console.log(error);
}

//parallal promises & combinator

//promise all
//// return all promises and  shorcircuit when rejects

const fun = async function (c1, c2) {
  const data = await Promise.all([
    fetch(`https://restcountries.com/v3.1/name/${c1}`),
    fetch(`https://restcountries.com/v3.1/name/${c2}`),
  ]);
  console.log(data);
};

fun("Bharat", "pakistan");

//promise.race
//promise race send the first seattle promise result

(async function () {
  const data = await Promise.race([
    fetch("https://restcountries.com/v3.1/name/USA"),
    fetch("https://restcountries.com/v3.1/name/india"),
  ]);
  console.log(data);
})();

// promise allseattled
// return allseattled promises and never shorcircuit even rejects

(async function () {
  const data = await Promise.allSettled([
    fetch("https://restcountries.com/v3.1/name/USA"),
    fetch("https://restcountries.com/v3.1/name/india"),
  ]);
  console.log(data);
})();

//promise any
//reject the rejected promise seattled one
(async function () {
  const data = await Promise.any([
    fetch("https://restcountries.com/v3.1/name/USA"),
    fetch("https://restcountries.com/v3.1/name/india"),
  ]);
  console.log(data);
})();

//closure
//closure having prority over scope chain
//closure is internal proprity of function

const securebooking = function () {
  let passengercount = 0;

  return function () {
    passengercount++;
    console.log(passengercount);
  };
};

const booker = securebooking();
booker();
console.dir(booker);

//closure examples

let f;

const d = function () {
  let a = 12;
  f = function () {
    console.log(a * 2);
  };
};

const p = function () {
  let b = 44;
  f = function () {
    console.log(b * 2);
  };
};

d();

// f able to access a variable
f();

p();
//contains b value in closure as campare to a earlier 
f();
