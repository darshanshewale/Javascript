"use strict";

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let arr = ["a", "b", "c", "d"];

console.log(arr.slice(2));
console.log(arr.slice(0, 2));

console.log(arr.splice(2));
console.log(arr);

//Reverse
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

//concatination
const letters = arr.concat(arr2);
console.log(letters);

//at method

console.log(arr[0]);
console.log(arr.at(arr.length - 1));

// for each

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdraw ${Math.abs(movement)}`);
  }
}

console.log("------");
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}:You deposited ${mov}`);
  } else {
    console.log(` Movement ${i + 1} :You withdraw ${Math.abs(mov)}`);
  }
});

//challenge
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliacorrect = dogsJulia.slice(1, 4);

  const dogs = [...dogsJuliacorrect, ...dogsKate];
  console.log(dogs);

  dogs.forEach(function (d, i) {
    if (d >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${d} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

//map filter and reduce

const value = [1, 2, 3, 4, 5, 6];

const newarray = value.map(function (val) {
  return val * 5;
});

console.log(newarray);

//filter

const filterarray = value.filter(function (val) {
  return val > 3;
});

console.log(filterarray);

//reduce

const reducearray = value.reduce(function (acc, val) {
  return acc + val;
});
console.log(reducearray);

//challenge

const data = [5, 3, 4, 1, 15, 8, 3];

const avg = data.reduce((acc, num) => (acc + num) / data.length);

console.log(avg);

//find
// return first occurence a=only returns element
const f = data.find((num) => num > 10);
console.log(f);

//some and every

const so = data.some((num) => num > 1);
console.log(so);

const evry = data.every((num) => num > 0);
console.log(evry);

//flat and flatmao

const fl = [[1, 2, 3, 4], [5, 6], 7, 8];
console.log(fl.flat());

const arrDeep = [[1, 2], 3, [4, [5, 6], 7, 8]];
console.log(arrDeep.flat(2));

//sorting

const s = [1, 22, 3, 477, 55];

const t = s.sort((a, b) => a - b);
console.log(t);

//fill

const v = new Array(7);

v.fill(1, 2, 6);
console.log(v);
