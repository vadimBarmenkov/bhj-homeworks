const slider = Array.from(document.getElementsByClassName('slider__item'));
const sliderNav = document.getElementsByClassName('slider__arrow');
let numSlide = 0;


sliderNav[0].onclick = () => {
    if(numSlide === 0){
        slider[0].classList.remove('slider__item_active');
        slider[slider.length - 1].classList.add('slider__item_active');
        numSlide = slider.length - 1;
    }else{
        slider[numSlide].classList.remove('slider__item_active');
        numSlide--;
        slider[numSlide].classList.add('slider__item_active');
    }
};
sliderNav[1].onclick = () => {
    if(numSlide === slider.length - 1){
        slider[slider.length - 1].classList.remove('slider__item_active');
        slider[0].classList.add('slider__item_active');
        numSlide = 0;
    }else{
        slider[numSlide].classList.remove('slider__item_active');
        numSlide++;
        slider[numSlide].classList.add('slider__item_active');
    }
};



