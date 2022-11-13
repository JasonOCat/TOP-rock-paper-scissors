function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case (computerSelection):
            let map = { isDraw: true, messageResult: `DRAW ! You and the computer chose ${playerSelection}` };
            return map;

        case ("rock"):
            return computerSelection === "paper" ? { isPlayerWinner: false, messageResult: "You LOSE ! Paper beats Rock" } : { isPlayerWinner: true, messageResult: "You WON ! Rock beats Scissors" };

        case ("paper"):
            return computerSelection === "scissors" ? { isPlayerWinner: false, messageResult: "You LOSE ! Scissors beats Paper" } : { isPlayerWinner: true, messageResult: "You WON ! Paper beats Rock" };

        case ("scissors"):
            return computerSelection === "rock" ? { isPlayerWinner: false, messageResult: "You LOSE ! Rock beats Scissors" } : { isPlayerWinner: true, messageResult: "You WON ! Scissors beats Paper" };
        default:
            throw Error("Something went wrong");
    }
}

function updateCurrentScore(result, scorePara, historyDiv, messageResultRound, playerScore, computerScore) {
    messageResultRound.innerHTML = result.messageResult;
    historyDiv.appendChild(messageResultRound);
    scorePara.textContent = `The score is ${playerScore}-${computerScore}`;
}

function checkWinner(scorePara, playerScore, computerScore) {
    if (playerScore == 5) {
        scorePara.textContent = `You Won ${playerScore}-${computerScore}!`;
        alert(`You Won ${playerScore}-${computerScore}!`);
        return true;
    }
    else if (computerScore == 5) {
        scorePara.textContent = `You Lost ${playerScore}-${computerScore}!`;
        alert(`You Lost ${playerScore}-${computerScore}!`);
        return true;
    }

    return false;
}

function resetGame(scorePara, historyDiv) {
    scorePara.textContent = "Start new game of 5 rounds !"
    scorePara.setAttribute("data-player-score", 0);
    scorePara.setAttribute("data-computer-score", 0);
    historyDiv.textContent = "";
}


const buttons = document.querySelectorAll("button");
buttons.forEach(choice =>
    choice.addEventListener("click", (e) => {
        const result = playRound(e.target.className, getComputerChoice());
        const messageResultRound = document.createElement('p');
        const historyDiv = document.querySelector(".history");
        let scorePara = document.querySelector(".score");
        let playerScore = scorePara.getAttribute("data-player-score");
        let computerScore = scorePara.getAttribute("data-computer-score");

        //Update current score
        if (result.isDraw !== true) {
            if (result.isPlayerWinner) {
                playerScore++;
                scorePara.setAttribute("data-player-score", playerScore);

            }
            else {
                computerScore++;
                scorePara.setAttribute("data-computer-score", computerScore);
            }
        }

        updateCurrentScore(result, scorePara, historyDiv, messageResultRound, playerScore, computerScore);

        if (checkWinner(scorePara, playerScore, computerScore)) {
            resetGame(scorePara, historyDiv)
        }

    })
);



//game();