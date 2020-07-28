function setValue(elm, value) {
  elm.innerHTML = value < 10 ? `0${value}` : value;
  const parent = elm.parentElement;
  if (value <= 0) {
    if (parent.classList.contains("opacity-50")) {
      return;
    }

    parent.classList.add("opacity-50");
  } else if (parent.classList.contains("opacity-50")) {
    parent.classList.remove("opacity-50");
  }
}

function setCounter(endDate) {
  const monthsElm = document.getElementById("months");
  const daysElm = document.getElementById("days");
  const hoursElm = document.getElementById("hours");
  const minutesElm = document.getElementById("minutes");
  const secondsElm = document.getElementById("seconds");

  const startDate = new Date();
  const diff = endDate.getTime() - startDate.getTime();

  let msec = diff;
  const MM = Math.floor(msec / (1000 * 60 * 60 * 24 * 30.5));
  msec -= MM * 1000 * 60 * 60 * 24 * 30.5;
  const dd = Math.floor(msec / (1000 * 60 * 60 * 24));
  msec -= dd * 1000 * 60 * 60 * 24;
  const hh = Math.floor(msec / 1000 / 60 / 60);
  msec -= hh * 1000 * 60 * 60;
  const mm = Math.floor(msec / 1000 / 60);
  msec -= mm * 1000 * 60;
  const ss = Math.floor(msec / 1000);
  msec -= ss * 1000;

  setValue(monthsElm, MM);
  setValue(daysElm, dd);
  setValue(hoursElm, hh);
  setValue(minutesElm, mm);
  setValue(secondsElm, ss);
}

function init() {
  const targetElm = document.getElementById("target");

  const endDate = new Date();
  endDate.setDate(29);
  endDate.setMonth(8);

  targetElm.innerHTML = endDate.toString();
  setInterval(function () {
    setCounter(endDate);
  }, 1000);
}

init();