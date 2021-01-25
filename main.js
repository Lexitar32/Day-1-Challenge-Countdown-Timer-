// Get all inputs from html
const daysCount = document.getElementById("days");
const hoursCount = document.getElementById("hours");
const minutesCount = document.getElementById("mins");
const secondsCount = document.getElementById("seconds");

// Get the End Date
const endDate = "Feb 14, 2021 11:59:59";

const challengeCountDown = () => {
  const challengeEndDate = new Date(endDate).getTime(); // End Date
  const currentDate = new Date().getTime(); // Current Date

  const remainingInterval = challengeEndDate - currentDate;

  const days = Math.floor(remainingInterval / (1000 * 3600 * 24));

  const hours = Math.floor((remainingInterval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 

  const minutes = Math.floor((remainingInterval % (1000 * 60 * 60)) / (1000 * 60)); 

  const seconds = Math.floor((remainingInterval % (1000 * 60)) / 1000);

  daysCount.innerHTML = days;
  hoursCount.innerHTML = formatTime(hours);
  minutesCount.innerHTML = formatTime(minutes);
  secondsCount.innerHTML = formatTime(seconds);
};

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Initial Call
challengeCountDown();

// Making it display every seconds
setInterval(() => {
  challengeCountDown();
}, 1000);
