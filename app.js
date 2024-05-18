let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

const drawGame = () => {
  //   console.log("Game was Draw");
  msg.innerText = "Game was Draw. PLAY AGAIN👍🤞";
  msg.style.backgroundColor = "#020122";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // console.log("YOU WIN");
    userScore++;
    userScorePara.innerText = userScore;
    userScorePara.style.color = "green";
    msg.innerText = `YOU WIN! Your ${userChoice} beats ${compChoice}🙌🙌`;
    msg.style.backgroundColor = "green";
  } else {
    // console.log("YOU LOSE");
    compScore++;
    compScorePara.innerText = compScore;
    compScorePara.style.color = "red";
    msg.innerText = `YOU LOSE. ${compChoice} beats your  ${userChoice} 😱🫣`;
    msg.style.backgroundColor = "red";
    msg.style.color = "#fc9e4f";
  }
};

const playGame = (userChoice) => {
  console.log("User Choice = ", userChoice);
  //   Generate computer choice -> modular
  const compChoice = genCompChoice();
  console.log("Comp Choice = ", compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked, ", userChoice);
    playGame(userChoice);
  });
});
