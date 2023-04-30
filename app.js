function item(i) {
    switch(i) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
    return;
}

let computerWins = 0, userWins = 0;
while(computerWins < 5 && userWins < 5) {
    const choice = Number(prompt("Rock, paper or scissors? (1, 2 or 3)"));
    const computerChoice = Math.floor(Math.random() * 3) + 1;
    if(choice == computerChoice) {
        alert(`It's a draw, computer chose ${item(computerChoice)}`);
    }
    else if((choice == 1 && computerChoice == 2) || (choice == 2 && computerChoice == 3) || (choice == 3 && computerChoice == 1)) {
        alert(`You lost, ${item(computerChoice)} beats ${item(choice)}`);
        computerWins++;
    }
    else {
        alert(`You won, ${item(choice)} beats ${item(computerChoice)}`);
        userWins++;
    }
}

if(computerWins == 5) {
    alert("Computer won!");
}
else if(userWins == 5) {
    alert("You won!");
}