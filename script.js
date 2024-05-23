function updateClock() {
  const clock_ampm = document.getElementById("clock-ampm");
  const clock = document.getElementById("clock");
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Calculate 12-hour format
  let hours_ampm = hours % 12;
  hours_ampm = hours_ampm ? hours_ampm : 12; // Show 12 instead of 0
  let ampm = hours >= 12 ? "PM" : "AM";

  // Format hours, minutes, and seconds to be two digits
  hours = hours < 10 ? "0" + hours : hours;
  hours_ampm = hours_ampm < 10 ? "0" + hours_ampm : hours_ampm;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (clock_ampm && clock) {
    clock_ampm.innerText = `${hours_ampm}:${minutes}:${seconds} ${ampm}`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
  }
}

// Initial call to display the clock immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
