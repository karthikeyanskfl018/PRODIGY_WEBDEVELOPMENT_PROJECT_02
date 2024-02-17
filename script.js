const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

let totalSeconds = 0;
let intervalId;

function updateTime() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  hoursElement.textContent = hours.toString().padStart(2, "0");
  minutesElement.textContent = minutes.toString().padStart(2, "0");
  secondsElement.textContent = seconds.toString().padStart(2, "0");
}

document.getElementById("start").addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      totalSeconds++;
      updateTime();
    }, 1000);
  }
});

document.getElementById("pause").addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  totalSeconds = 0;
  updateTime();
});
