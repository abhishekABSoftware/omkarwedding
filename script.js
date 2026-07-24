// Open Doors Function
function openDoors() {
  const overlay = document.getElementById('doorOverlay');
  overlay.classList.add('open');
}

// Live Countdown Timer
const weddingDate = new Date("Dec 25, 2026 09:30:00").getTime();

const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector(".countdown-section").innerHTML = "<h2>The Celebration Has Begun! 🎉</h2>";
  }
}, 1000);