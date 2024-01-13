const playerTurn = document.getElementById('playerTurn');
const playerScore = document.getElementById('playerScore');
const computerTurn = document.getElementById('computerTurn');
const computerScore = document.getElementById('computerScore');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');

const resultText = document.getElementById('resultText');

const allGameIcons = document.querySelectorAll('.icon');

const choices = {
  rock: { name: 'Rock', win: ['scissors'] },
  paper: { name: 'Paper', win: ['rock'] },
  scissors: { name: 'Scissors', win: ['paper'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected');
    // stopConfetti();
    removeConfetti();
  });
}
function computerRandomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.3) {
    computerChoice = 'rock';
  } else if (computerChoiceNumber <= 0.65) {
    computerChoice = 'paper';
  } else if (computerChoiceNumber <= 1) {
    computerChoice = 'scissors';
  }
}

function displayComputerChoice() {
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerTurn.textContent = ' --- Taş';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerTurn.textContent = ' --- Kağıt';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerTurn.textContent = ' --- Makas';
      break;
  }
}

function resetAll(){
    playerScoreNumber=0;
    computerScoreNumber=0;
    playerScore.textContent=playerScoreNumber;
    computerScore.textContent=computerScoreNumber;
    playerTurn.textContent=''
    computerTurn.textContent=''
    resultText.textContent=''
    resetSelected();
}
function updateScore(playerChoice) {
  if (playerChoice === computerChoice) {
    resultText.textContent = 'Berabere.';
  } else {
    const choice = choices[playerChoice];
    console.log(choice);
    console.log(choice.win.indexOf(computerChoice));
    if (choice.win.indexOf(computerChoice) === 0) {
      playerScoreNumber++;
      resultText.textContent = 'Kullanıcı kazandı.';
      playerScore.textContent = playerScoreNumber;
      startConfetti();
    } else {
      computerScoreNumber++;
      resultText.textContent = 'Bilgisayar kazandı.';
      computerScore.textContent = computerScoreNumber;
    }
  }
}

function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

function select(playerChoice) {
  checkResult(playerChoice);

  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerTurn.textContent = ' --- Taş';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerTurn.textContent = ' --- Kağıt';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerTurn.textContent = ' --- Makas';
      break;
  }
}
