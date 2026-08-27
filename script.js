let humanScore = 0;
let computerScore = 0;
const rpsResult = document.querySelector(".rpsResult");
const score = document.querySelector(".score");
const finalResult = document.querySelector(".finalResult");

function refreshScore() {
  if (humanScore === 5) {
    document.body.replaceChildren(finalResult);
    finalResult.textContent = "Human win";
  } else if (computerScore === 5) {
    document.body.replaceChildren(finalResult);
    finalResult.textContent = "Computer win";
  } else {
    score.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
  }
}

function getComputerChoice() {
  let compChoice;
  const num = Math.floor(Math.random() * 3);
  if (num == 0) {
    compChoice = "rock";
  } else if (num == 1) {
    compChoice = "paper";
  } else {
    compChoice = "scissors";
  }
  return compChoice;
}

function playRound(humanChoice, computerChoice) {
  const choices = `${humanChoice},${computerChoice}`;

  switch (choices) {
    case "rock,scissors":
    case "paper,rock":
    case "scissors,paper":
      rpsResult.textContent = "1P for Human";
      humanScore++; // 人間に１点
      refreshScore();

      return;
    case "scissors,rock":
    case "rock,paper":
    case "paper,scissors":
      rpsResult.textContent = "1P for Computer";
      computerScore++; // コンピュータに１点
      refreshScore();

      return;
    default:
      rpsResult.textContent = "draw";
      return; // あいこ（同じ手を出した場合）
  }
} //array使わないといけないかと思ったが、実はstringに２つの情報をまとめればよかった。

/*
if (humanScore > computerScore) console.log("Human wins");
else if (humanScore < computerScore) console.log("Computer wins");
else console.log("draw");
*/
refreshScore();

document.addEventListener("click", (event) => {
  if (event.target instanceof HTMLButtonElement) {
    playRound(event.target.textContent, getComputerChoice());
  }
});
