const readlineSync = require("readline-sync");

const typeOfCalculation = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => (b === 0 ? "Division durch 0 ist unmöglich" : a / b),
  mod: (a, b) => a % b,
  exp: (a, b) => a ** b,
};

const userInput1 = parseFloat(
  readlineSync.question("Bitte geben Sie eine Zahl ein: ")
);
const userInput2 = parseFloat(
  readlineSync.question("Bitte geben Sie eine weitere Zahl ein: ")
);
const calculation = readlineSync.question(
  "Bitte geben Sie eine Rechenart ein: "
);

if (typeOfCalculation[calculation]) {
  const result = typeOfCalculation[calculation](userInput1, userInput2);
  console.log(`Das Ergebnis ist: ${result}`);
} else {
  console.log("Unbekannte Rechenart");
}

// const input3 = readlineSync.question("Bitte geben Sie eine Rechenart ein: ");

// if (typeOfCalculation[input3]) {
//   const result = typeOfCalculation[input3](userInput1, userInput2);
//   console.log(`Das Ergebnis ist: ${result}`);
// } else {
//   console.log("Unbekannte Rechenart");
// }
