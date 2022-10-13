const counte = document.getElementById("dead");
const counteLost = document.getElementById("lost");


let getHole = (index) => {return document.getElementById("hole" + index)};

let checkWin = () => {if(counte.textContent === '10'){
    alert('you win!');
    counte.textContent = '0';
    counteLost.textContent = '0';
}};

let checkLose = () => {if(counteLost.textContent === '5'){
    alert('you lose!');
    counte.textContent = '0';
    counteLost.textContent = '0';
}};
for(let i = 1; i < 10; i++){
    let test = getHole(i);
    test.onclick = () => {if (test.classList.contains('hole_has-mole')){
        counte.textContent++;
        checkWin();
    }else{
        counteLost.textContent++;
        checkLose();
    }};
}


