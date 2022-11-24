const textArea = document.getElementById('editor');
const clearButton = document.getElementById('clear_button');

textArea.oninput = () => {
    localStorage.textAreaData = textArea.value;
};

document.addEventListener('DOMContentLoaded', () => {
    textArea.textContent = localStorage.textAreaData
});

clearButton.addEventListener('click', () => {
    textArea.textContent = "";
    localStorage.clear();
});