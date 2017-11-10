window.onload = () => {
  const clockEl = document.querySelector('.clock');

  renderTime(clockEl);

  setInterval(() => renderTime(clockEl), 1000);
};

function renderTime(clockEl) {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const isAM = hours === 24 || hours < 12;
  const period = isAM ? 'AM' : 'PM';

  const time = prependZero(getStandardTime(hours)) + 
    ' : ' + prependZero(minutes) + 
    ' : ' + prependZero(seconds) + 
    ' ' + period;

  clockEl.innerHTML = time;

}

function prependZero(num) {
  return num < 10 ? '0' + num : num;
}

function getStandardTime(hours) {
  return (hours + 11) % 12 + 1;
}