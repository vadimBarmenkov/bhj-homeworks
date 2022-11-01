const tabs = Array.from(document.getElementsByClassName('tab'));
const tabsContent = Array.from(document.getElementsByClassName('tab__content'));

tabs.forEach((element, index) => element.addEventListener('click', () => {
    let indexRemove = tabs.findIndex((e) => e.classList.contains('tab_active'));
    tabs[indexRemove].classList.remove('tab_active');
    tabsContent[indexRemove].classList.remove('tab__content_active');
    tabs[index].classList.add('tab_active');
    tabsContent[index].classList.add('tab__content_active');
}));