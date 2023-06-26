import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtnEl = document.querySelector('button[data-start]');
startBtnEl.disabled = true;

const timerEl = document.querySelector('.timer');
timerEl.style.fontSize = '20px';
timerEl.style.gap = '20px';
timerEl.style.display = 'flex';

const fieldValueEls = document.querySelectorAll('.value');
fieldValueEls.forEach(
  element => (
    (element.style.fontSize = '40px'),
    (element.style.display = 'flex'),
    (element.style.flexDirection = 'column'),
    (element.style.alignItems = 'center')
  )
);

let selectedDate;
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      Notiflix.Notify.warning('Please choose a date in the future');
    }
    startBtnEl.disabled = false;
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function timerCounting() {
  countingIntervalId = setInterval(() => {
    const currentTime = Date.now();
    const remainingTime = selectedDate - currentTime;
    startBtnEl.disabled = true;

    const { days, hours, minutes, seconds } = convertMs(remainingTime);

    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
  }, 1000);
}

startBtnEl.addEventListener('click', timerCounting);
flatpickr('#datetime-picker', options);
