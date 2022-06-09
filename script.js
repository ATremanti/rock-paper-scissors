let playerSelection = ""
let computerSelection = ""
let yourScore = 0
let computerScore = 0

const rockB = document.querySelector('#rock');
rockB.addEventListener('click', () => {
    playerSelection = "rock";
    const results = document.querySelector('.displayRoundResults');
    results.textContent = playRound();
    checkWinner();
    rockB.classList.add('pressed');
});

const paperB = document.querySelector('#paper');
paperB.addEventListener('click', () => {
    playerSelection = "paper";
    const results = document.querySelector('.displayRoundResults');
    results.textContent = playRound();
    checkWinner();
    paperB.classList.add('pressed');
});

const scissorsB = document.querySelector('#scissors');
scissorsB.addEventListener('click', () => {
    playerSelection = "scissors";
    const results = document.querySelector('.displayRoundResults');
    results.textContent = playRound();
    checkWinner();
    scissorsB.classList.add('pressed');
})

const buttons = document.querySelectorAll('.rps');
buttons.forEach(button => button.addEventListener('transitionend', removePressed));

function removePressed(e) {
    if(e.propertyName !== 'transform') 
        return;
        this.classList.remove('pressed');
    
}

function computerPlays() {
    let x = Math.floor(Math.random() * 3) + 1
    if (x == 1) {
        computerSelection = "rock"
        return;
    } else if (x == 2) {
        computerSelection = "paper"
        return;
    } else {
        computerSelection = "scissors"
        return;
    }
}

function playRound() {
    const pscore = document.querySelector('.displayPlayerScore');
    pscore.textContent = `Your score: ${yourScore}`;
    const cscore = document.querySelector('.displayComScore');
    cscore.textContent = `Computer score: ${computerScore}`;
    
    computerPlays();

    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++
        cscore.textContent = `Computer score: ${computerScore}`;
        return `The computer chose ${computerSelection}. You lose, paper beats rock`;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        yourScore++
        pscore.textContent = `Your score: ${yourScore}`;
        return `The computer chose ${computerSelection}. You win! Rock beats scissors!`;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        yourScore++
        pscore.textContent = `Your score: ${yourScore}`;
        return `The computer chose ${computerSelection}. You win! Paper beats rock!`;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++
        cscore.textContent = `Computer score: ${computerScore}`;
        return `The computer chose ${computerSelection}. You lose, scissors beats paper`;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++
        cscore.textContent = `Computer score: ${computerScore}`;
        return `The computer chose ${computerSelection}. You lose, rock beats scissors`;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        yourScore++
        pscore.textContent = `Your score: ${yourScore}`;
        return `The computer chose ${computerSelection}. You win! Scissors beats paper!`
    } else {
        return "Draw!"
    }
}

function checkWinner () {
    const gameOver = document.querySelector('.displayGameOver');
    if (yourScore === 5) {
        gameOver.textContent = "Congratulations! You won! Refresh the page to play again :)";
        buttons.forEach(button => button.disabled = true);
        
    } else if (computerScore === 5) {
        gameOver.textContent = "The computer won! Refresh the page to play again :("
        buttons.forEach(button => button.disabled = true);
    }
}