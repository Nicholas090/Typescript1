"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const timer = (id, deadline) => {
    const getTimeRemaninig = (endtme) => {
        const t = Date.parse(endtme) - Date.parse((new Date()).toLocaleString()), seconds = Math.floor((t / 1000) % 60), minutes = Math.floor((t / 1000 / 60) % 60), hours = Math.floor((t / (1000 * 60 * 60)) % 24), days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };
    const addZero = (num) => {
        if (num < 10) {
            return '0' + num;
        }
        else {
            return num;
        }
    };
    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector), days = timer.querySelector('#days'), hours = timer.querySelector('#hours'), minutes = timer.querySelector('#minutes'), seconds = timer.querySelector('#seconds'), timerInterval = setInterval(updateClock, 1000);
        updateClock();
        function updateClock() {
            const t = getTimeRemaninig(endtime);
            days.textContent = String(addZero(t.days));
            hours.textContent = String(addZero(t.hours));
            minutes.textContent = String(addZero(t.minutes));
            seconds.textContent = String(addZero(t.seconds));
            if (t.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timerInterval);
            }
        }
    };
    setClock(id, deadline);
};
exports.default = timer;
