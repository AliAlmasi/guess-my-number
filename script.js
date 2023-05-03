`use strict`;

function generateRandom() {
  return Math.trunc((Math.random() * 20) + 1);
}

function message(msg) {
  document.querySelector(`.message`).textContent = msg;
}

let secretNumber = generateRandom();
let score = 20;
let highScore = 0;


document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  if (!guess) { // when no input
    message(`⚠️ NO INPUT`);
  }
  else if (guess === secretNumber) { // when player wins
    message(`👍 Correct Number!`);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `25rem`;
    document.querySelector(`.number`).textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;

    }
  }
  else if (guess !== secretNumber) {
    if (score > 1) {
      message(guess > secretNumber ? `📈 Too High` : `📉 Too Low`);
      score--;
      document.querySelector(`.score`).textContent = score;
    }
    else {
      message(`🙈 You Lost`);
      document.querySelector(`.score`).textContent = `0`;
      document.querySelector(`body`).style.backgroundColor = `#992c34`;
      document.querySelector(`.number`).textContent = secretNumber;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  document.querySelector(`.score`).textContent = score;
  secretNumber = generateRandom();
  message(`Start guessing...`);
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
});