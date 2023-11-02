const readline = require("readline-sync");
// const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// const userInput1 = 0;
// const userInput2 = 0;
// const typeOfCalculation = ["add", "sub", "mul", "div", "mod"];
// function add(a, b) {
//   return a + b;
// }
// function sub(a, b) {
//   return;
//   a - b;
// }
// function mul(a, b) {
//   return a * b;
// }
// function div(a, b) {
//   if (b === 0) {
//     return "Division durch 0 ist unmöglich";
//   }
//   return a / b;
// }
// function mod(a, b) {
//   return a % b;
// }
const userInput1 = parseFloat(
  readlineSync.question("Bitte geben Sie eine Zahl ein: ")
);
const userInput2 = parseFloat(
  readlineSync.question("Bitte geben Sie eine weitere Zahl ein: ")
);

const typeOfCalculation = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => (b === 0 ? "Division durch 0 ist unmöglich" : a / b),
  mod: (a, b) => a % b,
};

// rl.question("Bitte geben Sie eine Zahl ein: ", (userInput1) => {
//   rl.question("Bitte geben Sie eine weitere Zahl ein: ", (userInput2) => {
//     rl.question("Bitte geben Sie eine Rechenart ein: ", (typeOfCalculation) => {
//       console.log(
//         `Das Ergebnis ist: {typeOfCalculation(userInput1, userInput2)}`
//       );
//     });
//   });
// });

if (typeOfCalculation[typeCalculation]) {
  const result = typeOfCalculation[typeCalculation](userInput1, userInput2);
  console.log(`Das Ergebnis ist: ${result}`);
} else {
  console.log("Unbekannte Rechenart");
}
