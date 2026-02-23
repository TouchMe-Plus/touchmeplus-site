{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Footer year\
document.getElementById("year").textContent = new Date().getFullYear();\
\
// Theme toggle (light/dark) - optional but matches your moon icon\
const themeToggle = document.getElementById("themeToggle");\
const root = document.documentElement;\
\
function setTheme(theme) \{\
  if (theme === "dark") \{\
    root.setAttribute("data-theme", "dark");\
    themeToggle.textContent = "\uc0\u9728 \u65039 ";\
    localStorage.setItem("tm_theme", "dark");\
  \} else \{\
    root.removeAttribute("data-theme");\
    themeToggle.textContent = "\uc0\u55356 \u57113 ";\
    localStorage.setItem("tm_theme", "light");\
  \}\
\}\
\
// Load saved theme\
const saved = localStorage.getItem("tm_theme");\
if (saved === "dark") setTheme("dark");\
\
// Toggle on click\
themeToggle.addEventListener("click", () => \{\
  const isDark = root.getAttribute("data-theme") === "dark";\
  setTheme(isDark ? "light" : "dark");\
\});}