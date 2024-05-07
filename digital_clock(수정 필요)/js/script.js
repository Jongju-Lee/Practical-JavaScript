const $hours = document.querySelector(".hours");
const $minutes = document.querySelector(".minutes");
const $seconds = document.querySelector(".seconds");

const clock = () => {
  const now = new Date();
  $hours.textContent = now.getHours().toString().padStart(2, "0");
  $minutes.textContent = now.getMinutes().toString().padStart(2, "0");
  $seconds.textContent = now.getSeconds().toString().padStart(2, "0");
};

setInterval(clock, 1000);
