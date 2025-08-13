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
    return prompt("rock, paper, or scissors?")
}