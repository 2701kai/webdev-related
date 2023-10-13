// Array.isArray()
console.log(Array.isArray([4, 6, 7])); // true
console.log(Array.isArray("Hello")); // false
console.log(Array.isArray(undefined)); // false

console.log("***************");

const colors = ["Pink", "Gray", "Green", "White"];
let result1 = Array.isArray(colors);

console.log(result1); // true

let txt = "Hello World";
let result2 = Array.isArray(txt);
console.log(result2); // false

console.log("***************");

// Objects

// A car is an object with properties => color - price - model - made in, usw.
// const name = { key1: value, key2: value, key3: value }

// 1
const person = {
  firstName: "Laila",
  lastName: "Beqiri",
  age: 25,
};

console.log(person);

person.city = "Hamburg";

console.log(person);

person.isFemale = true;

console.log(person);

console.log(person.lastName);
console.log(person.age);

console.log("***************");

// 2️
const myStudent = {
  firstName: "anna",
  city: "Berlin",
  "like sport": true,
};

console.log(myStudent);
// Dot Notation
console.log(myStudent.city);

// Bracket Notation
console.log(myStudent["like sport"]);
console.log(myStudent["firstName"]);

console.log("***************");

// 3
const myObj = {
  name: "Alvaro",
  city: "Madrid",
  1: "hello",
};

console.log(myObj.name); // Alvaro
console.log(myObj["name"]); // Alvaro
console.log(myObj["1"]); // hello
// console.log(myObj.1); // Error

console.log("***************");

// 4
let car = {};
console.log(car); // {}

car.price = `20000€ 💶`;
car["model"] = "Mercedes🤗";
console.log(car);

car.country = "Germany";
car.suv = true;
console.log(car);

delete car.suv;
console.log(car); // { price: '20000€ 💶', model: 'Mercedes🤗', country: 'Germany' }

delete car["model"];
console.log(car); //{ price: '20000€ 💶', country: 'Germany' }

console.log("***************");

// 5️
const car1 = "BMW";
const myObj2 = {
  [car1]: 100,
};

console.log(myObj2); // { BMW: 100 }

// 6️
const numbers = {
  num1: 10,
  num2: 60,
  num3: 23,
};
console.log(numbers.num2 - numbers.num3 + numbers.num1); // 47

// 7️
function test(fName, lName, age) {
  return {
    fName,
    lName,
    age,
  };
}
// Call
let x = test("Jan", "Scherch", 29);
console.log(x);

let y = test("Bita", "Sadeghi", 31);
console.log(y);
console.log(y.fName); // Bita
console.log(x.fName); // Jan

// 8️
let game = {
  "name of the Game": "Resident Evil",
  console: {
    playstation: 60,
    pc: 20,
  },
};
console.log(game);
console.log(game.console); // { playstation: 60, pc: 20 }
console.log(game.console.playstation); // 60
console.log(game.console["pc"]); // 20
console.log(game["console"]["playstation"]); // 60
console.log(game["console"].playstation); // 60

// ----------------------------
// for in loop => object
let car2 = {
  model: "Golf",
  make: "VW",
  year: 2010,
  color: "Blue",
};
// syntax => for (let x in object-name){}
for (let x in car2) {
  console.log(car2[x]); // Golf VW 2010 Blue
}

const obj = { a: 10, b: 15, c: 20 };
for (let x in obj) {
  console.log(`${x} : ${obj[x]}`); // x is KEY and obj[x] is VALUE
}

let color = {
  firstColor: "orange",
  secondColor: "red",
  thirdColor: "white",
};

for (let colors in color) {
  console.log(color[colors]); // orange red white
}

const car5 = {
  make: "Toyota",
  model: "Yaris",
  year: "2019",
};
// make --> Toyota model --> Yaris year --> 2019
for (const keys in car5) {
  console.log(`${keys} --> ${car5[keys]}`); // make --> Toyota model --> Yaris
}

let laptops = ["Lenovo", "Dell", "Sony", "HP"];
for (let laptop of laptops) {
  console.log(laptop); // Lenovo Dell Sony HP
}

let myVal = ["A", "B", "C", "D"];
for (let x of myVal) {
  console.log(x);
}

const numberss = [10, 20, 30];
for (let number of numberss) {
  number += 5; // 10 = 10 + 1️
  console.log(number);
}

const myTxt = "Hello";
for (let val of myTxt) {
  console.log(val);
}

// Nested Array
const nestedArray = [
  1,
  3,
  [40, 22, 53],
  [14, 25, 56],
  [47, 8, 199],
  [30, 240],
  67,
];
console.log(nestedArray[0]); // 1
console.log(nestedArray[2][2]); // 53
console.log(nestedArray[4][2]); // 199
console.log(nestedArray[5][1]); // 240
console.log(nestedArray[3]); //  [14, 25, 56]

// Nested Object
const nestedObject = {
  fullName: "Iman Ghanei",
  address: {
    city: "Köln",
    postal: 12345,
  },
};

// Dot Notation
console.log(nestedObject.address.postal); // 12345
console.log(nestedObject["address"].city); // Köln

// ----------
const myObject = {
  city: {
    street: {
      name: "xyxyxyxy",
    },
  },
};
console.log(myObject.city.street.name); // xyxyxyxy

const xx = {
  first: "Hi",
  numbers: [1, 2, 3],
  names: ["a", "b", "c"],
};

console.log(xx.numbers); // [ 1, 2, 3 ]
console.log(xx.names[1]);

const yy = {
  nested: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
};
console.log(yy.nested[1]); // [ 4, 5, 6 ]
console.log(yy.nested[2][0]); // 7

const myArray = [
  { name: "kai", city: "Berlin" },
  { name: "Katharina", city: "Leipzig" },
  { name: "Oliver", city: "Frankfurt" },
];
// length
console.log(myArray.length); // 3
console.log(myArray[1]); // { name: 'Katharina', city: 'Leipzig' }
console.log(myArray[2].name); // Oliver
console.log(myArray[0].city); // Berlin
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i].name);
  console.log(myArray[i].city);
}
