let humanScore = 0;
let computerScore = 0;
let gameOver = false;

//for displaying results of game
const roundResult = document.querySelector(".round-result");
const scoreDisplay = document.querySelector(".score");
const winnerDisplay = document.querySelector(".winner");
const playAgainBtn = document.querySelector("#play-again");

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
//game logic
function playRound(humanChoice, computerChoice) {
  let result_text = "";
  humanChoice = humanChoice.toLowerCase();

  if (gameOver) {
    return;
  }

  if (humanChoice === computerChoice) {
    result_text = `It's a tie! You both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    result_text = `You win! You chose ${humanChoice} which beats the Computer's ${computerChoice}`;
    humanScore++;
  } else {
    result_text = `You lose! The Computer chose ${computerChoice} which beats your ${humanChoice}`;
    computerScore++;
  }
  //for updating DOM
  roundResult.textContent = result_text;
  scoreDisplay.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;

  if (humanScore === 5 || computerScore === 5) {
    gameOver = true;
    winnerDisplay.textContent = humanScore === 5? "🎉 You win the game!": "💻 The computer wins the game!";
    playAgainBtn.style.display= "block";

  }
}

//for starting the game when the user clicks an image
const rock_button = document.querySelector("#rock");
const paper_button = document.querySelector("#paper");
const scissors_button = document.querySelector("#scissors");

rock_button.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
paper_button.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
scissors_button.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

//logic for game-end scenario and play-again button
playAgainBtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    gameOver = false;
    roundResult.textContent = "";
    scoreDisplay.textContent = "Score: You 0 - 0 Computer";
    winnerDisplay.textContent = "";
    playAgainBtn.style.display = "none";
});
