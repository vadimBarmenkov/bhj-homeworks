const signIn = document.getElementById('signin');
const signInBtn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const xhr = new XMLHttpRequest();

signInBtn.addEventListener('click', () => {
    let login = signIn.querySelector('.control[name="login"]').value;
    let password = signIn.querySelector('.control[name="password"]').value;
    xhr.open('get', 'https://netology-slow-rest.herokuapp.com/auth.php?login=' + login + '&password=' + password, true);
    xhr.onload = () => {
        if(xhr.status == 200){
            welcome.classList.add('welcome_active');
        }
    }
    xhr.send();
});
