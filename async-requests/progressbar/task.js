const progress = document.getElementById('progress');
const sendForm = document.getElementById('form');

sendForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded / event.total;
        };

        xhr.onloadend = function() {
            if (xhr.status == 200) {
                alert("Успех");
            } else {
                alert("Ошибка " + this.status);
            }
        }
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    const formData = new FormData(sendForm);
    xhr.send(formData);
});