const dayEl = document.getElementById("day")
const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minute")
const secondEl = document.getElementById("second")


const newYearTime = new Date("Jan 1, 2024 00:00:00").getTime();


updateCountDown();

function updateCountDown(){
    const now = new Date().getTime();
    const gap = newYearTime - now;

   const second = 1000;
   const minute = 60 * second;
   const hour = 60 * minute;
   const day = 24 * hour;

   const d = Math.floor(gap/day);
   const h = Math.floor((gap % day)/hour);
   const m = Math.floor((gap % hour)/minute);
  const s = Math.floor((gap % minute)/second);
  
  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;

  setTimeout(updateCountDown,1000);


}
