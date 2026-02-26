# 🌙 Simple Dark Mode Snippet

A clean and reusable dark mode implementation using HTML, CSS variables and JavaScript.

## 🚀 Live Demo

https://daniellrck3-hash.github.io/simple-dark-mode-snippet/

---

## 📌 What This Project Does

This project implements a theme toggle button that switches between light and dark mode.

The user preference is saved using `localStorage`, so the selected theme persists even after refreshing the page.

---

## 🛠 Technologies Used

- HTML5
- CSS3 (CSS Variables)
- JavaScript (Vanilla JS)
- localStorage API

---

## 🧠 How The Code Works

### 1️⃣ CSS Variables

The colors are defined using CSS variables inside `:root`.

```css
:root {
  --bg-color: #ffffff;
  --text-color: #111111;
}
