// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle (light/dark) - optional but matches your moon icon
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const redirectForm = document.getElementById("redirectForm");

if (redirectForm) {
  redirectForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const from = document.getElementById("from").value.trim();
    const to = document.getElementById("to").value.trim();
    const date = document.getElementById("date").value;
    const pax = document.getElementById("pax").value;

    const base = "https://busbooking-pulv.onrender.com/search";
    const params = new URLSearchParams({
      from,
      to,
      date,
      passengers: pax
    });

    window.open(`${base}?${params.toString()}`, "_blank", "noopener,noreferrer");
  });
}

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
