// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle (light/dark) - optional but matches your moon icon
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

// Load saved theme
const saved = localStorage.getItem("tm_theme");
if (saved === "dark") setTheme("dark");

// Toggle on click
themeToggle.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  setTheme(isDark ? "light" : "dark");
});