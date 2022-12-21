import '../css/common.css';

const refs = {
  startButton: document.querySelector('button[data-start]'),
  stopButton: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.startButton.addEventListener('click', onStartButtonClick);
refs.stopButton.addEventListener('click', onStopButtonClick);

const DELAY = 1000;
let timerId = null;

function onStartButtonClick() {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, DELAY);
  console.log('start');
}

function onStopButtonClick() {
  clearInterval(timerId);
  console.log('stop');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
