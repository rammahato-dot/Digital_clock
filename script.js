const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const secondsFill = document.getElementById('seconds-fill');
const toggleBtn = document.getElementById('toggleMode');
const toggleClockType = document.getElementById('toggleClockType');
const timezoneSelect = document.getElementById('timezoneSelect');
const analogClock = document.getElementById('analogClock');
const colorPicker = document.getElementById('colorPicker');
const fontPicker = document.getElementById('fontPicker');
const body = document.body;
const clockWrap = document.querySelector('.clock-wrap');
const ctx = analogClock.getContext('2d');

let showAnalog = false;

// --- Update Clock ---
function updateClock() {
  const now = getTimeInZone(timezoneSelect.value);

  // --- Digital Clock ---
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  const hh = String(hours).padStart(2,'0');
  const mm = String(minutes).padStart(2,'0');
  const ss = String(seconds).padStart(2,'0');

  if(!showAnalog) {
    timeEl.style.display = 'block';
    dateEl.style.display = 'block';
    secondsFill.parentElement.style.display = 'block';
    analogClock.style.display = 'none';

    timeEl.textContent = `${hh}:${mm}:${ss} ${ampm}`;
    timeEl.setAttribute('datetime', now.toISOString());

    const options = { weekday:'short', year:'numeric', month:'short', day:'numeric' };
    dateEl.textContent = now.toLocaleDateString('en-US', options);

    secondsFill.style.width = `${(seconds/60)*100}%`;
  } else {
    timeEl.style.display = 'none';
    dateEl.style.display = 'none';
    secondsFill.parentElement.style.display = 'none';
    analogClock.style.display = 'block';
    drawAnalogClock(hours, minutes, seconds);
  }

  // Drift-free update
  const delay = 1000 - now.getMilliseconds();
  setTimeout(updateClock, delay);
}

// --- Time zone helper ---
function getTimeInZone(zone) {
  if(zone === 'local') return new Date();
  return new Date(new Date().toLocaleString("en-US", {timeZone: zone}));
}

// --- Analog Clock Drawing ---
function drawAnalogClock(h, m, s) {
  const radius = analogClock.width/2;
  ctx.clearRect(0,0,analogClock.width, analogClock.height);

  ctx.translate(radius,radius);
  ctx.rotate(-Math.PI/2);

  // Clock circle
  ctx.beginPath();
  ctx.arc(0,0,radius-5,0,2*Math.PI);
  ctx.strokeStyle = colorPicker.value;
  ctx.lineWidth = 8;
  ctx.stroke();

  // Hour hand
  ctx.save();
  ctx.rotate((Math.PI/6*h) + (Math.PI/360*m));
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(radius*0.5,0);
  ctx.strokeStyle = colorPicker.value;
  ctx.lineWidth = 6;
  ctx.stroke();
  ctx.restore();

  // Minute hand
  ctx.save();
  ctx.rotate((Math.PI/30*m) + (Math.PI/1800*s));
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(radius*0.7,0);
  ctx.strokeStyle = colorPicker.value;
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.restore();

  // Second hand
  ctx.save();
  ctx.rotate(Math.PI/30*s);
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(radius*0.9,0);
  ctx.strokeStyle = colorPicker.value;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.restore();

  ctx.resetTransform();
}

// --- Theme toggle ---
toggleBtn.addEventListener('click', ()=>{
  body.classList.toggle('light');
  body.classList.toggle('dark');
  toggleBtn.textContent = body.classList.contains('light') ? "Switch to Dark Mode" : "Switch to Light Mode";
});

// --- Clock type toggle ---
toggleClockType.addEventListener('click', ()=>{
  showAnalog = !showAnalog;
  toggleClockType.textContent = showAnalog ? "Switch to Digital" : "Switch to Analog";
});

// --- Color and Font customization ---
colorPicker.addEventListener('input', ()=>{ timeEl.style.color = colorPicker.value; });
fontPicker.addEventListener('change', ()=>{ timeEl.style.fontFamily = fontPicker.value; });

updateClock();
