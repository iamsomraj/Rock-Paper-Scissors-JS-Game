const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

const DEFAULT_USER_CHOICE = ROCK;

const DRAW = 'GAME IS DRAWN!';
const PLAYER_WIN = 'PLAYER WINS';
const COMPUTER_WIN = 'COMPUTER WINS';

let isGameRunning = false;

const getPlayerChoice = () => {
  playerSelection = prompt(
    `Choose ${ROCK}, ${PAPER} or ${SCISSORS} :`,
    ''
  ).toUpperCase();

  if (
    playerSelection !== ROCK &&
    playerSelection !== PAPER &&
    playerSelection !== SCISSORS
  ) {
    alert(`Invalid Player Input! We choose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }

  return playerSelection;
};

const getComputerChoice = () => {
  let randomNumber = Math.random();
  if (randomNumber < 0.34) {
    return ROCK;
  } else if (randomNumber < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};



const determineWinner = (computerSelection, playerSelection = DEFAULT_USER_CHOICE) =>
  playerSelection === computerSelection
    ? DRAW
    : (computerSelection === ROCK && playerSelection === PAPER) ||
      (computerSelection === PAPER && playerSelection === SCISSORS) ||
      (computerSelection === SCISSORS && playerSelection === ROCK)
    ? PLAYER_WIN
    : COMPUTER_WIN;

startGameBtn.addEventListener('click', () => {
  if (isGameRunning) {
    return;
  }
  isGameRunning = true;
  console.log('Game is starting!');
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  let winner;
  if (playerSelection) {
    winner = determineWinner(computerSelection,playerSelection);
  } else {
    winner = determineWinner(computerSelection);
  }
  let alertMessage = `You picked ${playerSelection || DEFAULT_USER_CHOICE}\nComputer Picked ${computerSelection}\nTherefore,\n`;
  if(winner === PLAYER_WIN) {
    alertMessage += PLAYER_WIN;
  } else if ( winner === COMPUTER_WIN) {
    alertMessage += COMPUTER_WIN;
  } else {
    alertMessage += DRAW;
  }
  alert(alertMessage);
  isGameRunning = false;
});
