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

for (const [fruit, count] of entries) {
  console.log(`There are ${count} ${fruit}s`);
}

const programmingLanguages = {
  javascript: "JS",
  python: "PY",
  react: "REACT",
};

console.log(Object.keys(programmingLanguages));
console.log(Object.keys(programmingLanguages.javascript));
console.log(programmingLanguages["javascript"]);
for (const key in programmingLanguages) {
  console.log("${key} => ${programmingLanguages[key]}");
}

const sambasDeEnredoNoventanove = {
  gres: "Mocidade Independente de Padre Miguel",
  author: "J. K. Rowling",
  country: "Brazil",
  language: "portugues",
  youTube: "https://www.youtube.com/watch?v=jR5GgkDOngo",
  beteria: 800,
  year: 1999,
};
