const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const secondsFill = document.getElementById('seconds-fill');
const toggleBtn = document.getElementById('toggleMode');
const body = document.body;

// --- Update Clock ---
function updateClock() {
  const now = new Date();

  // Time
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');

  timeEl.textContent = `${hh}:${mm}:${ss} ${ampm}`;
  timeEl.setAttribute('datetime', now.toISOString());

  // Date
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  dateEl.textContent = now.toLocaleDateString('en-US', options);

  // Seconds bar
  secondsFill.style.width = `${(seconds / 60) * 100}%`;

  // Drift-free sync
  const delay = 1000 - now.getMilliseconds();
  setTimeout(updateClock, delay);
}

// --- Theme Toggle ---
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light');
  body.classList.toggle('dark');

  if (body.classList.contains('light')) {
    toggleBtn.textContent = "Switch to Dark Mode";
  } else {
    toggleBtn.textContent = "Switch to Light Mode";
  }
});

// Run immediately
updateClock();
