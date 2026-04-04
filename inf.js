const infCoffeeMachine = document.getElementById("infCoffeeMachine");
const coffeeMachineTalks = document.getElementById("coffeeMachineTalks");
const overlay = document.getElementById("overlay");
const coffeeCloseBtn = document.getElementById("krestOpenCoffee");

let scrollPosition = 0;

infCoffeeMachine.addEventListener("click", () => {
  scrollPosition = window.pageYOffset;
  coffeeMachineTalks.style.display = "block";
  overlay.style.display = "block";
  document.body.classList.add("no-scroll");
  document.body.style.top = `-${scrollPosition}px`;
});

function closeModal() {
  coffeeMachineTalks.style.display = "none";
  overlay.style.display = "none";
  document.body.classList.remove("no-scroll");
  document.body.style.top = "";
  window.scrollTo(0, scrollPosition);
}

coffeeCloseBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && coffeeMachineTalks.style.display === "block") {
    closeModal();
  }
});
