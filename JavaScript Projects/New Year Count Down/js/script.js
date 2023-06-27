const year = document.querySelector("#year");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");
const ripple = document.querySelector(".lds-ripple");
const currentYear = new Date().getFullYear();

year.textContent = currentYear + 1;

const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function countDownUpdate() {
  const currentTime = new Date();
  const diff = nextYear - currentTime;
  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  const secondsLeft = Math.floor(diff / 1000) % 60;

  days.textContent = daysLeft;

  hours.textContent = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes.textContent = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds.textContent = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
}
countDownUpdate();
setInterval(countDownUpdate, 1000);

setTimeout(() => {
  ripple.remove();
  countdown.classList.add("show");
}, 1500);
