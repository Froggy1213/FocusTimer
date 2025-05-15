let durationButtons = document.querySelectorAll('.duration-buttons button');
let timerDisplay = document.getElementById('timer');
let startBtn = document.getElementById('start-btn');
let stopBtn = document.getElementById('stop-btn');
let resetBtn = document.getElementById('reset-btn');
let customInput = document.getElementById('custom-input');
let setCustomBtn = document.getElementById('set-custom-btn');


let duration = 25 * 60; // 25 минут в секундах
let timeLeft = duration;
let timer = null;

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (timer !== null) return; // уже запущен
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            timer = null;
            alert("Время вышло!");
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    stopTimer();
    timeLeft = duration;
    updateDisplay();
}

durationButtons.forEach(button => {
    button.addEventListener('click', () => {
        const minutes = parseInt(button.getAttribute('data-minutes'));
        duration = minutes * 60;
        resetTimer(); // сбрасываем и применяем новую длительность
    });
});

// События
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Первоначальный вывод
updateDisplay();

setCustomBtn.addEventListener('click', () => {
    let value = customInput.value.trim();
    let totalSeconds = 0;

    if (/^\d+$/.test(value)) {
        // Только минуты
        totalSeconds = parseInt(value) * 60;
    } else if (/^\d{1,2}:\d{2}$/.test(value)) {
        // Минуты:секунды
        let [min, sec] = value.split(':').map(Number);
        totalSeconds = min * 60 + sec;
    } else {
        alert("Введите корректный формат: мм или мм:сс");
        return;
    }

    duration = totalSeconds;
    resetTimer();
});

let settingsToggle = document.getElementById('settings-toggle');
let settingsMenu = document.getElementById('settings-menu');

settingsToggle.addEventListener('click', () => {
    settingsMenu.classList.toggle('show');
});
