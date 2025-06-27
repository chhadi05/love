function nextStep(answer) {
  document.getElementById('screen1').classList.remove('active');
  document.getElementById('screen2').classList.add('active');

  setTimeout(() => {
    document.getElementById('screen2').classList.remove('active');
    document.getElementById('screen3').classList.add('active');

    setTimeout(() => {
      document.getElementById('screen3').classList.remove('active');
      document.getElementById('screen4').classList.add('active');
      launchHearts();
    }, 6000);
  }, 3000);
}

function launchHearts() {
  const container = document.getElementById("heartsContainer");
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";
    container.appendChild(heart);
    setTimeout(() => container.removeChild(heart), 8000);
  }
}

window.addEventListener('click', () => {
  const music = document.getElementById('bgMusic');
  if (music && music.paused) {
    music.play().catch(() => console.log('Autoplay blocked'));
  }
});
