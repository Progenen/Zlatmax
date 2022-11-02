document.addEventListener('DOMContentLoaded', function () {

    // Burger menu (Header)

    class MainMenu {
        constructor() {
            this.menu = document.querySelector('.main-menu');
            this.body = document.body;
            this.menuBtn = document.querySelectorAll('.main-menu-btn');
        }

        openMenu = (e) => {
            this.menu.classList.add('show');
            this.body.classList.add('lock');
            e.target.classList.add('collapsed');
        }

        closeMenu = (e) => {
            this.menu.classList.remove('show');
            this.body.classList.remove('lock');
            e.target.classList.remove('collapsed');
        }

        render() {
            this.menuBtn.forEach(element => {
                element.addEventListener('click', (e) => {
                    if (this.menu.classList.contains('show')) {
                        this.closeMenu(e);
                    } else {
                        this.openMenu(e);
                    }
                })
            })
        }
    }

    // Function to responive 

    function responsive(width) {
        if (document.body.clientWidth < width) {
            return true;
        }
    }

    // modal for city choose 

    const newModal = new MinModalJS('.modal-city', {
        buttonsActive: '.modal-city-open',
        buttonsDisActive: '.modal-city-close',
        keyOpen: 'Escape', // Or false
        modalOutsideClick: true // if true, modal closed when you click outside content modal
    });

    // Adaptive menu

    const menuTabs = new Tabs('')

    if (responsive(860)) {
        const nav = document.querySelector('.adaptive');
        const cabinet = document.querySelector('.header__cabinet');
        const navNew = document.querySelector('.header__top-row');
        const mobMenu = document.querySelectorAll('.mobile-menu');
        const topNav = document.querySelector('.menu');
        const mobMenuClose = document.querySelectorAll('.mobile-menu__close');
        
        mobMenuClose.forEach((element, i) => {
            element.addEventListener('click', () => {
                mobMenu.forEach(element => element.classList.remove('active'));
            })
        });

        mobMenu[0].append(topNav);
        nav.append(cabinet);  
        navNew.append(nav);
    }

});