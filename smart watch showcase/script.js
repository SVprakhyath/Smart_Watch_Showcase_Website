var displayState = true; // Indicates whether the display is currently on or off
var mode = 'time'; // 'time' indicates time mode, 'date' indicates date mode

function updateTime() {
  var now = new Date();
  var time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  var date = now.toLocaleDateString();

  if (displayState) {
    if (mode === 'time') {
      document.getElementById('time').textContent = time;
      document.getElementById('date').classList.add('hidden');
    } else if (mode === 'date') {
      document.getElementById('time').classList.add('hidden');
      document.getElementById('date').textContent = date;
    }
  } else {
    document.getElementById('time').classList.add('hidden');
    document.getElementById('date').classList.add('hidden');
  }
}

function toggleDisplay() {
  displayState = !displayState;
  var timeElement = document.getElementById('time');
  var dateElement = document.getElementById('date');
  timeElement.classList.toggle('hidden');
  dateElement.classList.toggle('hidden');
}

function toggleMode() {
  if (displayState) {
    if (mode === 'time') {
      mode = 'date';
      document.getElementById('time').classList.add('hidden');
      document.getElementById('date').classList.remove('hidden');
    } else if (mode === 'date') {
      mode = 'time';
      document.getElementById('date').classList.add('hidden');
      document.getElementById('time').classList.remove('hidden');
    }
  }
}

setInterval(updateTime, 1000);
