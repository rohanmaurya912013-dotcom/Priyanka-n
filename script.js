document.getElementById('enterbtn').addEventListener('click', function() {
  document.getElementById('welcomescreen').style.display = 'none';
  document.getElementById('main-content').classList.remove('hidden');
});

document.getElementById('musicToggle').addEventListener('click', function() {
  var song = document.getElementById('duniyaSong');
  if (song.paused) {
    song.play();
    this.textContent = 'Pause Music';
  } else {
    song.pause();
    this.textContent = 'Play Music';
  }
});

