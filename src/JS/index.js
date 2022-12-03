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

    if (responsive(860)) {
        const nav = document.querySelector('.adaptive');
        const cabinet = document.querySelector('.header__cabinet');
        const navNew = document.querySelector('.header__top-row');
        const mobMenu = document.querySelectorAll('.mobile-menu');
        const menuCatalog = document.querySelectorAll('.menu__catalog', 'burger-menu');
        const menuCatalogText = document.querySelector('.menu__catalog-text_md');
        const MenuCatalogContents = document.querySelectorAll('.menu__catalog-content')
        const mobMenus = document.querySelector('.mobile-menus');
        const topNav = document.querySelector('.menu');
        const mobMenuClose = document.querySelectorAll('.mobile-menu__close');
        let menuArr= [];

        menuCatalog.forEach((element, i) => {
            let item = document.createElement('div');
            item.classList.add('mobile-menu');
            item.innerHTML = `
            <div class="mobile-menu__header">
                <div class="mobile-menu__back" id="back${i}">
                    <svg class="mobile-menu__back-icon">
                        <use xlink:href='svg/dest/stack/sprite.svg#arrow-left'></use>
                    </svg>
                    Назад
                </div>
                <div class="mobile-menu__close">
                    <svg class="mobile-menu__close-icon">
                        <use xlink:href='svg/dest/stack/sprite.svg#plus'></use>
                    </svg>
                </div>
            </div>
            `;
            item.append(MenuCatalogContents[i]);
            if (i === 0) {
                menuCatalogText.addEventListener('click', () => {
                    item.classList.toggle('active');
                })  
            }
            if (element.querySelector('.menu__catalog-text')) {
                  
            element.querySelector('.menu__catalog-text').addEventListener('click', () => {
                item.classList.toggle('active');
            });
            }
            item.querySelector('.mobile-menu__back').addEventListener('click', () => {
                item.classList.toggle('active');
            });
            item.querySelector('.mobile-menu__close').addEventListener('click', () => {
                for (let i = 0; mobMenus.childNodes.length < i; i++) {
                    mobMenu.childNodes[i].classList.toggle('active');
                }
            })
            
            menuArr.push(item);
            mobMenus.append(item);
        });
        console.log(menuArr);
        mobMenuClose.forEach(element => {
            element.addEventListener('click', () =>{
                mobMenu.forEach(element => {
                    element.classList.remove('active');
                });
                menuArr.forEach(element => {
                    element.classList.remove('active');
                });
            })
        });
        menuArr.forEach(element => {
            element.querySelector('.mobile-menu__close').addEventListener('click', () => {
                mobMenu.forEach(element => {
                    element.classList.remove('active');
                })
                menuArr.forEach(element => {
                    element.classList.remove('active');
                });
            })
        });

        mobMenu[0].append(topNav);
        mobMenu[0].append(menuCatalogText);
        nav.append(cabinet);  
        navNew.append(nav);
    };
});