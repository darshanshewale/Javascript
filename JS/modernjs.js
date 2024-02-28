import { addToCart, total as t, tq } from "./export.js";

console.log("importing module");

addToCart("jeans", 100);

console.log(t, tq);
import back from "./export.js";
console.log(back);

//top level await
//es2022
//block the asyn code

const res = await fetch("https://jsonplaceholder.typicode.com/posts");

const data = await res.json();
console.log(data);

//modular pattern

const fun = (function () {
  const a = 10;
  const b = 23;

  const add = function (num1, num2) {
    console.log("addition");
  };

  return {
    a,
    b,
    add,
  };
})();

fun.add(1, 3);

//npm
//npm init set up the package creates package manager

//npm i lodash-es

import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

const state = {
  cart: [
    { product: "bread", quality: 3 },
    { product: "pizza", quality: 5 },
  ],
};

const statedeepclone = cloneDeep(state);
console.log(statedeepclone);

// npm -v gives the version
// delete node module then we can restore by
// npm i which find the dependiencies then will install again

//npm i parcel --save-dev install the parcel for the project
//npx parcel modernjs.html bundle javascript

// maintain state by parcel

// if (module.hot) {
//   {
//     module.hot.accept();
//   }
// }

//build command 
//parcel build modern.html

// install globally
//npm i parcel -g

// babel transpiling and polyfiling
//npm i core-js

//polifyling async function
//npm i regenerator-runtime

import "core-js/stable";

import "regenerator-runtime/runtime";
