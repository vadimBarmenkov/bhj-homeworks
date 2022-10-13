let timerId = setInterval(() => {
    const timer = document.getElementById("timer");
    timer.textContent--;
    if (timer.textContent === "0"){
        alert("Вы победили в конкурсе!");
        clearTimeout(timerId);
    }
}, 1000);