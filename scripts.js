const timerElement = document.getElementById("timer");
const toggleButton = document.getElementById("toggle-timer");

function updateTimer() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');

    timerElement.textContent = `${hours}:${minutes}`;
}

updateTimer();
setInterval(updateTimer, 10000);

// Tema Claro/Oscuro
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    toggleButton.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

});
