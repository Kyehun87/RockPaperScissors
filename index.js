// console.log("Hello World")

// Create a function that will randomly return rock/paper/scissors called computerPlay
function computerPlay() {
    // let computer = Math.floor(Math.random() * 3) + 1
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            return "rock"
            break;
        case 2:
            return "paper"
            break;
        case 3:
            return "scissors"
    }
}

// console.log(computerPlay())

//Create a function that takes two parameters (playerSelection and computerSelection) and return a string that declares the winner.
// playerSelection should be case-insensitive

// Keeping the total score
let playerTotal = 0;
let computerTotal = 0;

function gamePlay(playerSelection, computerSelection) {
    // Computer selection is using the random choice from the computer play function
    computerSelection = computerPlay()
    // Prompts the user to pick rock, paper or scissors
    playerSelection = window.prompt("Choose Rock, Paper or Scissors: ")
    // making the selection case insensitive
    playerSelection = playerSelection.toLowerCase()
    // Logic to go through the game
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerTotal ++
            console.log ("You lose! Paper beats rock!")
        } else if (computerSelection === "scissors") {
            playerTotal ++;
            console.log ("You win! Rock beats scissors!")
        } else {
            console.log ("Tie!")
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerTotal ++;
            console.log("You win! Paper beats rock!")
        } else if (computerSelection === "scissors") {
            computerTotal ++
            console.log ("You lose! Scissors beat paper!")
        } else {
            console.log ("Tie!")
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerTotal ++;
            console.log ("You win! Scissors beats paper!")
        } else if (computerSelection === "rock") {
            computerTotal ++
            console.log ("You lose! Rock beats scissors!")
        } else {
            console.log ("Tie!")
        }
    } else {
        // This is the return if the user does not choose a correct choice
        console.log("The only choices are ROCK, PAPER, OR SCISSORS!!")
        return gamePlay()
    }
    // Logs out the totals after each game
    console.log (`Player Total: ${playerTotal}`)
    console.log (`Computer Total: ${computerTotal}`)
}

// console.log(gamePlay())

// Create a new function called game(). Call the playRound function inside that plays a 5 round game and keeps score. 

function game() {
    // plays the game 5 times
    for (let i = 0; i < 5; i++) {
        // playerTotal = 0
       gamePlay()
        
        // rockconsole.log(computerTotal)
    }
    // Sums up the final scores
    if (playerTotal > computerTotal) {
        console.log(`You win with a score of ${playerTotal} - ${computerTotal}`)
    } else if (computerTotal > playerTotal) {
        console.log(`You lose with a score of ${computerTotal} - ${playerTotal}`)
    }else{
        console.log("It's a Tie!")
    }
}

game()