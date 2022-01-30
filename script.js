const GESTURES = ["rock", "paper", "scissors"];
const PLAYER = 1;
const TIE = 0;
const BOT = -1;

class Counter {
    constructor(playerScore = 0, botScore = 0) {
        this.playerScore = playerScore;
        this.botScore = botScore;
    }

    adjust(roundWinner) {
        if (roundWinner == PLAYER) this.playerScore++;
        else if (roundWinner == BOT) this.botScore++;
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

function decideRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return {
            winner: TIE,
            text: `It's a tie! You both chose ${playerSelection}.`
        };
    }

    if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
        return {
            winner: PLAYER,
            text: `You win! ${playerSelection} beats ${computerSelection}.`
        };
    }

    return {
        winner: BOT,
        text: `You lose! ${playerSelection} is beaten by ${computerSelection}.`
    };
}

function playRound(playerChoice) {
    let player_move = playerChoice;
    let computer_move = computerPlay();
    return decideRound(player_move, computer_move);
}

function game() {
    console.log("hii");
    
    const buttons = document.querySelectorAll("button");
    let result = new Counter();

    buttons.forEach(button => button.addEventListener('click', (event) => {
        result.adjust(playRound(button.value).winner);
        console.log(result);    
        }
    ));
}

game();