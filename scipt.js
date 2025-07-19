const burger = document.querySelector(".burger");
const menu = document.querySelector(".header-list");
burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

function update() {
  let dates = new Date();
  let hours = dates.getHours();
  let minutes = dates.getMinutes();
  let seconds = dates.getSeconds();
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(update, 1000);
