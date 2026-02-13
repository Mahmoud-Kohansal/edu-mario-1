const gameArea = document.querySelector('.game-area');
const mario = document.getElementById('mario');
const scoreEl = document.getElementById('score');

let marioX = gameArea.clientWidth / 2;
let score = 0;
const step = 30;

function updateMarioPosition() {
  const maxX = gameArea.clientWidth;
  marioX = Math.max(0, Math.min(maxX, marioX));
  mario.style.left = `${marioX}px`;
}

function addScore(points = 1) {
  score += points;
  scoreEl.textContent = score;
}

function moveLeft() {
  marioX -= step;
  updateMarioPosition();
  addScore();
}

function moveRight() {
  marioX += step;
  updateMarioPosition();
  addScore();
}

gameArea.addEventListener('click', (event) => {
  const clickX = event.clientX;
  const marioCenterX = mario.getBoundingClientRect().left + mario.offsetWidth / 2;

  if (clickX < marioCenterX) {
    moveLeft();
  } else {
    moveRight();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    moveLeft();
  }
  if (event.key === 'ArrowRight') {
    moveRight();
  }
});

window.addEventListener('resize', updateMarioPosition);

updateMarioPosition();
