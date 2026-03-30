const panoramas = {
  pano1: {
    src: "svg/panorama1.png",
    up: "pano4",
    down: "pano2",
    left: null,
    right: "pano3"
  },
  pano2: {
    src: "svg/panorama2.png",
    up: "pano1",
    down: null,
    left: null,
    right: null
  },
  pano3: {
    src: "svg/panorama3.png",
    up: null,
    down: null,
    left: "pano1",
    right: null
  },
  pano4: {
    src: "svg/panorama4.jpg",
    up: null,
    down: "pano1",
    left: null,
    right: null
  }
};

let isAnimating = false;
let currentPano = "pano1";
const container = document.querySelector(".contentMaps");
const startImg = container.querySelector(".panorama.current");
startImg.src = panoramas[currentPano].src;
startImg.style.position = "absolute";
startImg.style.top = 0;
startImg.style.left = 0;
startImg.style.width = "100%";
startImg.style.height = "100%";

function move(direction) {
  if (isAnimating) return;

  const nextPano = panoramas[currentPano][direction];
  if (!nextPano) return;

  isAnimating = true;

  const currentImg = container.querySelector(".panorama.current");

  const nextImg = document.createElement("img");
  nextImg.src = panoramas[nextPano].src;
  nextImg.classList.add("panorama", "current");
  Object.assign(nextImg.style, {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    filter: "blur(20px)",
    opacity: 0,
    transform: "scale(1.05)",
    transition: "filter 0.7s ease, opacity 0.7s ease, transform 0.7s ease"
  });

  container.appendChild(nextImg);

  requestAnimationFrame(() => {
    nextImg.style.filter = "blur(0)";
    nextImg.style.opacity = 1;
    nextImg.style.transform = "scale(1)";

    container.querySelectorAll(".panorama.previous").forEach((img) => {
      img.style.transform = "scale(1.2)";
      img.style.opacity = 0.2;
      img.style.filter = "blur(10px)";
    });

    currentImg.classList.remove("current");
    currentImg.classList.add("previous");
    currentImg.style.transform = "scale(1.2)";
    currentImg.style.opacity = 0.4;
    currentImg.style.filter = "blur(10px)";
  });

  setTimeout(() => {
    currentPano = nextPano;
    isAnimating = false;
  }, 700);
}

document.addEventListener("keydown", (e) => {
  if (isAnimating) return;

  if (["ArrowLeft", "a"].includes(e.key)) move("left");
  else if (["ArrowRight", "d"].includes(e.key)) move("right");
  else if (["ArrowUp", "w"].includes(e.key)) move("up");
  else if (["ArrowDown", "s"].includes(e.key)) move("down");
});

// Кнопки
window.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("arrowNintendo1")
    ?.addEventListener("click", () => move("up"));
  document
    .getElementById("arrowNintendo2")
    ?.addEventListener("click", () => move("left"));
  document
    .getElementById("arrowNintendo3")
    ?.addEventListener("click", () => move("right"));
  document
    .getElementById("arrowNintendo4")
    ?.addEventListener("click", () => move("down"));

  document
    .getElementById("left")
    ?.addEventListener("click", () => move("left"));
  document
    .getElementById("right")
    ?.addEventListener("click", () => move("right"));
  document.getElementById("up")?.addEventListener("click", () => move("up"));
  document
    .getElementById("down")
    ?.addEventListener("click", () => move("down"));
});
