const progress = document.getElementById('progress');
const send = document.getElementById('send');
const xhr = new XMLHttpRequest();

send.addEventListener('click', () => {
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send();

    console.log(xhr.onreadystatechange);
});