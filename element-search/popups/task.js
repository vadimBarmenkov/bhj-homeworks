let modalMain = document.getElementById("modal_main");
let modalSuccess = document.getElementById('modal_success');
let modalClose = document.getElementsByClassName('modal__close');


modalMain.classList.add('modal_active');
modalClose[0].onclick = () => modalMain.classList.remove('modal_active');
modalClose[1].onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
};
modalClose[2].onclick = () => modalSuccess.classList.remove('modal_active');