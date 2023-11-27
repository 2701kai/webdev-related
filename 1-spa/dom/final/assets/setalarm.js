function setAlarm() {
  // Get the value of the alarm time set by the user
  let alarmTime = document.getElementById("alarmTime").value;
  let alarmDate = new Date(alarmTime);

  // Check the alarm time every second
  let checkAlarmInterval = setInterval(function () {
    let now = new Date();

    // Compare current time with the alarm time
    if (
      now.getHours() === alarmDate.getHours() &&
      now.getMinutes() === alarmDate.getMinutes()
    ) {
      // If the times match, clear the interval and trigger the alarm
      clearInterval(checkAlarmInterval);
      alarmRing();
    }
  }, 1000);
}

function alarmRing() {
  // This function is called when the alarm time is reached
  // You can play a sound or display a message to the user here
  alert("Alarm ringing!");
}
