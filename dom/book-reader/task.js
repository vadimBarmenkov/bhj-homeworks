const fontSize = Array.from(document.getElementsByClassName('font-size'));
const book = document.getElementById('book');

function choiceFontSize(e){
    fontSize[fontSize.findIndex(e => e.classList.contains('font-size_active'))].classList.remove('font-size_active');
    book.classList.remove('font-size_small', 'font-size_big');
    let className = this.className.split(' ');
    console.log(className[1]);
    book.classList.add(className[1]);
    this.classList.add('font-size_active');
    e.preventDefault();
}

fontSize.forEach((element) => element.addEventListener('click', choiceFontSize));
