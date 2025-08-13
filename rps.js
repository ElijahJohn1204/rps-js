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
    if (humanChoice == computerChoice) {
        console.log("Ah, we appear to have a tie! I suppose great minds think alike :|");
    } else if ((computerChoice == 'rock' && humanChoice == 'scissors') || 
               (computerChoice == 'paper' && humanChoice == 'rock') ||
               (computerChoice == 'scissors' && humanChoice == 'paper')) {
        console.log("I suppose no one ever taught you that " + computerChoice + " beats " + humanChoice + "!! Pitiful attempt, no mere mortal can defeat me!!");
        computerScore++;
    } else {
        console.log("Egads!! You have had a stroke of luck. I hate to admit that " + humanChoice + " beats " + computerChoice + "?? Bet you won't play me again!")
        humanScore++;
    }
}
