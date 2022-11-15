const tooltip = Array.from(document.getElementsByClassName('has-tooltip'));

tooltip.forEach(el => {
    el.insertAdjacentHTML('beforeEnd', '<div class="tooltip">' + el.title + '</div>');
    el.addEventListener('click', function (events) {
        events.preventDefault();
        el.querySelector('.tooltip').classList.toggle('tooltip_active');
    })});