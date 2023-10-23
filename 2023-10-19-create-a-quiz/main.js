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

  // New Game Button letzte Seite entfernen:
  if (startbtn && startbtn.parentNode) {
    startbtn.parentNode.removeChild(startbtn);
  }

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
      "Wie hießen die Berliner Dissen, in denen Berufsjugendliche so ca. 2005 gerne in der Nacht von Freitag auf Montag tanzten?",
      [
        "Vereinsheim zur Steigerung der Lebensfreude durch Tanz und Musik und andere Lustbarkeiten von 1896 e.V. – E-Werk – Planet – Praxis Dr.McCoy – Walfisch – WMF – Exit – Vereinsheim – Turbine – Lipstick ",
        "WMS – Berghain – Tresor – AMS – Schellfisch – Lipstick – Franken – Golgatha - &tl,dr;",
        "90° - Kellerdisco Präsidentenstraße – HardWax – AMG – wastedYouth – Yaam – Sapucaiu",
      ],
      0,
      "Yes! Du bist professionell berufsjugendliches Tresen-Urgestein.<br>600 Jahre Feierkultur in Deinem zur Faust geballten Hartfasergesicht.<br>Respekt, Du schiebst Deinen Infusionsständer noch selbst?",
      "Nö, Du Tourist.<br>Aber Titisee ist auch sehr schön."
    ),

    new Question(
      "Was sagt die Schnecke, wenn sie auf der Schildkröte reitet?",
      ["Huuuuiiiiiii!"],
      0,
      "Richtig.<br>Wir lieben Deinen subtilen englischen Humor.<br>Also sobald Du Frankie Boyle frei zitieren kannst.<br>Bisher ein bisschen niedlich, Dein Vorschul – Humorverständnis."
    ),

    new Question(
      "In welchem Stadtteil von Rio liegt das Sambódromo?",
      ["Catete", "Aproador", "Cidade Nova", "Copa Cabana"],
      2,
      "Genau! In der Neustadt.<br>Explode coracao, na major felicidaaaade…",
      "Nö. Pfaldsh.<br>Ähnlich wie Dein Code."
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
      "Sehr schön!<br>Antwort leider falsch.<br>Aber wir sind stolz auf Dich:<br>Noch 19 Buchstaben und Du hast Grundschulabschluss!"
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
      "puuuh.. wie viele denn noch.. seufz..<br>Wie ist die richtige Reihenfolge der Planeten im Sonnensystem?",
      [
        "Merkur, Janus, Erde, Snickers, Jupiter, Pluto, Neptun",
        "Merkur, Venus, Erde, Mars, Jupiter, Uranus, Neptun",
        "Venus, Erde, Mars, Jupiter, Uranus, Neptun, Merkur",
      ],
      1,
      "Bingo! There’s a stairway to the staaaars..",
      "Puuh..<br>Du landest auch in Mölln,<br>wenn Du in HH Richtung Berlin abbiegst, was?"
    ),
  ];

  // --------------------------------------------------
  // GAME: Display Question
  // --------------------------------------------------

  function displayQuestion() {
    // new Game:
    const existingDivs = document.querySelectorAll("div");
    existingDivs.forEach((div) => div.remove());
    // new Game End

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

      // new Game:
      const newGameBtn = document.createElement("button");
      newGameBtn.innerText = "New Game";
      newGameBtn.classList.add("btn");
      //   newGameBtn.addEventListener("click", startGame);
      newGameBtn.addEventListener("click", function () {
        // back to start:
        const existingDivs = document.querySelectorAll("div");
        existingDivs.forEach((div) => div.remove());
        body.append(title);
        body.append(div);
        div.append(startbtn);
        currentQuestionIndex = 0; // reset
        score = 0; // reset
      });
      document.body.append(newGameBtn);
      // new Game End
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

// new Game:
startbtn.addEventListener("click", startGame);
// new Game End
