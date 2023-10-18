class Question {
  constructor(
    questionText,
    options,
    correctAnswerIndex,
    allAnswersCorrect = false
  ) {
    this.questionText = questionText;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
    this.allAnswersCorrect = allAnswersCorrect;
  }

  // Display the question and its options
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
let userChoice = 0; // Example user's choice
if (question1.checkAnswer(userChoice)) {
  console.log("Nein, Du Tourist.!");
} else {
  console.log(
    "Yes! Du bist professionell berufsjugendliches Tresen-Urgestein. 600 Jahre Feierkultur in Deinem zur Faust geballten Hartfasergesicht. Respekt, Du schiebst Deinen Infusionsständer noch selbst?"
  );
}

// // Q2
// const question2 = new Question(
//   "In welchem Stadtteil von Rio liegt das Sambódromo?",
//   ["Catete", "Aproador", "Cidade Nova", "Copa Cabana"],
//   2
// );

// question2.displayQuestion();
// let userChoice2 = 2;
// if (question2.checkAnswer(userChoice2)) {
//   console.log("Nö. Pfaldsh. Ähnlich wie Dein Code.");
// } else {
//   console.log(
//     "Genau! In der Neustadt. Explode coracao, na major felicidaaaade…"
//   );
// }

// // Q3 --------------------------------------------------
// // const question3 = new Question(
// //   "Gibt es ein Leben vor dem Tode?",
// //   ["ja", "nein", "weeß ick", "Kartoffeln sind heute im Angebot bei Kaisers"],
// //   true
// // );

// // question3.displayQuestion();
// // console.log("Rischtisch, Keule. Machste weida, wa.!");
// // }

// // // Q4 --------------------------------------------------
// const question4 = new Question(
//   "Was sagt die Schnecke, wenn sie auf der Schildkröte reitet?",
//   ["Huuuuiiiiiii!"],
//   true
// );

// question4.displayQuestion();
// let userChoice4 = 2;
// if (question4.checkAnswer(userChoice4)) {
//   console.log(
//     "Richtig. Wir lieben Deinen subtilen englischen Humor. Also sobald Du Frankie Boyle frei zitieren kannst. Bisher ein bisschen niedlich, Dein Vorschul – Humorverständnis."
//   );
// }

// // // Q5 --------------------------------------------------
// const question5 = new Question(
//   "Wie möchtest Du einen romantischen Abend ausklingen lassen?",
//   [
//     "mit 4.26 Promille in der Notaufnahme",
//     "mit mir allein, da habe ich die besten Gespräche",
//     "nackt im Wald mit den anderen 47 Gästen (und dem Schaf) der Fetisch-Party",
//     "bei einem guten Glas zimmertemperierten Mineralwassers aus Freilandhaltung mit Bio-Zitronenscheibchen",
//   ],
//   //   null, // No single correct answer
//   true // All answers are correct
// );

// console.log("Sehr schön, gute Entscheidung von distinguiertem Geschmack!");

// // Q6 --------------------------------------------------
// const question6 = new Question(
//   "What is the capital of France?",
//   ["London", "Berlin", "Paris", "Madrid"],
//   2
// );question1
// question1
//   2
// );

// question6.displayQuestion();
// let userChoice6 = 2;
// if (question6.checkAnswer(userChoice6)) {
//   console.log("Correct!");
// } else {
//   console.log(
//     "Genau! In der Neustadt. Explode coracao, na major felicidaaaade…"
//   );
// }

// // Q7 --------------------------------------------------
// const question7 = new Question(
//   "What is the capital of France?",
//   ["London", "Berlin", "Paris", "Madrid"],
//   2
// );

// question7.displayQuestion();
// let userChoice7 = 2;
// if (question7.checkAnswer(userChoice7)) {
//   console.log("Correct!");
// } else {
//   console.log(
//     "Genau! In der Neustadt. Explode coracao, na major felicidaaaade…"
//   );
// }
