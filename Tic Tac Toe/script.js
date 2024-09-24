const cells = document.querySelectorAll("[data-cell]");
const messageElement = document.querySelector(".message");
const restartButton = document.getElementById("restartButton");
const clickSound = document.getElementById("click_sound");
const congratsSound = document.getElementById("congrats_sound");
const gameStartSound = document.getElementById("start_sound");

let isXTurn = true;
let gameActive = true;
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell) => {
  cell.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  const cell = e.target;
  clickSound.play();

  const currentClass = isXTurn ? "x" : "o";
  placeMark(cell, currentClass);

  if (checkWin(currentClass)) {
    endGame(false, currentClass);
  } else if (isDraw()) {
    endGame(true);
  } else {
    switchTurns();
  }
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
  cell.textContent = currentClass.toUpperCase();
}

function switchTurns() {
  isXTurn = !isXTurn;
}

function checkWin(currentClass) {
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return cells[index].classList.contains(currentClass);
    });
  });
}

function isDraw() {
  return [...cells].every((cell) => {
    return cell.classList.contains("x") || cell.classList.contains("o");
  });
}

function endGame(draw, winner = "") {
  gameActive = false;
  if (draw) {
    messageElement.textContent = "It's a Draw!";
  } else {
    congratsSound.play();
    messageElement.textContent = `${winner.toUpperCase()} Wins!`;
  }
}

restartButton.addEventListener("click", () => {
  isXTurn = true;
  gameActive = true;
  messageElement.textContent = "";
  cells.forEach((cell) => {
    gameStartSound.play();
    cell.classList.remove("x", "o");
    cell.textContent = "";
    cell.addEventListener("click", handleClick, { once: true });
  });
});
