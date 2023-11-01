const readlineSync = require("readline-sync");

// const rl = readlineSync.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// class Question {
//   constructor(question, answer) {
//     this.question = question;
//     this.answer = answer;
//   }
// }

// ==================================================
// created class Question to represent quiz questions
// ==================================================
class Question {
  constructor(
    questionText = "",
    options = [],
    correctAnswerIndex,
    allAnswersCorrect = false
  ) {
    this.questionText = questionText;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
    this.allAnswersCorrect = allAnswersCorrect;
  }

  // Display the question and its options
  // displayQuestion() {
  //   console.log(this.questionText);.
  //     console.log(index + ": " + option);
  //   };
  // }
  displayQuestion() {
    console.log(this.questionText);
    this.options.forEach((option, index) => {
      console.log(index + ": " + option);
    });
  }

  // Check if the user's choice is correct
  checkAnswer(userChoice) {
    if (this.allAnswersCorrect) {
      return true;
    }
    return userChoice === this.correctAnswerIndex;
  }
}

// Q1 --------------------------------------------------
const question1 = new Question(
  "Wie hießen die Dissen, in denen Berufsjugendliche so ca. 2005 gerne in der Nacht von Freitag auf Montag tanzten?",
  [
    "Vereinsheim zur Steigerung der Lebensfreude durch Tanz und Musik und andere Lustbarkeiten von 1896 e.V. - E-Werk – Planet – Praxis Dr.McCoy – Walfisch – WMF – Exit – Vereinsheim – Turbine – Lipstick ",
    "WMS – Berghain – Tresor – AMS – Schellfisch – Lipstick – Franken – Golgatha - &tl,dr;",
    "90° - Kellerdisco Präsidentenstraße – HardWax – AMG – wastedYouth – Yaam – Sapucaiu",
  ],
  1
);

question1.displayQuestion();
let userChoice1 = 0;
if (question1.checkAnswer(userChoice1)) {
  console.log("Nein, Du Tourist.!");
} else {
  console.log(
    "Yes! Du bist professionell berufsjugendliches Tresen-Urgestein. 600 Jahre Feierkultur in Deinem zur Faust geballten Hartfasergesicht. Respekt, Du schiebst Deinen Infusionsständer noch selbst?"
  );
}

console.log(readlineSync.question("What is your name? "));

let name = readlineSync.question("What is your name? ");
console.log(name);
