window.onload = function () {
  setInterval(displayTime, 1000);
  // Set up the alarm
  document.getElementById("set-alarm").onclick = setAlarm;
};

function displayTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  // Format the time as a string "HH:MM:SS"
  let timeStr = [hours, minutes, seconds]
    .map((part) => (part < 10 ? "0" + part : part))
    .join(":");
  // Display the time
  document.getElementById("clock").textContent = timeStr;
}

// Set the alarm time, confirm with btn #setAlarm
function setAlarm() {
  let alarmTime = document.getElementById("alarm-time").value;
  if (!alarmTime) {
    alert("Please set a valid alarm time.");
    return;
  }
  // Alert the user that the alarm is set to the specified time
  showAlert("Alarm is set to " + alarmTime);

  let current = new Date();
  let alarm = new Date(current.toDateString() + " " + alarmTime);

  // If the alarm time is less than the current, set it for the next day
  if (alarm < current) {
    alarm.setDate(alarm.getDate() + 1);
    alarm = new Date(alarm.toDateString() + " " + alarmTime); // Reset the time part after changing the date
  }

  // Calculate the time difference in milliseconds
  let timeout = alarm.getTime() - current.getTime();

  setTimeout(function () {
    alert("Alarm ringing!");
  }, timeout);
}

// Provide a message to display in the green "success" alert box
function showAlert(message) {
  let alertBox = document.getElementById("success-alert");
  alertBox.style.display = "block";
  alertBox.textContent = message;

  // Hide the alert box after 2 seconds
  setTimeout(function () {
    alertBox.style.display = "none";
  }, 2000);
}
