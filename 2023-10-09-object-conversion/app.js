const obj = {
  num1: 1,
  const: 2,
  return: 3,
};

console.log(obj.num1 + obj.const + obj.return);

// create user

function createUser(name, age) {
  return {
    // name: name,
    // age: age,
    // short hand notation:
    name,
    age,
  };
}

const user4 = createUser("Max", 30);
console.log(user4);
console.log(user4.address === undefined); //false
// console.log(age in user4);
//true

// LEARN STACK MEMORY + HEAP

const obj2 = {
  apple: 29,
  oranange: 50,
  waterMelon: 20,
};

const entries = Object.entries(obj2);

console.log(entries);
