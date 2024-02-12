// destructuring array

arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a);
console.log(arr);

const restaurant = {
  name: "abc",
  location: "dbc",
  categories: ["breakfast", "dinner", "lunch"],
  order: function (startindex) {
    return [this.categories[startindex]];
  },
};

const [first, , second] = restaurant.categories;
console.log(first, second);

console.log(restaurant.order(1));

let ab = [2, 3, [5, 6]];
const [i, j, k] = ab;

console.log(i, j, k);

// destructuring object

const { name, categories } = restaurant;
console.log(name, categories);

const { name: nam, categories: cat } = restaurant;
console.log(nam, cat);

// defult value
const { menu = [], categories: eveningbrekfast = [] } = restaurant;
console.log(menu, categories);

// mutating
let d = 111;
let p = 999;

const obj = { d: 23, p: 7, C: 14 };
({ d, p } = obj);
console.log(d, p);

//spread operator

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const arraynew = [...a1, ...a2];
console.log(arraynew);

a3 = [1, 3, 4, ...a1];
console.log(a3);

//copy array
const list = [...a1];
console.log(list);

const str = "ram";

const n = [...str];
console.log(n);

//rest pattern and parameters

const [g, f, ...e] = [1, 2, 3, 4, 5, 6];
console.log(g, f, e);

const add = function (...num) {
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }

  console.log(sum);
};
add(2, 3);
add(5, 3, 4, 5);

//short circuiting

console.log(3 || "Jones");
console.log(" " || "Jones");
console.log(true || 0);
console.log(undefined || null);

const guest = restaurant.numguest || 10;
console.log(guest);

console.log(0 && "Jones");

console.log("Hello" && 23 && null && "jones");

//nullish coalecing Operator ?? es22

const guestcorrect = restaurant.numguest ?? 10;
console.log(guestcorrect);

//logical assigmenent operator

const shop1 = {
  name: "Phonexi",
  numguest: 20,
};

const shop2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// shop1.numberguest = shop1.numguest || 10;
// shop2.numberguest = shop2.numguest || 10;

shop1.numguest ||= 10;
shop2.numguest ||= 20;

console.log(shop1);
console.log(shop2);

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [player1, player2] = game.players;
console.log(player1, player2);

const [gk, ...fieldplayers] = player1;
console.log(gk, fieldplayers);

const allplayers = [...player1, ...player2];
console.log(allplayers);

const players1final = [...player1, "Thiago", "Coutinho", "Peristic"];
console.log(players1final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1);
console.log(draw);

const printgoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printgoals("Davies", "Muller", "Lewandowski", "Kimmich");
printgoals("Davies", "Muller");

team1 < team2 && console.log("Team1 is more likely to win");

//the for of the loop1

for (let item of arr) {
  console.log(item, item);
}

//Enhanced Object Literals ES6
const nestedobj = {
  company: "google",
  grade: "A",
};

const obj1 = {
  name: "Rahul",
  location: "Pune",
  age: "34",
  nestedobj,
};

console.log(obj1);

//optional chaining (?.)

if (obj1.nestedobj) {
  console.log(obj1.nestedobj.grade);
}

console.log(obj1.nestedobj?.age);
console.log(obj1.nestedobj?.grade);

console.log(restaurant.order?.(0, 2) ?? "method exitst");

const users = [{ name: "Rahul", email: "xyz@gmail.com" }];

console.log(users[0]?.name ?? "user array is empty");

//looping objects

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

//challenge
for (const [i, playes] of game.scored.entries()) {
  console.log(i, playes);
}

for (const [team, odd] of Object.entries(game.odds)) {
  console.log(team, odd);
}
