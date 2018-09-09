import $ from 'jquery';

class mobileMenu {
    constructor() {
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();
    }

    events() {
        // the bind method will change the 'this' keyword to whatever parameter you fill in
        // 'this' keyword's value depends on what it's called by
        // in this case the DOM item '.site-header__menu-icon'
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        this.menuContent.toggleClass('site-header__menu-content--is-visible');
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass('site-header__menu-icon--close-x');
    }
}

export default mobileMenu;