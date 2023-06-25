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

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    selectedDates = selectedDates[0];
    if (selectedDates < new Date()) {
      Notiflix.Notify.warning('Please choose a date in the future');
    }
    startBtnEl.disabled = false;
  },
};
