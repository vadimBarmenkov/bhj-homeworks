const loader = document.getElementById('loader');
const items = document.getElementById('items');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.onreadystatechange = function() {
    if(xhr.readyState===4) {
        loader.classList.remove('loader_active');
        let data = JSON.parse(xhr.responseText)['response']['Valute'];

        for (var key in data){
            items.insertAdjacentHTML('afterend' , '<div class="item"><div class="item__code">' + data[key]["CharCode"] + '</div>' +
                '<div class="item__value">' + data[key]["Value"] +
                '</div><div class="item__currency">руб.</div></div>');
        }



    }
};

