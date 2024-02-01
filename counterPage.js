
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const IncBy5 = document.getElementById("IncBy5");
const IncBy10 = document.getElementById("IncBy10");
const IncBy100 = document.getElementById("IncBy100");
const countLabel = document.getElementById("countLabel");
let number = 0;

countLabel.textContent = number;

increaseBtn.onclick = function() {
  number++;
  countLabel.textContent = number;
}
decreaseBtn.onclick = function() {
  number--;
  countLabel.textContent = number;
}
resetBtn.onclick = function() {
  number = 0;
  countLabel.textContent = number;
}
IncBy5.onclick = function() {
  number = number + 5;
  countLabel.textContent = number;
}
IncBy10.onclick = function() {
  number = number + 10;
  countLabel.textContent = number;
}
IncBy100.onclick = function() {
  number = number + 100;
  countLabel.textContent = number;
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


