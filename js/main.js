(function () {
    const btn = document.querySelector('.nav-toggle');
    const menu = document.querySelector('nav ul.nav-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(isOpen));
    });

    menu.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', () => {
            menu.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menu.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        }
    });
})();

document.querySelectorAll('.current-year').forEach(el => el.textContent = new Date().getFullYear());
