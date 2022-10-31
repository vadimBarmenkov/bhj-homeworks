let modalMain = document.getElementById("modal_main");
let modalSuccess = document.getElementById('modal_success');
let modalClose = Array.from(document.getElementsByClassName('modal__close'));

modalMain.classList.add('modal_active');


for (let i = 0; i < modalClose.length; i++){
    modalClose[i].onclick = () => modalClose[i].closest('.modal').classList.remove('modal_active');
}

modalClose[1].onclick = () => {
    modalClose[1].closest('.modal').classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
};





