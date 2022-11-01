const link = Array.from(document.getElementsByClassName('dropdown__link'));
const dropdownValue = document.getElementsByClassName('dropdown__value');

const openDropDownList = () => document.getElementsByClassName('dropdown__list')[0].classList.toggle('dropdown__list_active');
const choiceValue = function (e) {
    document.getElementsByClassName('dropdown__list')[0].classList.remove('dropdown__list_active');
    dropdownValue[0].textContent = this.textContent;
    console.log(this);
    e.preventDefault();
};

dropdownValue[0].addEventListener("click", openDropDownList);
link.forEach((e) => e.addEventListener("click", choiceValue));
