const results = ['screen-result-a', 'screen-result-b', 'screen-result-c'];

function selectCard() {
  const randomResult = results[Math.floor(Math.random() * results.length)];
  showScreen(randomResult);
}

function goBack() {
  showScreen('screen-start');
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(function (s) {
    s.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}
