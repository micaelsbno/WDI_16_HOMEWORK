var timer = {
  seconds: 0,
  display: document.getElementById('timer'),
  resetButton: document.getElementById('reset'),
  startButton: document.getElementById('start'),
  pauseButton: document.getElementById('pause'),
  updateTime: function(){
  timer.seconds += 1;
  timer.display.textContent = timer.seconds;
  },
  startTimer: function(){
  return interval = setInterval(timer.updateTime, 1000);
  },
  stopTimer: function(){
  clearInterval(interval);
  },
  resetTimer: function(){
  clearInterval(timer.interval);
  timer.display.textContent = 'Stop Watch';
  timer.seconds = 0;
  },
}


timer.startButton.addEventListener('click', timer.startTimer);
timer.pauseButton.addEventListener('click', timer.stopTimer);
timer.resetButton.addEventListener('click', timer.resetTimer);








