const GESTURES = ["rock", "paper", "scissors"];
const PLAYER = 1;
const TIE = 0;
const BOT = -1;

class Counter {
    constructor(playerScore = 0, botScore = 0) {
        this.playerScore = playerScore;
        this.botScore = botScore;
        this.lastWinner = "";
        this.lastText = "";
    }

    decideRound(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            this.lastWinner = TIE;
            this.lastText = `It's a tie! You both chose ${playerSelection}.`;
        }
        else if (playerSelection == "rock" && computerSelection == "scissors" ||
            playerSelection == "paper" && computerSelection == "rock" ||
            playerSelection == "scissors" && computerSelection == "paper") {
            this.lastWinner = PLAYER;
            this.playerScore++;
            this.lastText = `You win, ${playerSelection} beats ${computerSelection}!`;
        }
        else {
            this.lastWinner = BOT;
            this.botScore++;
            this.lastText = `You lose, ${playerSelection} is beaten by ${computerSelection}!`;
        }
        return {
            winner: this.lastWinner,
            text: this.lastText
        };
    }

    restart() {
        this.playerScore = 0;
        this.botScore = 0;
        this.lastWinner = "";
        this.lastText = "";
    }
}

function getRandomINt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    switch(getRandomINt(3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function game() {
    const buttons = document.querySelectorAll("button");
    let result = new Counter();
    let scoreboard = document.querySelector(".score .counter");
    let roundResult = document.querySelector(".score .round-result");
    let gameResult = document.querySelector(".score .game-result");

    buttons.forEach(button => button.addEventListener('click', (event) => {
        let playerChoice = button.value;
        result.decideRound(playerChoice, computerPlay());

        scoreboard.textContent = `YOU - ${result.playerScore} : ${result.botScore} - PC`;    
        roundResult.textContent = `${result.lastText}`;
        gameResult.textContent = "";
        
        if (result.playerScore > 4) {
            gameResult.textContent = `You were the first to 5! Congratulations!`;
            result.restart();
        }
        if (result.botScore > 4) {
            gameResult.textContent = `The computer was the first to 5! Try again.`;
            result.restart();
        }
        }
    ));
}

game();