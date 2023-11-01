const readlineSync = require("readline-sync");

class Question {
  constructor(questionText = "", options = [], correctAnswerIndex) {
    this.questionText = questionText;
    this.options = options.map((option, index) => `${index + 1}. ${option}`);
    this.correctAnswerIndex = correctAnswerIndex;
  }

  questionAndOptions() {
    return `${this.questionText}\n${this.options.join("\n")}`;
  }

  //   isCorrect(input) {
  //     if (input == this.correctAnswerIndex + 1) {
  //       // "2" == 2  => true
  //       return "Richtig";
  //     }
  //     return "Falsch";
  //   }
  // }
  pointsForAnswer(input) {
    if (input == this.correctAnswerIndex + 1) {
      // "2" == 2  => true
      return 1;
    }
  }
}

const question1 = new Question(
  "Wie heißt unserer italienischer Lehrer?",
  ["Giacomo", "Rami", "Ash", "Gaël"],
  0
);

const question2 = new Question(
  "Wie heißt die Hauptreihe der Sterne",
  [
    "A, B, C, D, E, F, G",
    "O, B, A, F, G, K, M",
    "X, Y, Z, K, M, F, D, M",
    " M, O, D, E, R, A, T",
  ],
  1
);

const question3 = new Question(
  "Wie lange dauert unser Kurs?",
  ["3 Monate", "6 Monate", "1 Jahr", "3 Jahre"],
  2
);

let allQuestions = [question1, question2, question3];

function askQuestion(questions) {
  for (const question of questions) {
    console.log(question.questionAndOptions());
    const userAnswer = readlineSync.question("Deine Antwort: ");
    console.log(question.isCorrect(userAnswer));
  }
  console.log("Das Quiz ist zu Ende!");
}

askQuestion(allQuestions);
