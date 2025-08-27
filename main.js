let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice < 0.33) {
        return "rock";
    } else if (computerChoice < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

const rock = document.getElementById("rock");
  rock.addEventListener("click", () => {
    playRound("rock",getComputerChoice())
  });

const paper = document.getElementById("paper");
  paper.addEventListener("click", () => {
    playRound("paper",getComputerChoice())
  });  

const sessior = document.getElementById("sessior");
  sessior.addEventListener("click", () => {
    playRound("scissors",getComputerChoice())
  });  

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}



