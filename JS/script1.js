//sets

const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1);

console.log(new Set("Rahul"));

console.log(set1.size);

console.log(set1.has(1));

set1.add(7);

console.log(set1);

set1.delete(3);
console.log(set1);

for (const value of set1) {
  console.log(value);
}

const unique = [1, 2, 3, 44, 5, 5, 3, 4, 2, 3, 1];

const set2 = new Set(unique);

const set3 = [...new Set(unique)];

console.log(set2);
console.log(set3);

const test = new Set("hello").size;
console.log(test);

// Maps

const rest = new Map();
rest.set("name", "taj Hotel");

rest.set(1, "italy");
rest.set(2, "pakistan");

console.log(rest);

rest
  .set("categories", ["Italian", "Pizzeria", "vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open:D")
  .set(false, "we are closed");

console.log(rest);

console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("open"));
rest.delete(2);
console.log(rest);
console.log(rest.size);

const question = new Map([
  ["questions", "what is best programming langauage in world "],
  [1, "c"],
  [2, "java"],
  [3, "javascript"],
  ["correct", 3],
  [true, "correct"],
  [false, "try again"],
]);

console.log(question);
const obj1 = {
  name: "rahul",
  location: "Pune",
};

//convert object to map

const change = new Map(Object.entries(obj1));
console.log(change);

for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}:${value}`);
  }
}

// const answer = Number(prompt(`Your answer`));
// console.log(answer);

// console.log(question.get("correct") === answer);

// covert to array

console.log([...question]);

//challenge

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];

console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `An event happened on average , every ${90 / gameEvents.size}minutes`
);

for (const [key, value] of gameEvents) {
  if (key < 45) {
    console.log(`first half ${key}:${value}`);
  } else {
    console.log(`Second half ${key}:${value}`);
  }
}

//strings

const airline = "Air india";

console.log(airline[0]);
console.log(airline[1]);
-console.log(airline[2]);

console.log(airline.length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("i"));

console.log(airline.slice(0, 3));

console.log(airline.slice(-3));

const check = function (seat) {
  const s = seat.slice(-1);
  if (s === "B") {
    console.log("middle seat");
  } else if (s === "E") {
    console.log("middle seat");
  } else {
    console.log("bad luck");
  }
};

check("11B");
check("23C");

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const email = "rahul@gmail.com";
const Email = " Rahul@gmail.com  ";

const loginemail = Email.toLowerCase();
const trimmail = loginemail.trim();
console.log(trimmail);

const normalmail = Email.toLowerCase().trim();

if (email === normalmail) {
  console.log("correct");
}

const priceGB = "288.97#";
const priceus = priceGB.replace("#", "$");
console.log(priceus);

console.log(airline.includes("Air"));

console.log(airline.startsWith("Air"));

console.log("I+love+india".split("+"));

const [firstname, lastname] = "Rahul Raj".split(" ");
console.log(firstname, lastname);

//padding
const message = "Made in India";
console.log(message.padStart(25, "+").padEnd(30, "+"));
console.log(message.padStart(25, "+"));

//repeat

console.log(message.repeat(3));

// challenege

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const button = document
  .querySelector("button")
  .addEventListener("click", function () {
    const text = document.querySelector("textarea").value;
    const rows = text.split("\n");
    for (const value of rows) {
      const [first, last] = value.toLowerCase().trim().split("_");
      const output = first + last[0].toUpperCase() + last.slice(1);

      console.log(`${output.padEnd(20)}✅`);
    }
  });
