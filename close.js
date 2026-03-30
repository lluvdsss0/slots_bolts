const parentDiv1 = document.querySelector(".spamFiles");
const clickableElement1 = parentDiv1.querySelector("#krestSpamFolders");

clickableElement1.addEventListener("click", () => {
  parentDiv1.style.visibility = "hidden";

  setTimeout(() => {
    parentDiv1.style.visibility = "visible";
  }, 2000);
});

const parentDiv2 = document.querySelector(".spamPhoto");
const clickableElement2 = parentDiv2.querySelector("#krestSpamPhoto");

clickableElement2.addEventListener("click", () => {
  parentDiv2.style.visibility = "hidden";

  setTimeout(() => {
    parentDiv2.style.visibility = "visible";
  }, 2000);
});

const parentDiv3 = document.querySelector(".spamCode");
const clickableElement3 = parentDiv3.querySelector("#krestSpamCode");

clickableElement3.addEventListener("click", () => {
  parentDiv3.style.visibility = "hidden";

  setTimeout(() => {
    parentDiv3.style.visibility = "visible";
  }, 2000);
});

const parentDiv4 = document.querySelector(".openImg");
const clickableElement4 = parentDiv4.querySelector(".krestOpenImg");

clickableElement4.addEventListener("click", () => {
  parentDiv4.style.visibility = "hidden";
});

const spamCodeDiv = document.querySelector(".spamCode");
const dragHandle = spamCodeDiv.querySelector(".spamCodeMenu");
const closeBtn = spamCodeDiv.querySelector("#krestSpamCode");

const spamPhotoDiv = document.querySelector(".spamPhoto");
const dragHandlePhoto = spamPhotoDiv.querySelector(".spamPhotoRec");
const closeBtnPhoto = spamPhotoDiv.querySelector("#krestSpamPhoto");

const spamFilesDiv = document.querySelector(".spamFiles");
const dragHandleFiles = spamFilesDiv;
const closeBtnFiles = spamFilesDiv.querySelector("#krestSpamFolders");

const openImgDiv = document.querySelector(".openImg");
const dragHandleOpenImg = openImgDiv.querySelector(".openImgMenu");
const closeBtnOpenImg = openImgDiv.querySelector(".krestOpenImg");

const openImgDiv2 = document.querySelector("#openImg2");
const dragHandleOpenImg2 = openImgDiv2.querySelector("#openImgMenu2");
const closeBtnOpenImg2 = openImgDiv2.querySelector("#krestOpenImg2");

const openImgDiv3 = document.querySelector("#openImg3");
const dragHandleOpenImg3 = openImgDiv3.querySelector("#openImgMenu3");
const closeBtnOpenImg3 = openImgDiv3.querySelector("#krestOpenImg3");

const openImgDiv4 = document.querySelector("#openImg4");
const dragHandleOpenImg4 = openImgDiv4.querySelector("#openImgMenu4");
const closeBtnOpenImg4 = openImgDiv4.querySelector("#krestOpenImg4");

const openImgDiv5 = document.querySelector("#openImg5");
const dragHandleOpenImg5 = openImgDiv5.querySelector("#openImgMenu5");
const closeBtnOpenImg5 = openImgDiv5.querySelector("#krestOpenImg5");

const openImgDiv6 = document.querySelector("#openImg6");
const dragHandleOpenImg6 = openImgDiv6.querySelector("#openImgMenu6");
const closeBtnOpenImg6 = openImgDiv6.querySelector("#krestOpenImg6");

const openImgDiv7 = document.querySelector("#openImg7");
const dragHandleOpenImg7 = openImgDiv7.querySelector("#openImgMenu7");
const closeBtnOpenImg7 = openImgDiv7.querySelector("#krestOpenImg7");

const openImgDiv8 = document.querySelector("#openImg8");
const dragHandleOpenImg8 = openImgDiv8.querySelector("#openImgMenu8");
const closeBtnOpenImg8 = openImgDiv8.querySelector("#krestOpenImg8");

let topZIndex = 3;

function makeDraggable(spamDiv, dragHandle, closeBtn) {
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let currentY = 0;

  dragHandle.addEventListener("mousedown", (e) => {
    if (e.target === closeBtn) return;
    isDragging = true;
    startX = e.clientX - currentX;
    startY = e.clientY - currentY;

    topZIndex++;
    spamDiv.style.zIndex = topZIndex;

    dragHandle.style.cursor = "grabbing";
    e.preventDefault();
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    currentX = e.clientX - startX;
    currentY = e.clientY - startY;
    spamDiv.style.transform = `translate(${currentX}px, ${currentY}px)`;
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      dragHandle.style.cursor = "grab";
    }
  });

  closeBtn.addEventListener("click", () => {
    spamDiv.style.visibility = "hidden";
    setTimeout(() => {
      spamDiv.style.visibility = "visible";
    }, 2000);
  });
}

makeDraggable(spamCodeDiv, dragHandle, closeBtn);
makeDraggable(spamPhotoDiv, dragHandlePhoto, closeBtnPhoto);
makeDraggable(spamFilesDiv, dragHandleFiles, closeBtnFiles);
makeDraggable(openImgDiv, dragHandleOpenImg, closeBtnOpenImg);
makeDraggable(openImgDiv2, dragHandleOpenImg2, closeBtnOpenImg2);
makeDraggable(openImgDiv3, dragHandleOpenImg3, closeBtnOpenImg3);
makeDraggable(openImgDiv4, dragHandleOpenImg4, closeBtnOpenImg4);
makeDraggable(openImgDiv5, dragHandleOpenImg5, closeBtnOpenImg5);
makeDraggable(openImgDiv6, dragHandleOpenImg6, closeBtnOpenImg6);
makeDraggable(openImgDiv7, dragHandleOpenImg7, closeBtnOpenImg7);
makeDraggable(openImgDiv8, dragHandleOpenImg8, closeBtnOpenImg8);

closeBtnOpenImg.addEventListener("click", () => {
  openImgDiv.style.display = "none";
});

document.getElementById("brokemImgSpam1").ondblclick = () => {
  document.getElementById("openImg1").style.display = "block";
  console.log("работает");
};

const trigger = document.getElementById("brokemImgSpam1");
const popup = document.getElementById("openImg1");

trigger.addEventListener("dblclick", () => {
  popup.style.display = "block";
});

document.getElementById("brokemImgSpam1").ondblclick = () => {
  const popup = document.getElementById("openImg1");

  topZIndex++;
  popup.style.zIndex = topZIndex;
  popup.style.display = "block";

  console.log("работает");
};

const trigger2 = document.getElementById("brokemImgSpam2");
const popup2 = document.getElementById("openImg2");

trigger2.addEventListener("dblclick", () => {
  popup2.style.display = "block";
});

document.getElementById("brokemImgSpam2").ondblclick = () => {
  const popup2 = document.getElementById("openImg2");

  topZIndex++;
  popup2.style.zIndex = topZIndex;
  popup2.style.display = "block";

  console.log("работает");
};

const trigger3 = document.getElementById("brokemImgSpam3");
const popup3 = document.getElementById("openImg3");

trigger3.addEventListener("dblclick", () => {
  popup3.style.display = "block";
});

document.getElementById("brokemImgSpam3").ondblclick = () => {
  const popup3 = document.getElementById("openImg3");

  topZIndex++;
  popup3.style.zIndex = topZIndex;
  popup3.style.display = "block";

  console.log("работает");
};

const trigger4 = document.getElementById("brokemImgSpam4");
const popup4 = document.getElementById("openImg4");

trigger4.addEventListener("dblclick", () => {
  popup4.style.display = "block";
});

document.getElementById("brokemImgSpam4").ondblclick = () => {
  const popup4 = document.getElementById("openImg4");

  topZIndex++;
  popup4.style.zIndex = topZIndex;
  popup4.style.display = "block";

  console.log("работает");
};

const trigger5 = document.getElementById("brokemImgSpam5");
const popup5 = document.getElementById("openImg5");

trigger5.addEventListener("dblclick", () => {
  popup5.style.display = "block";
});

document.getElementById("brokemImgSpam5").ondblclick = () => {
  const popup5 = document.getElementById("openImg5");

  topZIndex++;
  popup5.style.zIndex = topZIndex;
  popup5.style.display = "block";

  console.log("работает");
};

const trigger6 = document.getElementById("brokemImgSpam6");
const popup6 = document.getElementById("openImg6");

trigger6.addEventListener("dblclick", () => {
  popup6.style.display = "block";
});

document.getElementById("brokemImgSpam6").ondblclick = () => {
  const popup6 = document.getElementById("openImg6");

  topZIndex++;
  popup6.style.zIndex = topZIndex;
  popup6.style.display = "block";

  console.log("работает");
};

const trigger7 = document.getElementById("brokemImgSpam7");
const popup7 = document.getElementById("openImg7");

trigger7.addEventListener("dblclick", () => {
  popup7.style.display = "block";
});

document.getElementById("brokemImgSpam7").ondblclick = () => {
  const popup7 = document.getElementById("openImg7");

  topZIndex++;
  popup7.style.zIndex = topZIndex;
  popup7.style.display = "block";

  console.log("работает");
};

const trigger8 = document.getElementById("brokemImgSpam8");
const popup8 = document.getElementById("openImg8");

trigger8.addEventListener("dblclick", () => {
  popup8.style.display = "block";
});

document.getElementById("brokemImgSpam8").ondblclick = () => {
  const popup8 = document.getElementById("openImg8");

  topZIndex++;
  popup8.style.zIndex = topZIndex;
  popup8.style.display = "block";

  console.log("работает");
};
