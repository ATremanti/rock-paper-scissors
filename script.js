let playerSelection = ""
let computerSelection = ""

function computerPlays() {
    let x = Math.floor(Math.random() * 3) + 1
    if (x == 1) {
        computerSelection = "rock"
        return "Rock";
    } else if ( x == 2) {
        computerSelection = "paper"
        return "Paper"
    } else {
        computerSelection = "scissors"
        return "Scissors"
    }
}
console.log(computerPlays())

function playerPlays() {
    x = prompt("Choose between Rock, Paper or Scissors!")
    if (x.toLowerCase() == "rock") {
        playerSelection = "rock"
        return "Rock"
    } else if (x.toLowerCase() == "paper") {
        playerSelection = "paper"
        return "Paper"
    } else if (x.toLowerCase() == "scissor" || x.toLowerCase() == "scissors") {
        playerSelection = "scissors"
        return "Scissors"
    } else {
        return "Please choose only between 'Rock', 'Paper' or 'Scissors'."
    }
 }
console.log(playerPlays())

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
       return "You lose, Paper beats Rock :("
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats Scissors! :)"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats Rock! :)"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose, Scissors beats Paper :("
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose, Rock beats Scissors :("
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats Paper! :)"
    } else {
        return "Draw!"
    }
}
console.log(playRound(playerSelection, computerSelection))