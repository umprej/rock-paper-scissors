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

function getPlayerInput() {
    let input = window.prompt("What will you play next?");
    input = "rock";
    return toString(input);
}

function decideRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `It's a tie! You both chose ${playerSelection}.`;
    }

    if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }

    return `You lose! ${playerSelection} is beaten by ${computerSelection}.`;
}

function playRound() {
    let player_move = getPlayerInput();
    let computer_move = computerPlay();
    return decideRound(player_move, computer_move);
}

function game() {
    for (let i = 0; i < 5; i++) {
        let round_result = playRound();
        console.log(round_result);
    }
}

game();