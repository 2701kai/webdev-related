// ==================================================
// created class Question to represent quiz questions
// ==================================================
class Question {
  constructor(
    questionText,
    options,
    correctAnswerIndex,
    correctFeedback,
    wrongFeedback,
    allAnswersCorrect = false
  ) {
    this.questionText = questionText;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
    this.correctFeedback = correctFeedback;
    this.wrongFeedback = wrongFeedback;
    this.allAnswersCorrect = allAnswersCorrect;
  }

  displayQuestion() {
    const questionTextEl = document.getElementById("question-text");
    const optionsForm = document.getElementById("options-form");
    questionTextEl.textContent = this.questionText;
    optionsForm.innerHTML = "";
    this.options.forEach((option, index) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "quiz-option";
      input.value = index;
      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      optionsForm.appendChild(label);
      optionsForm.appendChild(document.createElement("br"));
    });
  }

  checkAnswer(userChoice) {
    if (this.allAnswersCorrect) {
      return true;
    }
    return userChoice === this.correctAnswerIndex;
  }
}

class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  answerIsCorrect(userChoice) {
    return this.getCurrentQuestion().checkAnswer(userChoice);
  }

  moveToNextQuestion() {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.questions.length) {
      this.getCurrentQuestion().displayQuestion();
    } else {
      document.getElementById("question-text").textContent = "Quiz completed!";
      document.getElementById("options-form").innerHTML = "";
      document.getElementById("next-btn").style.display = "none";
    }
  }
}
// Q1 --------------------------------------------------

const question = new Question(
  "Wie hießen die Dissen, in denen Berufsjugendliche so ca. 2005 gerne in der Nacht von Freitag auf Montag tanzten?",
  [
    "Vereinsheim zur Steigerung der Lebensfreude durch Tanz und Musik und andere Lustbarkeiten von 1896 e.V. - E-Werk – Planet – Praxis Dr.McCoy – Walfisch – WMF – Exit – Vereinsheim – Turbine – Lipstick ",
    "WMS – Berghain – Tresor – AMS – Schellfisch – Lipstick – Franken – Golgatha - &tl,dr;",
    "90° - Kellerdisco Präsidentenstraße – HardWax – AMG – wastedYouth – Yaam – Sapucaiu",
  ],
  1,
  "Yes! Du bist professionell berufsjugendliches Tresen-Urgestein. 600 Jahre Feierkultur in Deinem zur Faust geballten Hartfasergesicht. Respekt, Du schiebst Deinen Infusionsständer noch selbst?",
  "Nein, Du Tourist"
);

// const myQuiz = new Quiz([question1]);

// // // Q2
// // const question2 = new Question(
// const question1 = new Question(
//   "In welchem Stadtteil von Rio liegt das Sambódromo?",
//   ["Catete", "Aproador", "Cidade Nova", "Copa Cabana"],
//   2
// );

// question2.displayQuestion();
// // let userChoice2 = 2;
// userChoice2 = 2;
// if (question2.checkAnswer(userChoice2)) {
//   console.log("Nö. Pfaldsh. Ähnlich wie Dein Code.");
// } else {
//   console.log(
//     "Genau! In der Neustadt. Explode coracao, na major felicidaaaade…"
//   );
// }

// // // Q3 --------------------------------------------------
// question3 = new Question(
//   "Gibt es ein Leben vor dem Tode?",
//   ["ja", "nein", "weeß ick", "Kartoffeln sind heute im Angebot bei Kaisers"],
//   true
// );

// question3.displayQuestion();
// console.log("Rischtisch, Keule. Machste weida, wa.!");

// // // // Q4 --------------------------------------------------
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

// // Q5 --------------------------------------------------
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

// // // Q6 --------------------------------------------------
// const question6 = new Question(
//   "puuuh.. wie viele denn noch.. seufz.. wie ist die richtige Reihenfolge der Planeten im Sonnensystem?",
//   [
//     "Merkur, Janus, Erde, Snickers, Jupiter, Pluto, Neptun",
//     "Merkur, Venus, Erde, Mars, Jupiter, Uranus, Neptun",
//     "Venus, Erde, Mars, Jupiter, Uranus, Neptun, Merkur",
//   ],
//   1
// );
// question1;
// question1;
// 2;

// question6.displayQuestion();
// let userChoice6 = 2;
// if (question6.checkAnswer(userChoice6)) {
//   console.log("Bingo! There’s a stairway to the staaaars..");
// } else {
//   console.log(
//     " Puuh.. Du landest auch in Mölln, wenn Du inn HH Richtung Berlin abbiegst, was?"
//   );
// }
// // // Q7 --------------------------------------------------
// const question7 = new Question(
//   "Wie heißt die Hauptreihe der Sterne?",
//   [
//     "A, B, C, D, E, F, G",
//     "O, B, A, F, G, K, M",
//     "X, Y, Z, K, M, F, D, M",
//     "M, O, D, E, R, A, T",
//   ],
//   1
// );

// question7.displayQuestion();
// let userChoice7 = 2;
// if (question7.checkAnswer(userChoice7)) {
//   console.log("Yay, rischtisch. Trekkie oder watt? Q'ap la!");
// } else {
//   console.log(
//     "Sehr schön! Antwort leider falsch. Aber wir sind stolz auf Dich: Noch 19 Buchstaben und Du hast Grundschulabschluss!"
//   );
// }

// ==================================================
// DOM manipulation part
// ==================================================
window.onload = () => {
  myQuiz.getCurrentQuestion().displayQuestion();
};

function submitAnswer() {
  const options = document.getElementsByName("quiz-option");
  let userChoice;
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      userChoice = parseInt(options[i].value);
      break;
    }
  }

  if (userChoice !== undefined) {
    const currentQuestion = myQuiz.getCurrentQuestion();
    if (myQuiz.answerIsCorrect(userChoice)) {
      document.getElementById("feedback").textContent =
        currentQuestion.correctFeedback;
    } else {
      document.getElementById("feedback").textContent =
        currentQuestion.wrongFeedback;
    }
    document.getElementById("next-btn").style.display = "block";
  } else {
    document.getElementById("feedback").textContent =
      "Please select an option.";
  }
}

function nextQuestion() {
  document.getElementById("feedback").textContent = "";
  document.getElementById("next-btn").style.display = "none";
  myQuiz.moveToNextQuestion();
}
