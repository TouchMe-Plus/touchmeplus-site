// script.js
document.getElementById("year").textContent = new Date().getFullYear();

const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

function setTheme(theme) {
  if (theme === "dark") {
    root.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️";
    localStorage.setItem("tm_theme", "dark");
  } else {
    root.removeAttribute("data-theme");
    themeToggle.textContent = "🌙";
    localStorage.setItem("tm_theme", "light");
  }
}

const saved = localStorage.getItem("tm_theme");
if (saved === "dark") setTheme("dark");

themeToggle.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  setTheme(isDark ? "light" : "dark");
});
