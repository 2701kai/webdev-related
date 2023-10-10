//PRIMITIVES

// strings
// console.log("Kai");
// "John" 'John' `John`

const president = "KaiSmith";
let text = "ciao ciao";
console.log("typeof president:", typeof president);
console.log("typeof robert:", typeof "robert");
console.log("president.length:", president.length);
// [0] => index des strings
console.log("president[0]:", president[0]);
console.log("president[2]:", president[2]);

// numbers
// 100 3.14 -100 3*2 3/2
// "30" => das ist keine nummer

// boolean => true or false

// TERNARY OPERATOR //

const age = 20;
// ist age größer als 21? wenn ja, dann console.log("you are an adult"), wenn nein, dann console.log("you are a child")
age > 21 ? console.log("you are an adult") : console.log("you are a child");
console.log(age > 21);

// NULL
console.log(null);

// UNDEFINED
console.log(undefined);

// null vs undefined ??

// COMPLEX DATA TYPES ODER OBJECTS DATA TYPES
// Arrays

let colors = ["red", "green", "blue"];
console.log("colors[1]:", colors[1]); // green
console.log("colors[3]:", colors[3]); // undefined
console.log("colors:", colors);
let list = [1, 2, 3, 4, 5, "Kai", true, false];
console.log("list:", list);

const person1 = "giaco";
console.log("person1:", person1);
const person2 = "kai";
console.log("person2:", person2);

const persons = [person1, person2]; //array
console.log("person2:", person2);
console.log("typeof persons:", typeof persons); // object ? array?

// OBJECTS

const user = {
  firstName: "Kai",
  age: 20,
  isAdult: true,
  hobbies: ["coding", "music", "sports"],
  address: {
    street: "Musterstraße",
    number: 123,
    city: "Berlin",
    zip: 12345,
    country: "Germany",
  },
};

console.log("user:", user);
console.log("typeof user:", typeof user);

// Date
console.log("new date():", new Date());

// Functions

function sumAge() {
  // function body
  const kaiAge = 20;
  const giacoAge = 31;
  const sum = kaiAge + giacoAge;
  return sum;
}

console.log("sumAge():", sumAge());
