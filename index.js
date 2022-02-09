console.log("Hello World")

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

console.log(computerPlay())

//Create a function that takes two parameters (playerSelection and computerSelection) and return a string that declares the winner.
// playerSelection should be case-insensitive
function gamePlay(playerSelection, computerSelection) {
    computerSelection = computerPlay()
    playerSelection = window.prompt("Choose Rock, Paper or Scissors: ")
    playerSelection = playerSelection.toLowerCase()
    console.log(computerSelection)
    console.log(playerSelection)
}

gamePlay()

// Create a new function called game(). Call the playRound function inside that plays a 5 round game and keeps score. 