let condition = 0;
const ready_message = document.getElementById("ready_message");
const start_button = document.getElementById("start");

const computer_gu = document.getElementById("computer_gu");
const computer_cho = document.getElementById("computer_cho");
const computer_pa = document.getElementById("computer_pa");

const select_gu = document.getElementById("answer_select_gu");
const select_cho = document.getElementById("answer_select_cho");
const select_pa = document.getElementById("answer_select_pa");

const result_win = document.getElementById("result_win");
const result_lose = document.getElementById("result_lose");
const result_draw = document.getElementById("result_draw");
const error_message = document.getElementById("error_message");

const Started = "started";
const Gu = "gu";
const Choki = "cho";
const Pa = "pa";
const Win = "win";
const Lose = "lose";
const Draw = "draw";
const Error_messe = "error";

function Add_Started() {
  ready_message.classList.add(Started);
}
function Remove_Started() {
  ready_message.classList.remove(Started);
}

function Add_Gu() {
  computer_gu.classList.add(Gu);
}
function Remove_Gu() {
  computer_gu.classList.remove(Gu);
}
function Add_Choki() {
  computer_cho.classList.add(Choki);
}
function Remove_Choki() {
  computer_cho.classList.remove(Choki);
}
function Add_Pa() {
  computer_pa.classList.add(Pa);
}
function Remove_Pa() {
  computer_pa.classList.remove(Pa);
}
function Contain_Gu() {
  return computer_gu.classList.contains(Gu);
}
function Contain_Choki() {
  return computer_cho.classList.contains(Choki);
}
function Contain_Pa() {
  return computer_pa.classList.contains(Pa);
}

function Add_Win() {
  result_win.classList.add(Win);
}
function Remove_Win() {
  result_win.classList.remove(Win);
}
function Add_Lose() {
  result_lose.classList.add(Lose);
}
function Remove_Lose() {
  result_lose.classList.remove(Lose);
}
function Add_Draw() {
  result_draw.classList.add(Draw);
}
function Remove_Draw() {
  result_draw.classList.remove(Draw);
}
function Add_Error() {
  error_message.classList.add(Error_messe);
}
function Remove_Error() {
  error_message.classList.remove(Error_messe);
}
function Start_Add_disabled() {
  start_button.disabled = "disabled";
}
function Start_Remove_Disabled() {
  start_button.disabled = "";
}
function End_Add_disabled_Gu() {
  select_gu.disabled = "disabled";
}
function End_Add_disabled_Choki() {
  select_cho.disabled = "disabled";
}
function End_Add_disabled_Pa() {
  select_pa.disabled = "disabled";
}
function End_Remove_Disabled_Gu() {
  select_gu.disabled = "";
}
function End_Remove_disabled_Choki() {
  select_cho.disabled = "";
}
function End_Remove_disabled_Pa() {
  select_pa.disabled = "";
}

start_button.addEventListener("click", function () {
  Add_Started();
  condition = 1;
});

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function one_rotation() {
  Add_Gu();
  await wait(70);
  Remove_Gu();

  Add_Choki();
  await wait(70);
  Remove_Choki();

  Add_Pa();
  await wait(70);
  Remove_Pa();
}

let rouletteID;
function start_roulette() {
  rouletteID = setInterval(function () {
    one_rotation();
  }, 211);
  Remove_Win();
  Remove_Lose();
  Remove_Draw();
  Remove_Error();
  // start_button.classList.remove("waiting");
  Start_Add_disabled();
  End_Remove_Disabled_Gu();
  End_Remove_disabled_Choki();
  End_Remove_disabled_Pa();
}
function stop_roulette() {
  clearInterval(rouletteID);
  // start_button.classList.add("waiting");
  Start_Remove_Disabled();
}

// let computer_hand;
function detect() {
  if (Contain_Gu()) {
    return 0;
  } else if (Contain_Choki()) {
    return 1;
  } else if (Contain_Pa()) {
    return 2;
  }
  // console.log(computer_hand);
}
function inview_computer_hand(computer_hand) {
  Remove_Gu();
  Remove_Choki();
  Remove_Pa();
  if (computer_hand === 0) {
    Add_Gu();
  } else if (computer_hand === 1) {
    Add_Choki();
  } else if (computer_hand === 2) {
    Add_Pa();
  }
  console.log("com手を表示");
}

function judge(select_hand) {
  if (
    (computer_hand === 0 && select_hand === 2) ||
    (computer_hand === 1 && select_hand === 0) ||
    (computer_hand === 2 && select_hand === 1)
  ) {
    return 0;
  } else if (
    (computer_hand === 0 && select_hand === 1) ||
    (computer_hand === 1 && select_hand === 2) ||
    (computer_hand === 2 && select_hand === 0)
  ) {
    return 1;
  } else if (
    (computer_hand === 0 && select_hand === 0) ||
    (computer_hand === 1 && select_hand === 1) ||
    (computer_hand === 2 && select_hand === 2)
  ) {
    return 2;
  } else {
    Add_Error();
  }
  // console.log(judge_result);
}
function inview_result(judge_result) {
  if (judge_result === 0) {
    Add_Win();
  } else if (judge_result === 1) {
    Add_Lose();
  } else if (judge_result === 2) {
    Add_Draw();
  }
  console.log("勝敗を表示");
}
function Disable_Others(player_hand) {
  if (player_hand === 0) {
    End_Add_disabled_Choki();
    End_Add_disabled_Pa();
  } else if (player_hand === 1) {
    End_Add_disabled_Gu();
    End_Add_disabled_Pa();
  } else if (player_hand === 2) {
    End_Add_disabled_Gu();
    End_Add_disabled_Choki();
  }
}

async function stop_routine() {
  computer_hand = detect();
  console.log(computer_hand);
  stop_roulette();
  await wait(100);
  inview_computer_hand(computer_hand);
  console.log("ストップルーティーン終了");
}

function jyanken_judge(player_hand) {
  stop_routine();
  Disable_Others(player_hand);
  const judge_result = judge(player_hand);
  console.log(judge_result);
  inview_result(judge_result);
}

select_gu.addEventListener("click", function () {});
select_cho.addEventListener("click", function () {});
select_pa.addEventListener("click", function () {});
