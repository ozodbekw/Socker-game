const ball = document.querySelector("#ball");
const audio = new Audio("../assets/kicked.mp3");

document.addEventListener("click", (e) => {
  audio.play();
  ball.style.top = e.offsetY - 50 + "px";
  ball.style.left = e.offsetX - 50 + "px";
  ball.style.animation = "kickedBall 0.2s infinite";
  setTimeout(() => {
    ball.style.animation = "";
  }, 800);
});
