// ==================================================
// input/output im terminal mit readline
// ==================================================
// const readline = require("readline");
const readline = require("readline-sync");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ==================================================
// created class Question to represent quiz questions
// ==================================================
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

// // Q2
// const question2 = new Question(
question2 = new Question(
  "In welchem Stadtteil von Rio liegt das Sambódromo?",
  ["Catete", "Aproador", "Cidade Nova", "Copa Cabana"],
  2
);

question2.displayQuestion();
// let userChoice2 = 2;
userChoice2 = 2;
if (question2.checkAnswer(userChoice2)) {
  console.log("Nö. Pfaldsh. Ähnlich wie Dein Code.");
} else {
  console.log(
    "Genau! In der Neustadt. Explode coracao, na major felicidaaaade…"
  );
}

// // Q3 --------------------------------------------------
question3 = new Question(
  "Gibt es ein Leben vor dem Tode?",
  ["ja", "nein", "weeß ick", "Kartoffeln sind heute im Angebot bei Kaisers"],
  true
);

question3.displayQuestion();
console.log("Rischtisch, Keule. Machste weida, wa.!");

// // // Q4 --------------------------------------------------
const question4 = new Question(
  "Was sagt die Schnecke, wenn sie auf der Schildkröte reitet?",
  ["Huuuuiiiiiii!"],
  true
);

question4.displayQuestion();
let userChoice4 = 2;
if (question4.checkAnswer(userChoice4)) {
  console.log(
    "Richtig. Wir lieben Deinen subtilen englischen Humor. Also sobald Du Frankie Boyle frei zitieren kannst. Bisher ein bisschen niedlich, Dein Vorschul – Humorverständnis."
  );
}

// Q5 --------------------------------------------------
const question5 = new Question(
  "Wie möchtest Du einen romantischen Abend ausklingen lassen?",
  [
    "mit 4.26 Promille in der Notaufnahme",
    "mit mir allein, da habe ich die besten Gespräche",
    "nackt im Wald mit den anderen 47 Gästen (und dem Schaf) der Fetisch-Party",
    "bei einem guten Glas zimmertemperierten Mineralwassers aus Freilandhaltung mit Bio-Zitronenscheibchen",
  ],
  //   null, // No single correct answer
  true // All answers are correct
);

console.log("Sehr schön, gute Entscheidung von distinguiertem Geschmack!");

// // Q6 --------------------------------------------------
const question6 = new Question(
  "puuuh.. wie viele denn noch.. seufz.. wie ist die richtige Reihenfolge der Planeten im Sonnensystem?",
  [
    "Merkur, Janus, Erde, Snickers, Jupiter, Pluto, Neptun",
    "Merkur, Venus, Erde, Mars, Jupiter, Uranus, Neptun",
    "Venus, Erde, Mars, Jupiter, Uranus, Neptun, Merkur",
  ],
  1
);
question1;
question1;
2;

question6.displayQuestion();
let userChoice6 = 2;
if (question6.checkAnswer(userChoice6)) {
  console.log("Bingo! There’s a stairway to the staaaars..");
} else {
  console.log(
    " Puuh.. Du landest auch in Mölln, wenn Du inn HH Richtung Berlin abbiegst, was?"
  );
}
// // Q7 --------------------------------------------------
const question7 = new Question(
  "Wie heißt die Hauptreihe der Sterne?",
  [
    "A, B, C, D, E, F, G",
    "O, B, A, F, G, K, M",
    "X, Y, Z, K, M, F, D, M",
    "M, O, D, E, R, A, T",
  ],
  1
);

question7.displayQuestion();
let userChoice7 = 2;
if (question7.checkAnswer(userChoice7)) {
  console.log("Yay, rischtisch. Trekkie oder watt? Q'ap la!");
} else {
  console.log(
    "Sehr schön! Antwort leider falsch. Aber wir sind stolz auf Dich: Noch 19 Buchstaben und Du hast Grundschulabschluss!"
  );
}

// ==================================================
// DOM manipulation part
document.addEventListener("DOMContentLoaded", function () {
  const questionElement = document.getElementById("question-text");
  const optionsForm = document.getElementById("options-form");
  const submitButton = document.getElementById("submit-answer");

  let currentQuestion = question1; // We start with the first question
  let questionIndex = 1;

  function displayQuestion(question) {
    // Clear any existing options from a previous question
    optionsForm.innerHTML = "";

    // Set the question text
    questionElement.textContent = question.questionText;

    // Add radio buttons for each option
    question.options.forEach((option, index) => {
      const optionLabel = document.createElement("label");
      const optionInput = document.createElement("input");

      optionInput.type = "radio";
      optionInput.name = "answer";
      optionInput.value = index;

      optionLabel.appendChild(optionInput);
      optionLabel.appendChild(document.createTextNode(option));
      optionsForm.appendChild(optionLabel);
      optionsForm.appendChild(document.createElement("br"));
    });
  }

  displayQuestion(currentQuestion);

  submitButton.addEventListener("click", function () {
    const selectedOption = document.querySelector(
      'input[name="answer"]:checked'
    );
    if (selectedOption) {
      const userChoice = parseInt(selectedOption.value);
      if (currentQuestion.checkAnswer(userChoice)) {
        alert("Correct Answer!");
      } else {
        alert("Wrong Answer!");
      }

      // Move to the next question or display results if it was the last one
      if (questionIndex === 1) {
        currentQuestion = question2;
        displayQuestion(currentQuestion);
        questionIndex++;
      } else {
        alert("Quiz is over!");
      }
    } else {
      alert("Please select an option.");
    }
  });
});
