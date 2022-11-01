const rotatorItems = Array.from(document.getElementsByClassName('rotator__case'));

function rotator(){
    let index = rotatorItems.findIndex((element) => element.classList.contains('rotator__case_active'));
    rotatorItems[index].classList.remove('rotator__case_active');
    if(index === rotatorItems.length - 1){
        rotatorItems[0].classList.add('rotator__case_active');
    }else {
        rotatorItems[index + 1].classList.add('rotator__case_active');
    }
}

let timerId = setTimeout(function tick() {
    rotator();
    timerId = setTimeout(tick, 1000); // (*)
}, 1000);