import '../css/common.css';

const refs = {
  startButton: document.querySelector('button[data-start]'),
  stopButton: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.startButton.addEventListener('click', onStartButtonClick);
refs.stopButton.addEventListener('click', onStopButtonClick);
refs.startButton.style.padding = '10px 20px';
refs.stopButton.style.padding = '10px 20px';
refs.stopButton.disabled = true;

const DELAY = 1000;
let timerId = null;

function onStartButtonClick() {
  timerId = setInterval(changeColor, DELAY);

  refs.startButton.disabled = true;
  refs.stopButton.disabled = false;
}

function onStopButtonClick() {
  clearInterval(timerId);

  refs.startButton.disabled = false;
  refs.stopButton.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}
