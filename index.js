const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let winner;

// random computer choice
function getComputerChoice(){
    const computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;  
};

const gameTab = document.querySelector("#gameTab");
const scoreDiv = document.querySelector("#scoreDiv");
const startGameDiv = document.querySelector("#startGameDiv");
let choiceDiv;
let resultDiv;
let winnerDiv;
let buttonsClickable;

//game
function playRound(computerChoice, playerChoice) {
    if (buttonsClickable === false) return;
    console.log(`Computer choice: ${computerChoice}, player choice: ${playerChoice}`);

    if (resultDiv) {
        gameTab.removeChild(resultDiv);
    }

    if (choiceDiv) {
        gameTab.removeChild(choiceDiv);
    }

    resultDiv = document.createElement('div');
    resultDiv.style.textAlign = "center";

    choiceDiv = document.createElement('div');
    choiceDiv.textContent = `Player| ${playerChoice}  vs  ${computerChoice} |Computer`;


    if (computerChoice === playerChoice) {
        console.log(`Draw`);
        resultDiv.textContent = "Draw";
    }
        else if (
         (playerChoice === "rock" && computerChoice === "scissors") ||
         (playerChoice === "paper" && computerChoice === "rock") || 
         (playerChoice === "scissors" && computerChoice === "paper")) {
            console.log(`Win`);
            resultDiv.style.color = "green";
            resultDiv.textContent = "Win";
            playerScore = playerScore + 1;
        }

        else {
            console.log(`Lose`);
            resultDiv.style.color = "red";
            resultDiv.textContent = "Lose";
            computerScore = computerScore + 1;
        }

    scoreDiv.textContent = `Score: ${playerScore} - ${computerScore}`;
        
    console.log(`Computer score ${computerScore}`);
    console.log(`Player score ${playerScore}`);

    gameTab.appendChild(choiceDiv);
    gameTab.appendChild(resultDiv);

    // win message
    if (playerScore === 5 || computerScore === 5) {
        winner = playerScore === 5 ? "player" : "computer";
        console.log("Game Over. Winner is the " + winner);

        winnerDiv = document.createElement('div');
        winnerDiv.textContent = `The ${winner} has won the game`;
        winnerDiv.style.textAlign = "center";
        gameTab.appendChild(winnerDiv);

        const restartBtn = document.createElement('button');
        restartBtn.textContent = "Restart"
        restartBtn.style.textAlign = "center";
        restartBtn.addEventListener('click', restartGame);
        gameTab.appendChild(restartBtn);

        buttonsClickable = false;

    }
}

//restart game function
function restartGame() {
    playerScore = 0;
    computerScore = 0;
    scoreDiv.textContent = `Score: ${playerScore} - ${computerScore}`;
    winner = null;
    buttonsClickable = true;

    if (resultDiv) {
        gameTab.removeChild(resultDiv);
        resultDiv = null;
    }

    if (choiceDiv) {
        gameTab.removeChild(choiceDiv);
        choiceDiv = null;
    }

    if (winnerDiv) {
        gameTab.removeChild(winnerDiv);
        winnerDiv = null;
    }

    restartBtn = document.querySelector('#gameTab > button')
    if (restartBtn) {
        gameTab.removeChild(restartBtn);
    }
}

// button click event
function buttonClick(event) {
    const playerChoice = event.target.textContent.toLowerCase();
    const computerChoice = getComputerChoice();
    console.log(playRound(computerChoice, playerChoice));
    if (startGameDiv && startGameDiv.parentNode) {
        startGameDiv.parentNode.removeChild(startGameDiv);
    }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const buttons = [rockBtn, paperBtn, scissorsBtn];

buttons.forEach(button => {
    button.addEventListener('click', buttonClick);
})

