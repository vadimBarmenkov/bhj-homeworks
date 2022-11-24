const subscribeModal = document.getElementById('subscribe-modal');

document.addEventListener('DOMContentLoaded', () => {

    const value = "; " + document.cookie;
    let parts = value.split("; modalClose=");
    if(parts.length != 2) {
        subscribeModal.classList.add('modal_active');
    }

});

subscribeModal.querySelector('.modal__close').addEventListener('click', () => {
    subscribeModal.classList.remove('modal_active');
    document.cookie = 'modalClose=close';

});
