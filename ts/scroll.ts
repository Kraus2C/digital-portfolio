const header = document.querySelector<HTMLElement>('header.top.navigation');
let scrollPos = window.scrollY;
window.addEventListener('scroll', () => {
    if(scrollPos < window.scrollY && window.scrollY > 100) {
        header?.classList.add('header--hidden');
    } else {
        header?.classList.remove('header--hidden');
    }
    scrollPos = window.scrollY;
});