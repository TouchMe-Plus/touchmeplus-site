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
document.addEventListener("DOMContentLoaded", function(){
  var team = [
    { img:"assets/images/1.png",  name:"Aasir",  role:"CEO" },
    { img:"assets/images/2.png",  name:"Hafil",  role:"Application Support & Maintenance" },
    { img:"assets/images/3.png",  name:"Imadh",  role:"Overall Supervisor" },
    { img:"assets/images/4.png",  name:"Wajith", role:"Web Development" },
    { img:"assets/images/5.png",  name:"Ayman",  role:"Marketing Manager" },
    { img:"assets/images/6.png",  name:"Akeeb",  role:"External Communications & Partnerships" },
    { img:"assets/images/7.png",  name:"Jaasim", role:"Administrator" },
    { img:"assets/images/8.png", name:"Arshad", role:"Head of Room Booking Operations" },
    { img:"assets/images/8.png", name:"Arshad", role:"Head of Bus Booking Operations" }
  ];

  var track = document.getElementById("teamTrack");
  if(!track) return; // safety: only run on pages that have the team section

  var REPEATS = 3;
  var cardSvg =
    '<svg class="e-card__fx" viewBox="0 0 190 240" preserveAspectRatio="none">' +
      '<rect class="e-card__glow" x="3" y="3" width="184" height="234" rx="18" ry="18"></rect>' +
      '<rect class="e-card__stroke" x="3" y="3" width="184" height="234" rx="18" ry="18"></rect>' +
      '<rect class="e-card__highlight" x="3" y="3" width="184" height="234" rx="18" ry="18"></rect>' +
    '</svg>';

  var wraps = [];
  for(var r=0; r<REPEATS; r++){
    for(var i=0; i<team.length; i++){
      var m = team[i];
      var wrap = document.createElement("div");
      wrap.className = "team-card-wrap";
      wrap.innerHTML =
        '<div class="e-card">' + cardSvg + '<div class="e-card__mask"><img src="' + m.img + '" alt="' + m.name + '"></div></div>' +
        '<h4 class="team-name">' + m.name + '</h4>' +
        '<p class="team-role">' + m.role + '</p>';
      track.appendChild(wrap);
      wraps.push(wrap);
    }
  }

  var viewport = document.querySelector(".team-viewport");
  function cardStep(){
    var s = getComputedStyle(viewport);
    return parseFloat(s.getPropertyValue('--card-w')) + parseFloat(s.getPropertyValue('--gap'));
  }

  var currentIndex = team.length;

  function render(withTransition){
    track.style.transition = withTransition ? '' : 'none';
    track.style.transform = 'translateX(' + (-(currentIndex - 2) * cardStep()) + 'px)';
    wraps.forEach(function(w, i){
      var diff = i - currentIndex;
      w.classList.remove('pos-active','pos-adjacent');
      if(diff === 0) w.classList.add('pos-active');
      else if(Math.abs(diff) === 1) w.classList.add('pos-adjacent');
    });
    if(!withTransition){
      void track.offsetWidth;
      track.style.transition = '';
    }
  }

  render(false);

  function tick(){
    currentIndex++;
    render(true);
    setTimeout(function(){
      if(currentIndex >= team.length * 2){
        currentIndex -= team.length;
        render(false);
      }
    }, 720);
  }

  setInterval(tick, 4000);
});
