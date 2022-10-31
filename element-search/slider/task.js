const slider = Array.from(document.getElementsByClassName('slider__item'));
const sliderNav = document.getElementsByClassName('slider__arrow');

sliderNav[0].onclick = () => {
    let sliderIndex = slider.findIndex((element) => element.classList.contains('slider__item_active'));
    slider[sliderIndex].classList.remove('slider__item_active');
    sliderIndex - 1 < 0 ? slider[slider.length - 1].classList.add('slider__item_active') : slider[sliderIndex - 1].classList.add('slider__item_active');
};

sliderNav[1].onclick = () => {
    let sliderIndex = slider.findIndex((element) => element.classList.contains('slider__item_active'));
    slider[sliderIndex].classList.remove('slider__item_active');
    sliderIndex + 1 > slider.length - 1 ? slider[0].classList.add('slider__item_active') : slider[sliderIndex + 1].classList.add('slider__item_active');
};



