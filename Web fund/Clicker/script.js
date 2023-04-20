let counter = 0;
const counterEl = document.getElementById("counter");
const clickBtn = document.getElementById("click-btn");

clickBtn.addEventListener("click", () => {
  counter++;
  counterEl.textContent = counter;
});