const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  let playerChoice = prompt('Votre choix');

  while (!playerChoice || !choices.includes(playerChoice.toLowerCase())) {
    alert('Please choose between Rock, Paper, and Scissors');
    playerChoice = prompt('Votre choix');
  }

  return playerChoice.toLowerCase();
}

function playRound(humanSelection, computerSelection) {
  switch (humanSelection) {
    case computerSelection:
      console.log(
        `${computerSelection} vs ${computerSelection}, it's a DRAW !`
      );
      break;
    case 'rock':
      if (computerSelection === 'scissors') {
        console.log('Rock vs Scissors, you win!');
        humanScore++;
      } else {
        console.log('Rock vs Paper, you lose!');
        computerScore++;
      }
      break;
    case 'scissors':
      if (computerSelection === 'paper') {
        console.log('Scissors vs Paper, you win!');
        humanScore++;
      } else {
        console.log('Scissors vs Rock, you lose!');
        computerScore++;
      }
      break;
    case 'paper':
      if (computerSelection === 'rock') {
        console.log('Paper vs Rock, you win!');
        humanScore++;
      } else {
        console.log('Paper vs Scissors, you lose!');
        computerScore++;
      }
      break;
  }
}

function playGame() {
  let humanSelection;
  let computerSelection;

  for (let index = 0; index < 5; index++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore == computerScore) {
    console.log(`It's a draw ${humanScore}-${computerScore} !`);
  } else if (humanScore > computerScore) {
    console.log(`You won ${humanScore}-${computerScore} !`);
  } else {
    console.log(`You lost ${humanScore}-${computerScore} !`);
  }
}

playGame();
