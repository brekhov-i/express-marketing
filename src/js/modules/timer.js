"use strict";

function timer(date) {
  const timer = document.querySelector("#timer");
  const daysEl = timer.querySelector(".days");
  const daysSpan = daysEl.querySelector(".number");
  const hoursEl = timer.querySelector(".hours");
  const hoursSpan = hoursEl.querySelector(".number");
  const minutesEl = timer.querySelector(".minutes");
  const minutesSpan = minutesEl.querySelector(".number");
  const secondsEl = timer.querySelector(".seconds");
  const secondsSpan = secondsEl.querySelector(".number");
  updateClock(
    daysEl,
    daysSpan,
    hoursEl,
    hoursSpan,
    minutesEl,
    minutesSpan,
    secondsEl,
    secondsSpan
  );
  var timeinterval = setInterval(
    () =>
      updateClock(
        daysEl,
        daysSpan,
        hoursEl,
        hoursSpan,
        minutesEl,
        minutesSpan,
        secondsEl,
        secondsSpan
      ),
    1000
  );

  function updateClock(
    daysEl,
    daysSpan,
    hoursEl,
    hoursSpan,
    minutesEl,
    minutesSpan,
    secondsEl,
    secondsSpan
  ) {
    var t = getTimeRemaining(date);
    if (t.total <= 0) {
      t.days = 0;
      t.hours = 0;
      t.minutes = 0;
      t.seconds = 0;
    }

    if (t.days === 0) {
      daysEl.classList.add("disabled");
    }
    if (t.hours === 0 && t.days === 0) {
      hoursEl.classList.add("disabled");
    }
    if (t.minutes === 0 && t.hours === 0 && t.days === 0) {
      minutesEl.classList.add("disabled");
    }
    if (t.seconds === 0 && t.minutes === 0 && t.hours === 0 && t.days === 0) {
      secondsEl.classList.add("disabled");
    }
    daysSpan.innerHTML = t.days + " .";
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2) + " .";
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2) + " .";
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
}

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days,
    hours,
    minutes,
    seconds,
  };
}

//Запуск таймера
document.addEventListener("DOMContentLoaded", () => {
  const deadline = "March 24 2022 00:00:00 GMT+0300";
  timer(deadline);
});
