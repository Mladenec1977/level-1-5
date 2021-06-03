// @ts-ignore
import * as moment from "moment";

const minus = document.getElementById("minusTime");
const plus = document.getElementById("plusTime");
const start = document.getElementById("startTimer");
const minutes = document.getElementById("startTime");
let startTimer: string = "5:00";

minus.onclick = () => {
  nextTime(-1);
};

plus.onclick = () => {
  nextTime(1);
};

function nextTime(x: number) {
  let res = +minutes.innerHTML + x;
  if (res < 1) {
    res = 1;
  }
  minutes.innerHTML = "" + res;
}

start.onclick = () => {
  document.getElementById("enterTime").hidden = true;
  document.getElementById("workTime").hidden = false;
  startTimer = minutes.innerHTML + ":00";
  goTimer();
};

function goTimer() {
  document.getElementById("nextTime").innerHTML = startTimer;
  if (startTimer === "0:00") {
    return;
  }
  startTimer = moment(startTimer, "m:ss").subtract(1, "seconds").format("m:ss");

  setTimeout(goTimer, 1000);
}
