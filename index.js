const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let winner;

function getComputerChoice(){
    const computerChoice = choices[Math.floor(Math.random()*choices.length)];
    return computerChoice;  
};


function playRound(computerChoice, playerChoice) {
    console.log(`Computer choice: ${computerChoice}, player choice: ${playerChoice}`);
    if (computerChoice === playerChoice) {
        console.log(`Draw`);
        
    }
        else if (
         (playerChoice === "rock" && computerChoice === "scissors") ||
         (playerChoice === "paper" && computerChoice === "rock") || 
         (playerChoice === "scissors" && computerChoice === "paper")) {
            console.log(`Win`);
            playerScore = playerScore + 1;
            rounds++;
        }

        else {
            console.log(`Lose`);
            computerScore = computerScore + 1;
            rounds++;
        }

    console.log(`Computer score ${computerScore}`);
    console.log(`Player score ${playerScore}`);
}

function game() {
    for (rounds = 0; rounds < 5;){
        const computerChoice = getComputerChoice();
        const playerChoice = (window.prompt("enter your choice")).toLowerCase();
        console.log(playRound(computerChoice, playerChoice));
    }
    if (playerScore > computerScore){
        winner = "player";
    }
    else {
        winner = "computer";
    }
    console.log(`The game has ended and the winner is the ${winner}`)
}

console.log(game());

