console.log("Hello, Elliot.");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const result = Math.random();
  let computerMove;
  if (0 < result && result <= 1 / 3) {
    computerMove = "Rock";
  } else if (1 / 3 < result && result <= 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissors";
  }
  return computerMove;
}
function getHumanChoice() {
  let humanMove = prompt("Rock,Paper, or Scissors ?");

  return (
    humanMove.substring(0, 1).toUpperCase() +
    humanMove.substring(1).toLowerCase()
  );
}

function playRound(humanChoice, computerChoice) {
  switch (true) {
    case (humanChoice === "Rock" && computerChoice === "Paper") ||
      (humanChoice === "Scissors" && computerChoice === "Rock") ||
      (humanChoice === "Paper" && computerChoice === "Scissors"):
      computerScore += 1;
      return `You picked: ${humanChoice}. Computer picked: ${computerChoice}. You lose`;

    case (humanChoice === "Scissors" && computerChoice === "Paper") ||
      (humanChoice === "Paper" && computerChoice === "Rock") ||
      (humanChoice === "Rock" && computerChoice === "Scissors"):
      humanScore += 1;
      return `You picked: ${humanChoice}. Computer picked: ${computerChoice}`;
    case humanChoice === computerChoice:
      return "It's a tie. You picked the same moves";
  }
}
function playGame() {
  console.log(playRound(getHumanChoice(), getComputerChoice()));
  console.log(playRound(getHumanChoice(), getComputerChoice()));
  console.log(playRound(getHumanChoice(), getComputerChoice()));
  console.log(playRound(getHumanChoice(), getComputerChoice()));
  console.log(playRound(getHumanChoice(), getComputerChoice()));

  if (humanScore > computerScore) {
    return `You score:${humanScore}.computer score: ${computerScore}. congratulations You win!!`;
  } else {
    return `You score:${humanScore}.computer score: ${computerScore}. Computer wins`;
  }
}
console.log(playGame());
