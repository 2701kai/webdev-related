// Array.isArray()
console.log(Array.isArray([1, 2, 3])); // true

const colors = ["Red", "Green", "Blue"];
// colors is an object
// console.log(Array.isArray(colors)); // true
let result1 = Array.isArray("Red, Green, Blue");

console.log(result1); // true

const person = {
  name: "Max",
  age: 30,
  "likes Sports": true,
};
// person is an object with properties name and age
// Syntax:  const name = {key1: value, key2: value, key3: value};

person.city = "Berlin";
// oder
person["city"] = "Berlin";
person.isMale = true;
// delete person.age;

console.log(person); // { name: 'Max', age: 30 }
console.log(person.name); // Max
console.log(person["city"]); // 30

/* ------------------- */
// for in loop => object
let car = {
  brand: "BMW",
  model: "X5",
  year: 2020,
};
// syntax for (let key in object-name)

for (let key in car) {
  console.log(key); // brand, model, year - nur keys
  console.log(car[key]); // BMW, X5, 2020 - nur values
}

for (const keys in car) {
  console.log(`${keys} --> ${car[keys]}`);
}

let laptops = ["Lenovo", "Dell", "Hp"];
for (let laptop of laptops) {
  console.log(laptop);
  console.log(laptop[laptops]);
}

// ----------------------------

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i < myArray.length; i++) {
//   console.log(i);
// }

// ich mach grad

for (let spam in thread) {
  (anna = "zutexten"), (kai = "halt's Maul");
  console.log(kai);
}
