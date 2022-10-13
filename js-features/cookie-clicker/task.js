const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
let flag = true;

cookie.onclick = () => {
    counter.textContent++;
    flag = !flag;
    if(flag){
        cookie.width = 200;
    }else{
        cookie.width = 100;
    }

}