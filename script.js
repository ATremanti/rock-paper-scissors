let playerSelection = ""
let computerSelection = ""
let yourScore = 0
let computerScore = 0

function playerPlays() {
    let x = prompt("Choose between Rock, Paper or Scissors!")
    if (x.toLowerCase() == "rock") {
        playerSelection = "rock"
        return "You chose Rock"
    } else if (x.toLowerCase() == "paper") {
        playerSelection = "paper"
        return "You chose Paper"
    } else if (x.toLowerCase() == "scissors") {
        playerSelection = "scissors"
        return "You chose Scissors"
    } else {
        return "Please choose only between 'Rock', 'Paper' or 'Scissors'."
    }
}

function computerPlays() {
    let x = Math.floor(Math.random() * 3) + 1
    if (x == 1) {
        computerSelection = "rock"
        return "The computer chose Rock";
    } else if (x == 2) {
        computerSelection = "paper"
        return "The computer chose Paper"
    } else {
        computerSelection = "scissors"
        return "The computer chose Scissors"
    }
}

function playRound() {

    console.log(playerPlays())
    console.log(computerPlays())

    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++
        return "You lose, Paper beats Rock :("
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        yourScore++
        return "You win! Rock beats Scissors! :)"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        yourScore++
        return "You win! Paper beats Rock! :)"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++
        return "You lose, Scissors beats Paper :("
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++
        return "You lose, Rock beats Scissors :("
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        yourScore++
        return "You win! Scissors beats Paper! :)"
    } else {
        return "Draw!"
    }
}

function bestOfFive() {
    do {
        console.log(playRound(playerSelection, computerSelection))
        console.log(`Your score: ${yourScore}`)
        console.log(`Computer score: ${computerScore}`)
    } while (yourScore < 3 && computerScore < 3)
    if (yourScore == 3) {
        console.log("GGs :)")
    } else if (computerScore == 3) {
        console.log("GGs :(")
    }
}
bestOfFive()