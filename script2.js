
    let userScore = 0;
    let computerScore = 0;

    function play(userChoice) {
      const choices = ["rock", "paper", "scissors"];
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      document.getElementById("userPick").innerText = userChoice;
      document.getElementById("computerPick").innerText = computerChoice;

      let resultText = "";
      if (userChoice === computerChoice) {
        resultText = "It's a Draw!";
      } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
        userScore++;
        resultText = "You Win!";
      } else {
        computerScore++;
        resultText = "Computer Wins!";
      }

      document.getElementById("userScore").innerText = userScore;
      document.getElementById("computerScore").innerText = computerScore;
      document.getElementById("result").innerText = resultText;
      document.getElementById("details").innerText = "Computer picked: " + computerChoice;
    }

    function resetGame() {
      userScore = 0;
      computerScore = 0;
      document.getElementById("userScore").innerText = "0";
      document.getElementById("computerScore").innerText = "0";
      document.getElementById("userPick").innerText = "-";
      document.getElementById("computerPick").innerText = "-";
      document.getElementById("result").innerText = "Start playing!";
      document.getElementById("details").innerText = "";
    }
