function playGame() {
  function getComputerChoice() {
    let c_choice;
    const num = Math.floor(Math.random() * 3);
    if (num == 0) {
      c_choice = "rock";
    } else if (num == 1) {
      c_choice = "paper";
    } else {
      c_choice = "scissors";
    }
    return c_choice;
  }

  function getHumanChoice() {
    while (true) {
      const str = prompt("gimme your choice").toLowerCase(); //.toLowerCase()の使い方に注意。()には何も入らない
      if (str === "rock" || str === "paper" || str === "scissors") {
        return str;
      }
      console.log("invalid");
    }
  }

  function playRound(humanChoice, computerChoice) {
    const choices = `${humanChoice},${computerChoice}`;

    switch (choices) {
      case "rock,scissors":
      case "paper,rock":
      case "scissors,paper":
        console.log("1P for Human");
        humanScore++; // 人間に１点
        return;
      case "scissors,rock":
      case "rock,paper":
      case "paper,scissors":
        console.log("1P for Computer");
        computerScore++; // コンピュータに１点
        return;
      default:
        console.log("draw");
        return; // あいこ（同じ手を出した場合）
    }
  } //array使わないといけないかと思ったが、実はstringに２つの情報をまとめればよかった。

  let humanScore = 0;
  let computerScore = 0;

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) console.log("Human wins");
  else if (humanScore < computerScore) console.log("Computer wins");
  else console.log("draw");
}

playGame();
