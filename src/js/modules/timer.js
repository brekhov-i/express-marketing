/**
 * 
 * Name Plugins: Timer
 *  
 */

function timer(date) {

  const timer = document.querySelectorAll('#timer');

  timer.forEach(el => {
    const daysEl = el.querySelector(".days");
    const daysSpan = daysEl.querySelector("span");
    const hoursEl = el.querySelector('.hours');
    const hoursSpan = hoursEl.querySelector("span");
    const minutesEl = el.querySelector('.minutes');
    const minutesSpan = minutesEl.querySelector("span");
    updateClock(daysEl, daysSpan, hoursEl, hoursSpan, minutesEl, minutesSpan);
    var timeinterval = setInterval(updateClock(daysEl, daysSpan, hoursEl, hoursSpan, minutesEl, minutesSpan), 1000);
  })

  function updateClock(daysEl, daysSpan, hoursEl, hoursSpan, minutesEl, minutesSpan) {
    var t = getTimeRemaining(date);
    if(t.total <= 0) {
      t.days = 0;
      t.hours = 0;
      t.minutes = 0;
    }
    if (t.days === 0) {
      daysEl.classList.add('disabled');
    }
    if (t.hours === 0 && t.days===0) {
      hoursEl.classList.add('disabled');
    }
    if (t.minutes === 0 && t.hours === 0 && t.days===0) {
      minutesEl.classList.add('disabled');
    }
    daysSpan.innerHTML = t.days + " .";
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2) +  " .";
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

}

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
  };
}

//Запуск таймера

const deadline="January 19 2022 11:48:00 GMT+0300";
timer(deadline);