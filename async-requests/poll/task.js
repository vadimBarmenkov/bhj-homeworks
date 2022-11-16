const xhr = new XMLHttpRequest();
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onreadystatechange = function() {
    if(xhr.readyState===4) {
        let data = JSON.parse(xhr.responseText)['data'];
        pollTitle.insertAdjacentHTML('afterend', data['title']);
        data = data['answers'];

        for (var key in data){
            let button = document.createElement('button');
            button.className = 'poll__answer';
            button.innerText = data[key];
            button.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
            pollAnswers.insertBefore(button, null);
        }
    }
};