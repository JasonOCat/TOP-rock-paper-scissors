function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computerSelection) {
    let formattedPlayerSelection = playerSelection.toLowerCase();
    switch (formattedPlayerSelection) {
        case (computerSelection):
            let map = {isDraw: true, messageResult: `DRAW ! You and the computer chose ${playerSelection}`};
            return map;

        case ("rock"):
            return computerSelection === "paper" ? {isPlayerWinner: false, messageResult: "You LOSE ! Paper beats Rock"} : {isPlayerWinner: true, messageResult: "You WON ! Rock beats Scissors"};
            
        case ("paper"):
            return computerSelection === "scissors" ? {isPlayerWinner: false, messageResult: "You LOSE ! Scissors beats Paper"} : {isPlayerWinner: true, messageResult: "You WON ! Paper beats Rock"};

        case ("scissors"):
            return computerSelection === "rock" ? {isPlayerWinner: false, messageResult: "You LOSE ! Rock beats Scissors"} : {isPlayerWinner: true, messageResult: "You WON ! Scissors beats Paper"};
        default :
            throw Error("Something went wrong");
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    let computerSelection;

    for (let index = 0; index < 5; index++) {
        playerSelection = getPlayerChoice(index);
        computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        if (result.isDraw !== true) {
            if (result.isPlayerWinner) {
                playerScore++;
            }
            else {
                computerScore++;
            }
        }
    
        displayCurrentScore(index, result, playerSelection, playerScore, computerSelection, computerScore)

    }

    displayFinalScore(playerScore, computerScore)
}

function getPlayerChoice(index) {
    let playerSelection;
    do {
        playerSelection = prompt(`Round ${index+1}, your Choice : Rock, Paper or Scissors ? `);
        if (playerSelection === undefined || playerSelection === null || playerSelection === "") {
            alert("Please choose between Rock, Paper and scissors");
            checkChoice = false;
        }
        else {
            playerSelection = playerSelection.toLowerCase();
            checkChoice = playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors";
            if (!checkChoice) {
                alert("Please choose between Rock, Paper and scissors");
            }
        }
    } while (!checkChoice)

    return playerSelection;
}


function displayFinalScore(playerScore, computerScore) {
    if (playerScore === computerScore) {
        console.log(`It's a draw ! The score is ${playerScore}-${computerScore}`);
    }
    else {
        playerScore > computerScore ?
        console.log(`The final score is : ${playerScore}-${computerScore}, you Won ! `)
        :
        console.log(`The final score is : ${playerScore}-${computerScore}, You Lose !`);
    }
}

function displayCurrentScore(index, result, playerSelection, playerScore, computerSelection, computerScore) {
    console.log(`Round ${index+1}, you chose ${playerSelection} and the computer chose ${computerSelection}`);
    console.log(`RESULT round ${index+1} : ${result.messageResult}, the score is ${playerScore}-${computerScore}`);
}



game();