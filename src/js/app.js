import smoothscroll from 'smoothscroll-polyfill';

import './modules/slider.js';
import './modules/collapsible.js'
import './modules/btnWindowUp.js'
import './modules/video.js'
import './modules/accordion.js'
import './modules/schedule.js'
import './modules/resultsParticipants.js'
import './modules/timer.js'

smoothscroll.polyfill();

function btnsScroll() {
  const linksScroll = document.querySelectorAll(".linkScroll");
  console.log(linksScroll);

  if (linksScroll.length === 0) return;

  linksScroll.forEach((el) => {
    el.addEventListener("click", (e) => {

      console.log(el)
      e.preventDefault();
      const blockTop = document.querySelector(el.getAttribute("href")).getBoundingClientRect().top;

      console.log(blockTop);

      window.parent.scrollTo({
        top: window.pageYOffset + blockTop,
        behavior: 'smooth'
      })
          
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  btnsScroll();
});
