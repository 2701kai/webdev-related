// Funktion zur Simulation einer 3-sekündigen Verzögerung
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Funktion zum Anzeigen des Lade-Spinners
function showLoadingSpinner() {
  const usersList = document.getElementById("users");
  usersList.innerHTML = '<li class="loading">Loading...</li>';
}

// Funktion zum Ausblenden des Lade-Spinners und Rendern der Benutzerliste
function renderUsers(users) {
  const usersList = document.getElementById("users");
  usersList.innerHTML = ""; // Lade-Spinner entfernen

  // Für jeden Benutzer ein Listenelement erstellen
  users.forEach((user) => {
    const listItem = document.createElement("li");
    // listItem.style.backgroundColor= user.company.name === "Romaguera-Crona" ? "green" : "red";
    listItem.textContent = user.name;
    // if (user.name === "Leanne Graham") {
    //   listItem.textContent = user.name + " (Admin)";
    // } else {
    //   listItem.textContent = user.name + " (User)";
    // }
    usersList.appendChild(listItem);
  });
}

// Funktion zum Abrufen der Benutzerdaten
async function fetchUsers() {
  try {
    // Indem wir dem Benutzer einen Lade-Spinner zeigen, verbessern wir die UX, weil er versteht,
    // dass er warten muss, bis die Daten geladen sind.
    showLoadingSpinner(); // Lade-Spinner anzeigen
    await delay(1000); // 3-sekündige Verzögerung simulieren

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    renderUsers(users); // Benutzerliste rendern
  } catch (error) {
    console.log(error);
  }
}

// Abrufen der Benutzerdaten starten
fetchUsers();
