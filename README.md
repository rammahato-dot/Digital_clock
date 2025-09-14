# 🕒 Digital Clock Project

A simple **Digital Clock** built using **HTML, CSS, and JavaScript**.  
It displays the current **time (HH:MM:SS)** in **12-hour format with AM/PM**, along with the **current date**.  
The project also includes a **Dark Mode / Light Mode toggle** and smooth animations.

---

## 🚀 Features
- Real-time **digital clock** with smooth seconds update.
- **12-hour format** with AM/PM.
- Displays the **current date** (e.g., Tue, Sep 14, 2025).
- **Dark Mode / Light Mode** toggle button.
- Glowing clock text effect with modern styling.
- Avoids `setInterval` drift by syncing with system time.

---

## 📂 Project Structure
📁 digital-clock
┣ 📄 index.html → Clock structure
┣ 📄 style.css → Styling (Dark & Light mode support)
┗ 📄 script.js → JavaScript for real-time updates


---

## 🛠️ How It Works
1. **HTML (`index.html`)**
   - Contains the clock container, date, and toggle button.
   - Provides the structure for the clock display.

2. **CSS (`style.css`)**
   - Styles the clock with modern design.
   - Adds glowing text, centering, and dark/light theme.
   - Smooth animations for seconds.

3. **JavaScript (`script.js`)**
   - Uses the `Date` object to fetch the current time & date.
   - Formats time to **12-hour format with leading zeros**.
   - Updates every second using `setTimeout` to avoid drift.
   - Handles Dark/Light mode toggle.

---

## ▶️ How to Run
1. Download or clone the repository.
2. Open the folder and make sure all files (`index.html`, `style.css`, `script.js`) are in the same directory.
3. Open `index.html` in your browser.
4. You’ll see the clock running in real-time with Dark/Light mode support.

---

## 📸 Screenshot
<img width="1838" height="964" alt="image" src="https://github.com/user-attachments/assets/3fb5ace0-2268-499b-b35e-985eb7ac874b" />
<img width="1838" height="983" alt="image" src="https://github.com/user-attachments/assets/151c6866-10a7-4d9e-9323-d04374076092" />



---

## 💡 Future Improvements
- Add **different time zones** support.
- Option to show **analog + digital clock**.
- User can **customize colors & fonts**.

---

## 📜 License
This project is free to use and modify for learning purposes.
