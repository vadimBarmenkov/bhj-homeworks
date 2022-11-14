const massages = document.getElementById('chat-widget__messages');
const input = document.getElementById('chat-widget__input');
const chat = document.getElementsByClassName('chat-widget')[0];

chat.addEventListener('click', () => chat.classList.add('chat-widget_active'));

function getMass() {
    const words = [
            'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
            'Ужасный день!',
            'Все плохо.',
            'Не хочу отвечать.',
            'Робот покинул чат.',
            'Рабочий день закончен.',
            'Не пиши сюда больше.',
            'Ты меня отвлекаешь',
            'Мне скучно',
            'И без тебя забот хватает',
            'Пока'
        ],
        index = Math.floor(Math.random() * words.length);

    return words[index];
}

function printMassage(user, massage){
    if(user != "robot"){
        massages.innerHTML += '<div class="message message_client">\n' +
            '                            <div class="message__time">22:10</div>\n' +
            '                            <div class="message__text">'+ massage +'</div>\n' +
            '                        </div>';
    }else{
        massages.innerHTML += '<div class="message">\n' +
            '                            <div class="message__time">22:10</div>\n' +
            '                            <div class="message__text">'+ massage +'</div>\n' +
            '                        </div>';
    }
};

input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter'){
    printMassage('client', input.value);
    printMassage('robot', getMass());
    }
    return false;
});