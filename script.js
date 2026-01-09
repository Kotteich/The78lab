
    const menuBtn = document.getElementById('menuBtn');
    const navBar = document.getElementById('navBar');
    const overlay = document.getElementById('overlay');
    const navLinks = navBar.querySelectorAll('a.nav-link');

    function openMenu() {
        navBar.classList.add('active');
        overlay.classList.add('active');
    }

    function closeMenu() {
        navBar.classList.remove('active');
        overlay.classList.remove('active');
    }

    menuBtn.addEventListener('click', () => {
        navBar.classList.contains('active') ? closeMenu() : openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu(); // якорь сработает сам
        });
    });
