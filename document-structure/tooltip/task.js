const tooltip = Array.from(document.getElementsByClassName('has-tooltip'));

tooltip.forEach(el => {
    let tip = document.createElement('div');
    tip.className = 'tooltip';
    tip.style.left = el.getBoundingClientRect().left + 'px';
    tip.textContent = el.title;
    el.insertBefore(tip,null);

    el.addEventListener('click', function (events) {
        events.preventDefault();
        el.querySelector('.tooltip').classList.toggle('tooltip_active');
    })});