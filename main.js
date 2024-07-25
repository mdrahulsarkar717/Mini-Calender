const dateH = document.querySelector('.date');
const dayH = document.querySelector('.day');
const monthH = document.querySelector('.month');
const yearH = document.querySelector('.year');

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", " Thursday", "Friday", " Saturday"];
const months = ["January", "February"," March","April","May","Jun","July","August","September","October","November","December"] 


const today = new Date();

dateH.innerHTML = (today.getDate() < 10?"0":"") + today.getDate();
dayH.innerHTML = weekdays[today.getDay()];
monthH.innerHTML = months[today.getMonth()];
yearH.innerHTML = today.getFullYear();

// END EIMPLE PROJECT!!!