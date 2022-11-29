const signInBtn = document.getElementById('signin__btn');
const signIn = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const sendForm = document.getElementById('signin__form');
const xhr = new XMLHttpRequest();

if(localStorage.userData){
    signIn.classList.remove('signin_active');
    welcome.textContent += localStorage.userData;
    welcome.classList.add('welcome_active');
}

signInBtn.addEventListener('click', (e) => {
    e.preventDefault();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php', true);

    xhr.onloadend = () => {
        if(xhr.readyState===4) {
            let data = JSON.parse(xhr.responseText);
            if (data['success']){
                localStorage.userData = data['user_id'];
                signIn.classList.remove('signin_active');
                welcome.textContent += data['user_id'];
                welcome.classList.add('welcome_active');
            }else{
                alert('Неверный логин/пароль');
            }


        }
    };

    const formData = new FormData(sendForm);
    xhr.send(formData);
});
