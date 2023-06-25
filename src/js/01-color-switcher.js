const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const startColorSetting = () => {
    startBtnEl.disabled = true;
    timerId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor()
    }, 1000);
};

const stopColorSetting = () => {
    startBtnEl.disabled = false;
    clearInterval(timerId);
};

startBtnEl.addEventListener('click', startColorSetting);
stopBtnEl.addEventListener('click', stopColorSetting);