const progress = document.getElementById('progress');
const send = document.getElementById('send');
const xhr = new XMLHttpRequest();

send.addEventListener('click', (e) => {
    e.preventDefault();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send();

    xhr.onprogress = function (event){
        progress.value += 0.01;
    }
});