const body = document.body;
// body.innerHTML = "<h1>Hello World</h1>";
// diff. .append / .appendChild:
// .appendChild = adding elements (div, h1, a, etc.), 1 thing at a time
// .append = adding nodes, strings; multiple things all at once

// body.append("Hello World");

// document.createElement("h2");
const title = document.createElement("h3");
title.innerText = "DOM Manipulation";
body.append(title);

const div = document.createElement("div");
// div.innerText = "Hello World";
// div.innerText = "Hello World";
div.id = "start";
div.innerHTML = "<h2>Simple Quiz Game</h2>";
body.append(div);

const btn = document.createElement("button");
btn.id = "start-btn";
btn.innerText = "Start Game!";
btn.classList.add("btn");
div.append(btn);

// --------------------------------------------------
startbtn.addEventListener("click", function () {
  // Remove div with id "start"
  const startDiv = document.getElementById("start");
  startDiv.remove();

  // Create another div with a question
  const questionDiv = document.createElement("div");
  questionDiv.innerHTML = "<h2>What is 2 + 2?</h2>"; // Example question

  // Create a button to proceed
  const proceedBtn = document.createElement("button");
  proceedBtn.innerText = "Proceed";
  proceedBtn.classList.add("btn");

  // You can add another event listener to proceedBtn if you want to perform further actions when it's clicked
  // proceedBtn.addEventListener("click", function() {
  //     // Implement your logic here
  // });

  questionDiv.append(proceedBtn);
  body.append(questionDiv);
});



// // --------------------------------------------------
class Question {
    constructor(text, options, correctIndex) {
        this.text = text;
        this.options = options;
        this.correctIndex = correctIndex;
    }

    isCorrect(choice) {
        return this.correctIndex === choice;
    }
}

const questionsAndOptions = [
    new Question("What is 2 + 2?", ["3", "4", "5"], 1),
    new Question("Which planet is closest to the sun?", ["Earth", "Mars", "Mercury"], 2),
    new Question("Which animal barks?", ["Cat", "Dog", "Fish"], 1)
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    if (currentQuestionIndex < questionsAndOptions.length) {
        const question = questionsAndOptions[currentQuestionIndex];
        const div = document.createElement("div");
        div.innerHTML = `<h2>${question.text}</h2>`;
        
        question.options.forEach((option, index) => {
            const optionBtn = document.createElement("button");
            optionBtn.innerText = option;
            optionBtn.classList.add("btn");
            optionBtn.addEventListener("click", function() {
                checkChoice(index);
            });
            div.append(optionBtn);
        });

        document.body.append(div);
    } else {
        // All questions answered
        const resultDiv = document.createElement("div");
        resultDiv.innerHTML = `<h2>Your score is: ${score}/${questionsAndOptions.length}</h2>`;
        document.body.append(resultDiv);
    }
}

function checkChoice(choice) {
    const question = questionsAndOptions[currentQuestionIndex];
    if (question.isCorrect(choice)) {
        score++;
    }

    // Clear the current display
    document.body.innerHTML = "";

    // Move to the next question
    currentQuestionIndex++;

    // Display the next question or results
    displayQuestion();
}

// Start the quiz by displaying the first question
displayQuestion();



// --------------------------------------------------
// nächster versuch..
// --------------------------------------------------
const body = document.body;
// body.innerHTML = "<h1>Hello World</h1>";
// diff. .append / .appendChild:
// .appendChild = adding elements (div, h1, a, etc.), 1 thing at a time
// .append = adding nodes, strings; multiple things all at once

// body.append("Hello World");

// document.createElement("h2");
const title = document.createElement("h3");
title.innerText = "DOM Manipulation";
body.append(title);

// --------------------------------------------------
// START
// --------------------------------------------------

const div = document.createElement("div");
// div.innerText = "Hello World";
// div.innerText = "Hello World";
div.id = "start";
div.innerHTML = "<h2>Simple Quiz Game</h2>"; // consider security issues..
body.append(div);

const startbtn = document.createElement("button");
startbtn.id = "start-btn";
startbtn.innerText = "Start Game!";
startbtn.classList.add("btn");
div.append(startbtn);

// --------------------------------------------------
// Start Button
// --------------------------------------------------
startbtn.addEventListener("click", function () {
  const startDiv = document.getElementById("start");
  startDiv.remove();

  // Create another div with a question
  //   const questionDiv = document.createElement("div");
  //   questionDiv.innerHTML = "<h2>What is 2 + 2?</h2>"; // Example question

  // --------------------------------------------------
  // GAME
  // --------------------------------------------------

  //   class Question {
  //     constructor(text, options, correctIndex) {
  //       this.text = text;
  //       this.options = options;
  //       //   this.correctIndex = correctIndex;
  //       this.correctAnswers = Array.isArray(correctAnswers)
  //         ? correctAnswers
  //         : [correctAnswers];
  //     }
  class Question {
    constructor(text, options, correctAnswers, correctFeedback, wrongFeedback) {
      this.text = text;
      this.options = options;
      this.correctAnswers = Array.isArray(correctAnswers)
        ? correctAnswers
        : [correctAnswers];
      this.correctFeedback = correctFeedback;
      this.wrongFeedback = wrongFeedback;
    }

    isCorrect(choice) {
      //   return this.correctIndex === choice; // falsch
      return this.correctAnswers.includes(choice);
    }

    // Feedback
    getFeedback(isAnswerCorrect) {
      return isAnswerCorrect ? this.correctFeedback : this.wrongFeedback;
    }
  }

  const questionsAndOptions = [
    new Question(
      "In welchem Stadtteil von Rio liegt das Sambódromo?",
      ["Catete", "Aproador", "Cidade Nova", "Copa Cabana"],
      2,
      "Genau! In der Neustadt. Explode coracao, na major felicidaaaade…", // correctFeedback
      "Nö. Pfaldsh. Ähnlich wie Dein Code."
    ),
    new Question(
      "Wie heißt die Hauptreihe der Sterne?"[
        ("A, B, C, D, E, F, G",
        "O, B, A, F, G, K, M",
        "X, Y, Z, K, M, F, D, M",
        "M, O, D, E, R, A, T")
      ],
      2
    ),
    new Question(
      "Gibt es ein Leben vor dem Tode?",
      [
        "ja",
        "nein",
        "weeß ick",
        "Kartoffeln sind heute im Angebot bei Kaisers",
      ],
      [0, 1, 2, 3]
    ),
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  function displayQuestion() {
    if (currentQuestionIndex < questionsAndOptions.length) {
      const question = questionsAndOptions[currentQuestionIndex];
      const div = document.createElement("div");
      div.innerHTML = `<h2>${question.text}</h2>`;

      question.options.forEach((option, index) => {
        const optionBtn = document.createElement("button");
        optionBtn.innerText = option;
        optionBtn.classList.add("btn");
        optionBtn.addEventListener("click", function () {
          checkChoice(index);
        });
        div.append(optionBtn);
      });

      document.body.append(div);
    } else {
      // All questions answered
      const resultDiv = document.createElement("div");
      resultDiv.innerHTML = `<h2>Your score is: ${score}/${questionsAndOptions.length}</h2>`;
      document.body.append(resultDiv);
    }
  }

  //   function checkChoice(choice) {
  //     const question = questionsAndOptions[currentQuestionIndex];

  //     if (question.isCorrect(choice)) {
  //       score++; // nur bei ja/nein antworten

  function checkChoice(choice) {
    const question = questionsAndOptions[currentQuestionIndex];
    const isAnswerCorrect = question.isCorrect(choice);
    const feedback = question.getFeedback(isAnswerCorrect);

    // Feedback im neuen Container anzeigen
    const feedbackDiv = document.createElement("div");
    feedbackDiv.id = "feedback";
    feedbackDiv.innerHTML = `<p>${feedback}</p>`;

    const proceedBtn = document.createElement("button");
    proceedBtn.innerText = "Proceed";
    proceedBtn.classList.add("btn");
    proceedBtn.addEventListener("click", function () {
      // Den Feedback-Container entfernen
      feedbackDiv.remove();
      // Zur nächsten Frage oder zum Ergebnis navigieren
      displayQuestion();
    });

    feedbackDiv.append(proceedBtn);
    document.body.append(feedbackDiv);

    if (isAnswerCorrect) {
      score++;
    }

        // Aktuelle Fragenanzeige löschen
        const currentQuestionDiv = document.body.querySelector("div:not(#feedback)"); // Der nicht-Feedback-Div
        if (currentQuestionDiv) currentQuestionDiv.remove();
    }

    // Clear the current display
    document.body.innerHTML = "";

    // Move to the next question
    currentQuestionIndex++;

    // Display the next question or results
    displayQuestion();
  }

  // Start the quiz by displaying the first question
  displayQuestion();

  // Create a button to proceed
  const proceedBtn = document.createElement("button");
  proceedBtn.innerText = "Proceed";
  proceedBtn.classList.add("btn");

  // You can add another event listener to proceedBtn if you want to perform further actions when it's clicked
  // proceedBtn.addEventListener("click", function() {
  //     // Implement your logic here
  // });

  questionDiv.append(proceedBtn);
  body.append(questionDiv);
});

// const btn = document.createElement("button");
// btn.id = "start-btn";
// btn.innerText = "Start Game!";
// btn.classList.add("btn");
// div.append(btn);

// --------------------------------------------------
// noch einer..
// --------------------------------------------------
const body = document.body;

const title = document.createElement("h3");
title.innerText = "DOM Manipulation";
body.append(title);

// --------------------------------------------------
// START
// --------------------------------------------------

const div = document.createElement("div");
div.id = "start";
div.innerHTML = "<h2>Simple Quiz Game</h2>";
body.append(div);

const startbtn = document.createElement("button");
startbtn.id = "start-btn";
startbtn.innerText = "Start Game!";
startbtn.classList.add("btn");
div.append(startbtn);

// startbtn.addEventListener("click", function () {
//   const startDiv = document.getElementById("start");
//   startDiv.remove();

function startGame() {
  const startDiv = document.getElementById("start");
  if (startDiv) startDiv.remove();

  let currentQuestionIndex = 0;
  let score = 0;

  // --------------------------------------------------
  // GAME
  // --------------------------------------------------

  class Question {
    constructor(text, options, correctAnswers, correctFeedback, wrongFeedback) {
      this.text = text;
      this.options = options;
      this.correctAnswers = Array.isArray(correctAnswers)
        ? correctAnswers
        : [correctAnswers];
      this.correctFeedback = correctFeedback;
      this.wrongFeedback = wrongFeedback;
    }

    isCorrect(choice) {
      return this.correctAnswers.includes(choice);
    }

    getFeedback(isAnswerCorrect) {
      return isAnswerCorrect ? this.correctFeedback : this.wrongFeedback;
    }
  }

  // --------------------------------------------------
  // QUESTIONS
  // --------------------------------------------------

  const questionsAndOptions = [
    new Question(
      "Wie hießen die Dissen, in denen Berufsjugendliche so ca. 2005 gerne in der Nacht von Freitag auf Montag tanzten?",
      [
        "Vereinsheim zur Steigerung der Lebensfreude durch Tanz und Musik und andere Lustbarkeiten von 1896 e.V. - E-Werk – Planet – Praxis Dr.McCoy – Walfisch – WMF – Exit – Vereinsheim – Turbine – Lipstick ",
        "WMS – Berghain – Tresor – AMS – Schellfisch – Lipstick – Franken – Golgatha - &tl,dr;",
        "90° - Kellerdisco Präsidentenstraße – HardWax – AMG – wastedYouth – Yaam – Sapucaiu",
      ],
      0,
      "Yes! Du bist professionell berufsjugendliches Tresen-Urgestein. 600 Jahre Feierkultur in Deinem zur Faust geballten Hartfasergesicht. Respekt, Du schiebst Deinen Infusionsständer noch selbst?",
      "Nö, Du Tourist. Aber Titisee ist auch sehr schön."
    ),

    new Question(
      "Was sagt die Schnecke, wenn sie auf der Schildkröte reitet?",
      ["Huuuuiiiiiii!"],
      0,
      "Richtig. Wir lieben Deinen subtilen englischen Humor. Also sobald Du Frankie Boyle frei zitieren kannst. Bisher ein bisschen niedlich, Dein Vorschul – Humorverständnis."
    ),

    new Question(
      "In welchem Stadtteil von Rio liegt das Sambódromo?",
      ["Catete", "Aproador", "Cidade Nova", "Copa Cabana"],
      2,
      "Genau! In der Neustadt. Explode coracao, na major felicidaaaade…",
      "Nö. Pfaldsh. Ähnlich wie Dein Code."
    ),

    new Question(
      "Wie heißt die Hauptreihe der Sterne?",
      [
        "A, B, C, D, E, F, G",
        "O, B, A, F, G, K, M",
        "X, Y, Z, K, M, F, D, M",
        "M, O, D, E, R, A, T",
      ],
      1,
      "Yay, rischtisch. Trekkie oder watt? Q'ap la!",
      "Sehr schön! Antwort leider falsch. Aber wir sind stolz auf Dich: Noch 19 Buchstaben und Du hast Grundschulabschluss!"
    ),
    new Question(
      "Gibt es ein Leben vor dem Tode?",
      [
        "ja",
        "nein",
        "weeß ick",
        "Kartoffeln sind heute im Angebot bei Kaisers",
      ],
      [0, 1, 2, 3],
      "Rischtisch, Keule. Machste weida, wa."
    ),

    new Question(
      "Wie möchtest Du einen romantischen Abend ausklingen lassen?",
      [
        "mit 4.26 Promille in der Notaufnahme",
        "mit mir allein, da habe ich die besten Gespräche",
        "nackt im Wald mit den anderen 47 Gästen (und dem Schaf) der Fetisch-Party",
        "bei einem guten Glas zimmertemperierten Mineralwassers aus Freilandhaltung mit Bio-Zitronenscheibchen",
      ],
      [0, 1, 2, 3],
      "Sehr schön, gute Entscheidung von distinguiertem Geschmack!"
    ),

    new Question(
      "puuuh.. wie viele denn noch.. seufz.. wie ist die richtige Reihenfolge der Planeten im Sonnensystem?",
      [
        "Merkur, Janus, Erde, Snickers, Jupiter, Pluto, Neptun",
        "Merkur, Venus, Erde, Mars, Jupiter, Uranus, Neptun",
        "Venus, Erde, Mars, Jupiter, Uranus, Neptun, Merkur",
      ],
      1,
      "Bingo! There’s a stairway to the staaaars..",
      "Puuh.. Du landest auch in Mölln, wenn Du in HH Richtung Berlin abbiegst, was?"
    ),
  ];

  // --------------------------------------------------
  // GAME: Display Question
  // --------------------------------------------------

  function displayQuestion() {
    if (currentQuestionIndex < questionsAndOptions.length) {
      const question = questionsAndOptions[currentQuestionIndex];
      const div = document.createElement("div");
      div.innerHTML = `<h2>${question.text}</h2>`;

      question.options.forEach((option, index) => {
        const optionBtn = document.createElement("button");
        optionBtn.innerText = option;
        optionBtn.classList.add("btn");
        optionBtn.addEventListener("click", function () {
          checkChoice(index);
        });
        div.append(optionBtn);
      });

      document.body.append(div);
    } else {
      const resultDiv = document.createElement("div");
      resultDiv.innerHTML = `<h2>Your score is: ${score}/${questionsAndOptions.length}</h2>`;
      document.body.append(resultDiv);
    }
  }

  function checkChoice(choice) {
    const question = questionsAndOptions[currentQuestionIndex];
    const isAnswerCorrect = question.isCorrect(choice);
    const feedback = question.getFeedback(isAnswerCorrect);

    // Entfernen des aktuellen containers:
    const currentQuestionDiv = document.querySelector("div:not(#feedback)");
    if (currentQuestionDiv) currentQuestionDiv.remove();

    const feedbackDiv = document.createElement("div");
    feedbackDiv.id = "feedback";
    feedbackDiv.innerHTML = `<p>${feedback}</p>`;

    const proceedBtn = document.createElement("button");
    proceedBtn.innerText = "Proceed";
    proceedBtn.classList.add("btn");
    proceedBtn.addEventListener("click", function () {
      feedbackDiv.remove();
      currentQuestionIndex++;
      displayQuestion();
    });

    feedbackDiv.append(proceedBtn);
    document.body.append(feedbackDiv);

    if (isAnswerCorrect) {
      score++;
    }
  }

  displayQuestion();
}
