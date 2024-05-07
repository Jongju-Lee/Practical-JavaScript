let player;
let computer;
let result;

const $playerText = document.querySelector("#player_text");
const $comText = document.querySelector("#com_text");
const $resultText = document.querySelector("#result_text");
const $choiceBtn = document.querySelectorAll(".choice_btns button");

// ###########################
// 기능 추가
// 컴퓨터와 나의 점수를 만들어
// 3 선승제
// 게임이 종료되면 alert 출력하고
// 데이터 초기화
// ###########################

const computerChoice = () => {
  // 랜덤 숫자 생성해서 컴퓨터의 패를 정함
  const randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      computer = "scissors";
      break;
    case 1:
      computer = "rock";
      break;
    case 2:
      computer = "paper";
      break;
  }
  $comText.textContent = `Com : ${computer}`;
};

const checkWinner = () => {
  if (player === computer) {
    return "Draw?";
  }
  if (computer === "scissors") {
    return player === "rock" ? "Win!" : "Lose...";
  } else if (computer === "rock") {
    return player === "paper" ? "Win!" : "Lose...";
  } else if (computer === "paper") {
    return player === "scissors" ? "Win!" : "Lose...";
  }
};

$choiceBtn.forEach((elm) => {
  elm.addEventListener("click", function () {
    player = this.getAttribute("data-value");
    $playerText.textContent = `Player : ${player}`;
    computerChoice();
    // 컴퓨터 숫자 뽑아서 변수 담음
    $resultText.textContent = checkWinner();
  });
});
