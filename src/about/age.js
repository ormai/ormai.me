const birthday = new Date(2004, 2, 18);
const today = new Date();

const age = Math.abs(today - birthday) / (1000 * 60 * 60 * 24 * 365);
const leapYearsDays = Math.floor(age / 4) / 365

document
    .getElementById("my-age")
    .textContent = Math.floor(age + leapYearsDays);
