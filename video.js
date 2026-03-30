const video = document.getElementById("videoCasinoCam");
const darkOverlay = document.querySelector(".textsOnCam");

const video1 = "svg/video1.mp4";
const video2 = "svg/video2.mp4";

darkOverlay.addEventListener("click", () => {
  if (video.src.includes(video1)) {
    video.src = video2;
  } else {
    video.src = video1;
  }

  video.play();
});
