
document.querySelectorAll(".drum").forEach(btn =>
  btn.addEventListener("click", () => {
    playSound(btn.innerHTML);
    buttonAnimation(btn.innerHTML);
  }));


function playSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/crash.mp3").play();
      break;
    case "k":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "l":
      new Audio("sounds/snare.mp3").play();
      break;
    default:
      console.log(btn.innerHTML);
  }
}

document.addEventListener("keydown", event => {
  playSound(event.key);
  buttonAnimation(event.key);
});


function buttonAnimation(currentKey) {
  const activeBtn =  document.querySelector("." + currentKey);
  activeBtn.classList.add("pressed");

  setTimeout(() => {
    activeBtn.classList.remove("pressed");
  }, 100);
}
