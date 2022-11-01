window.onload = () => {

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal_active');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    const arr = document.querySelectorAll('.reveal')
    arr.forEach(i => {
        observer.observe(i)
    })
}