document.getElementById('musictoggle').addEventListener('click', function() {
  alert('Music toggled!');
});

document.getElementById('enterbtn').addEventListener('click', function() {
  document.getElementById('welcomescreen').classList.add('hidden');
  document.getElementById('main-content').classList.remove('hidden');
});
