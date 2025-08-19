let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 2:
            return 'scissors';
        case 1:
            return 'paper';
        default:
            return 'rock';
    }
}

function getHumanChoice() {
    return prompt("rock, paper, or scissors?");
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    result = document.querySelector(".result");
    score = document.querySelector(".scoreboard");
    if (humanChoice == computerChoice) {
        result.textContent = "Ah, we appear to have a tie! I suppose great minds think alike :|";
    } else if ((computerChoice == 'rock' && humanChoice == 'scissors') || 
               (computerChoice == 'paper' && humanChoice == 'rock') ||
               (computerChoice == 'scissors' && humanChoice == 'paper')) {
        result.textContent = "I suppose no one ever taught you that " + computerChoice + " beats " + humanChoice + "!! Pitiful attempt, no mere mortal can defeat me!!";
        computerScore++;
        score.innerHTML = "Computer: " + computerScore + "<br>User: " + humanScore;
    } else {
        result.textContent = "Egads!! You have had a stroke of luck. I hate to admit that " + humanChoice + " beats " + computerChoice + " :(";
        humanScore++;
        score.innerHTML = "Computer: " + computerScore + "<br>User: " + humanScore;
    }

    if (computerScore == 5) {
        summary = document.querySelector(".summary");
        summary.textContent = "I have defeated you by a score of " + computerScore + " to " + humanScore + "!! Can't say I'm surprised :D";
    } 

    if (humanScore == 5) {
        summary = document.querySelector(".summary");
        summary.textContent = "My word!! How can this be? You managed to beat me by a score of " + humanScore + " to " + computerScore + 
                               "!! Don't get cocky, now!! Play me again or you're a big chicken >:("
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent, getComputerChoice());
    });
})


// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         humanChoice = getHumanChoice();
//         computerChoice = getComputerChoice();
//         playRound(humanChoice, computerChoice);
//     }
//     if (humanScore < computerScore) {
//         console.log("I have defeated you by a score of " + computerScore + " to " + humanScore + "!! Can't say I'm surprised :D");
//     } else if (humanScore == computerScore) {
//         console.log("How anticlimactic!! We each have a score of " + humanScore + "!! Dare you to play again >:)");
//     } else {
//         console.log("My word!! How can this be? You managed to beat me by a score of " + humanScore + " to " + computerScore + 
//                     "!! Don't get cocky, now!! Be a man, and play me again >:("); 
//     }
// }
