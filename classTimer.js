class countDown {
    days;
    hours;
    minutes;
    seconds;
    targetDate;
    currentYear;
    interval;

    constructor(selector) {
        this.countDownContainer = document.querySelector(selector);
    }

    set targetDate(value) {
        if(value instanceof Date) {
            this.targetDate = value;
        }
    }

    get targetDate() {
        return this.targetDate;
    }

    setParam () {
        this.currentYear = new Date();
        let seconds = Math.floor((this.targetDate - (this.currentYear))/1000);
        let minutes = Math.floor(seconds/60);
        let hours = Math.floor(minutes/60);
        let days = Math.floor(hours/24);

        hours = hours-(days*24);
        minutes = minutes-(days*24*60)-(hours*60);
        seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    runTimer() {
        this.setParam();
        this.onTick();
        this.setPersentageVariablesForCircle();
    }

    startTimer() {
        this.interval = window.setInterval(() => this.runTimer(), 1000);
    }

    onTick() {
        document.querySelector('.countdown-item.days').innerHTML = this.days + "d";
        document.querySelector('.countdown-item.hours').innerHTML = this.hours + "h";
        document.querySelector('.countdown-item.minutes').innerHTML = this.minutes + "m";
        document.querySelector('.countdown-item.seconds').innerHTML = countDownObj.seconds + "s";
    }

    onStart() {
        [...this.countDownContainer.children].forEach(item => item.classList.add('show'));
    }

    setPersentageVariablesForCircle() {
        let persentageDays = Math.round(100 - this.days*100/360) + '%';
        let persentageHours = Math.round(100 - this.hours*100/24) + '%';
        let persentageMinutes = Math.round(100 - this.minutes*100/60) + '%';
        let persentageSeconds = Math.round(100 - this.seconds*100/60) + '%';

        this.countDownContainer.style.setProperty('--persentage-days', persentageDays);
        this.countDownContainer.style.setProperty('--persentage-hours', persentageHours);
        this.countDownContainer.style.setProperty('--persentage-minutes', persentageMinutes);
        this.countDownContainer.style.setProperty('--persentage-seconds', persentageSeconds);
    }
}

const countDownObj = new countDown("#countdown");
countDownObj.targetDate = new Date(new Date().getFullYear() +1, 0, 1);
countDownObj.onStart();
countDownObj.startTimer();

