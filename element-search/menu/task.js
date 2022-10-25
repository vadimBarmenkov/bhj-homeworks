const link = document.getElementsByClassName('menu__link');
const item = document.getElementsByClassName('menu__item');

for (let index = 0; index <= link.length - 1; index++) {
        if (item[index].querySelector('ul')) {
            link[index].onclick = () => {
                link[index].closest('li').querySelector('ul').classList.add('menu_active');
                return false;
        }
    }
}