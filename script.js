* { box-sizing: border-box; margin:0; padding:0; }

body {
  min-height: 100vh;
  display: grid;
  place-items: center;
  transition: background 0.4s, color 0.4s;
}

body.light { background: white; color: black; }
body.dark { background: #121212; color: white; }

.clock-wrap {
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
  transition: background 0.4s, color 0.4s;
}
body.light .clock-wrap { background: #f4f4f4; }
body.dark .clock-wrap { background: #1e1e1e; }

button {
  margin: 0.5rem;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

body.light button { background: black; color: white; }
body.dark button { background: white; color: black; }

#timezoneSelect { margin: 0.5rem; padding: 0.4rem; border-radius: 6px; }

.clock {
  display: block;
  font-weight: bold;
  font-size: clamp(2.5rem, 12vw, 5rem);
  margin-bottom: 0.5rem;
}

.date { font-size: 1.2rem; margin-bottom: 1rem; }

.seconds-bar {
  width: 100%;
  max-width: 300px;
  height: 6px;
  border-radius: 4px;
  background: gray;
  overflow: hidden;
  margin: 0 auto 1rem auto;
}
#seconds-fill {
  height: 100%;
  background: dodgerblue;
  width: 0%;
  transition: width 1s linear;
}

/* Analog clock canvas hidden by default */
#analogClock { display: none; margin: 1rem auto; }

/* Customization */
.customization { margin-top: 1rem; }
.customization label { margin-right: 0.5rem; }
