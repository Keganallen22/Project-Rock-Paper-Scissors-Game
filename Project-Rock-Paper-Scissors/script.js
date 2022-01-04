//Global Variables 
let preliminarResult;


// 5 rounds game
function game() {
    let i;
    let finalResult = 0;
    for(i=0; i<5; i++) {
        let playerSelection =  prompt("Write paper, rock, or scissors");
        let computerSelection = computerPlay();
        alert(playRound(playerSelection, computerSelection));
        finalResult = finalResult + preliminarResult;
    }
             if (finalResult >= 1) {
                alert("You Win the Game");
    }
            else if(finalResult == 0) {
             alert("You draw the game!");
    }
            else{alert("You lose the game");}

}

function computerPlay () {
        randomNumber(1, 3);
    function randomNumber(min, max) {
        R0 = Math.floor(Math.random() * (max - min + 1) + min);
    }
    if (R0 == 1){
    return "rock";
    }
    else if(R0 == 2) {
    return "paper";
    }
    else{return "scissors";}
   
}
//1 round game
function playRound (playerSelection, computerSelection) {
preliminarResult = 0;
    //Winner configuration
    if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock" ) {
    preliminarResult = 1;
        return "You Win This Round! Paper Beats Rock";

    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection === "scissors" ) {
    preliminarResult = 1;
        return "You Win This Round! Rock Beats Scissors";

    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "paper" ) {
    preliminarResult = 1;
        return "You Win This Round! Scissors Beats Paper";

    }

    //Loser Configuration
    else if(playerSelection.toLowerCase() === "paper" && computerSelection === "scissors" ) {
    preliminarResult = -1;
        return "You Lose This Round! Scissors Beats Paper";

    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection === "paper" ) {
    preliminarResult = -1;
        return "You Lose This Round! Rock Beats Paper";

    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "rock" ) {
    preliminarResult = -1;
        return "You Lose This Round! Rock Beats Scissors";

    }

    //Drow Configuration
    else if(playerSelection.toLowerCase() === "paper" && computerSelection === "paper" ) {
        return "Great Minds Think Alike! Again Please";

    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection === "rock" ) {
        return "Great Minds Think Alike! Again Please";

    }
    else if(playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors" ) {
        return "Great Minds Think Alike! Again Please";

    }
    else{return "Something Was Wrong";}

   
}