// console.log("Data-type");

// data type
// Primitive data types

// 1. string
let myText = "Hello World";
// console.log("myText:", myText);
// 2. number
// 3. boolean
let myBoolean = true;
// console.log("myBoolean:", myBoolean);
// 4. undefined
let myUndefined = undefined;
// console.log("myUndefined:", myUndefined);
// 5. null
let myNull = null;
// console.log("myNull:", myNull);
// Beispeil für NULL:
let day = null;
day = "Monday";
// console.log("day:", day);
// 6. symbol
let mySymbol = Symbol("mySymbol");
// console.log("mySymbol:", mySymbol);
//7. bigint
let myBigInt = 1234567890123456789012345678901234567890n;
// console.log("myBigInt:", myBigInt);

// console log: was ist das für ein Datentyp?
// console.log(typeof myText);
/* SHIFT + CTRL + a = multiline comment. */

// reference type object
// 1. array
let myArray = ["Kai", "Giaco", "Luisa"];
console.log("myArray:", myArray[0], myArray[1]);
console.log(typeof myArray);
// console.log("myArray:", myArray);

// 2. object
const person = {
  firstName: "Kai",
  lastName: "zu Brei",
  age: 204,
  city: "Rio de Janeiro",
};
console.log(person.age, person.city);
console.log(person["firstName"], person["city"]);
// console.log("person:", person);

// Dot notation:
// console.log("Person:", person.firstName, person.city);

// Bracket notation
console.log("wo geht's hin?:", "für", person.firstName, "nach", person["city"]);

// Complex data types

let myApology =
  "Sorry, I have neither restraint nor filter, and often find myself alone in my sense of humor.";
console.log("myApology:", myApology);
