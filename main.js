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
const GU = "gu";

start_button.addEventListener("click", function () {
  ready_message.classList.remove("ready");
  condition = 1;
});

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function one_rotation() {
  computer_gu.classList.add("gu");
  await wait(100);
  computer_gu.classList.remove("gu");

  computer_cho.classList.add("cho");
  await wait(100);
  computer_cho.classList.remove("cho");

  computer_pa.classList.add("pa");
  await wait(100);
  computer_pa.classList.remove("pa");
}

let roulette;
function start_roulette() {
  roulette = setInterval(function () {
    one_rotation();
  }, 301);
}
function stop_roulette() {
  clearInterval(roulette);
}

let computer_hand;
function judge() {
  if (computer_gu.classList.contains("gu")) {
    computer_hand = 0;
  } else if (computer_cho.classList.contains("cho")) {
    computer_hand = 1;
  } else if (computer_pa.classList.contains("pa")) {
    computer_hand = 2;
  }
  console.log(computer_hand);
}
function inview_computer_hand() {
  if (computer_hand === 0) {
    computer_gu.classList.remove("gu");
    computer_gu.classList.add("gu");
  } else if (computer_hand === 1) {
    computer_cho.classList.remove("cho");
    computer_cho.classList.add("cho");
  } else if (computer_hand === 2) {
    computer_pa.classList.remove("pa");
    computer_pa.classList.add("pa");
  }
  console.log("表示");
}

async function stop_routine() {
  judge();
  stop_roulette();
  await wait(100);
  inview_computer_hand();
}

select_gu.addEventListener("click", function () {});
select_cho.addEventListener("click", function () {});
select_pa.addEventListener("click", function () {});
