const progress = document.getElementById('progress');
const send = document.getElementById('send');
const xhr = new XMLHttpRequest();

send.addEventListener('click', (e) => {
    e.preventDefault();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send();




        xhr.onprogress = function(event) {
            progress.value = event.loaded / 100000000;
            console.log(`Отправлено ${event.loaded} из ${event.total}`);
        };

        xhr.onloadend = function() {
            if (xhr.status == 200) {
                alert("Успех");
            } else {
                alert("Ошибка " + this.status);
            }
        }







});