let onStart = () => {
    document.querySelectorAll('.countdown-item').forEach(item => item.classList.add('show'))
}

let onTick = (days, hours, minutes, seconds) => {
    document.querySelector('.countdown-item.days').innerHTML = days + "d";
    document.querySelector('.countdown-item.hours').innerHTML = hours + "h";
    document.querySelector('.countdown-item.minutes').innerHTML = minutes + "m";
    document.querySelector('.countdown-item.seconds').innerHTML = seconds + "s";
};

onStart();

setInterval(function() {
    let targetDate = new Date(new Date().getFullYear() +1, 0, 1);
    let currentYear = new Date();

    let seconds = Math.floor((targetDate - (currentYear))/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24);

    hours = hours-(days*24);
    minutes = minutes-(days*24*60)-(hours*60);
    seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

    let persentageDays = Math.round(100 - days*100/360) + '%';
    let persentageHours = Math.round(100 - hours*100/24) + '%';
    let persentageMinutes = Math.round(100 - minutes*100/60) + '%';
    let persentageSeconds = Math.round(100 - seconds*100/60) + '%';

    let countDownContainer = document.querySelector('#countdown');

    countDownContainer.style.setProperty('--persentage-days', persentageDays);
    countDownContainer.style.setProperty('--persentage-hours', persentageHours);
    countDownContainer.style.setProperty('--persentage-minutes', persentageMinutes);
    countDownContainer.style.setProperty('--persentage-seconds', persentageSeconds);

    onTick(days, hours, minutes, seconds);
},1000);
