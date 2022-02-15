// console.log("Hello World")

// Keeping the total score
let playerTotal = 0;
let computerTotal = 0;

// Getting the button ids
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

// Keeps track of the number of rounds
let round = 0

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
            break;
    }
}

// Allows for user to make selection by clicking button
function selection () {
    rock.addEventListener("click", () => {
        return gamePlay("rock", computerPlay()) //This takes the user's choice and plays the game
    })

    paper.addEventListener("click", () => {
        return gamePlay("paper", computerPlay())
    })

    scissors.addEventListener("click", () => {
        return gamePlay("scissors", computerPlay())
    })

}


//Create a function that takes two parameters (playerSelection and computerSelection) and return a string that declares the winner.
// playerSelection should be case-insensitive

function gamePlay(playerSelection,computerSelection) {
    // Computer selection is using the random choice from the computer play function
    // Player selection is using the click funtion from selection()

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
    // Adds to the round count and then uses that total as a parameter in roundCount
    round ++
    roundCount(round)
}

// console.log(gamePlay())

function roundCount(round) {
    if (round < 5) {
        document.getElementById("computerResult").innerHTML = computerTotal
        document.getElementById("playerResult").innerHTML = playerTotal
    } else {
        console.log("done")
}
}

function endGame() {

    // rock.removeEventListener("click", () => {
    //     return gamePlay("rock", computerPlay()) //This takes the user's choice and plays the game
    // })

    // paper.removeEventListener("click", () => {
    //     return gamePlay("paper", computerPlay())
    // })

    // scissors.removeEventListener("click", () => {
    //     return gamePlay("scissors", computerPlay())
    // })

    if (playerTotal > computerTotal) {
        console.log(`You win with a score of ${playerTotal} - ${computerTotal}`)
    } else if (computerTotal > playerTotal) {
        console.log(`You lose with a score of ${computerTotal} - ${playerTotal}`)
    }else{
        console.log("It's a Tie!")
    }
}


// Create a new function called game(). Call the playRound function inside that plays a 5 round game and keeps score. 

function game() {

    // document.getElementById("computerResult").innerHTML = computerTotal
    // document.getElementById("playerResult").innerHTML = playerTotal
    
    selection()
    endGame()

    // if (round < 5) {
    //     // selection()
    //     console.log(round)
    // } else {
    //     console.log("done")
    // }
    
    // Sums up the final scores
//     if (playerTotal > computerTotal) {
//         console.log(`You win with a score of ${playerTotal} - ${computerTotal}`)
//     } else if (computerTotal > playerTotal) {
//         console.log(`You lose with a score of ${computerTotal} - ${playerTotal}`)
//     }else{
//         console.log("It's a Tie!")
//     }
// }
// }
}

game()
// selection()
// gamePlay()

