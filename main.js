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

start_button.addEventListener("click", function () {
  ready_message.classList.toggle("start");
  condition = 1;
});

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function one_rotation() {
  computer_gu.classList.add("gu");
  await wait(150);
  computer_gu.classList.remove("gu");

  computer_cho.classList.add("cho");
  await wait(150);
  computer_cho.classList.remove("cho");

  computer_pa.classList.add("pa");
  await wait(150);
  computer_pa.classList.remove("pa");
}

// let gu_a = setInterval(function () {
// }, 1000);

// let gu_r = setInterval(function () {
// }, 1000);
// let cho_a = setInterval(function () {
// }, 100);

// let cho_r = setInterval(function () {
// }, 100);
// let pa_a = setInterval(function () {
// }, 100);

// let pa_r = setInterval(function () {
// }, 100);

let roulette;
function start_roulette() {
  roulette = setInterval(function () {
    one_rotation();
  }, 451);
}
function stop_roulette() {
  clearInterval(roulette);
}

// const roulette = setInterval(function () {
//     one_rotation();
//   }, 451);

// for (let i = 0; i < 5; i++) {
//   console.log("実行");
//   rulet();
// }

// while (false) {
//   rulet();
//   // setInterval(function () {
//   //   rulet()
//   // }, )
// }

function Judge(hand) {}

select_gu.addEventListener("click", function () {});
select_cho.addEventListener("click", function () {});
select_pa.addEventListener("click", function () {});
