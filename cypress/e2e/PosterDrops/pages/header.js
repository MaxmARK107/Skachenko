class header {
    selectors = {
        logInNavBarIcon: '[data-title="Log In"]',
        signInNavBarIcon: '[data-title="Sign Up"]',
        socialMediaNavBarIcon: '#nav-link--more',
            socialMediaSubMenu: '.nav__list',
            discordSubmenuItem: '.nav__list > li:nth-child(1) a',
            etsySubMenuItem: '.nav__list > li:nth-child(2) a',
            facebookSubMenuItem: '.nav__list > li:nth-child(3) a',
            twitterSubMenuItem: '.nav__list > li:nth-child(4) a',
            instagramSubMenuItem: '.nav__list > li:nth-child(5) a',
            pinterestSubMenuItem: '.nav__list > li:nth-child(6) a',
            tumbirSubMenuItem: '.nav__list > li:nth-child(7) a',
            mailchimpSubMenuItem: '.nav__list > li:nth-child(8) a',
        shopNavBarIcon: '.nav > li:nth-child(5) a',
        notificationsNavBarIcon: '.nav > li:nth-child(4) a',
            notificationsSubMenu: 'li:nth-child(4) .dropdown-menu',
            notificationsSubMenuTitle: 'li:nth-child(4) .dropdown-content-header',
            notificationsSubMenu: '',
            
            noNotificationsSubMenuText: 'li:nth-child(4) .no-messages',
        addArtNavBarIcon: '.nav > li:nth-child(3) a',
        messagesNavBarIcon: '.nav > li:nth-child(2) a',
            messagesSubMenu: 'li:nth-child(2) .dropdown-menu',
            messagesSubMenuTitle: 'li:nth-child(2) .dropdown-content-header span',
            noMessagesSubMenuText: 'li:nth-child(2) .dropdown-content-body span',
            messagesSubMenuList: 'li:nth-child(2) .media-list',
        searchInput: '#search-box-selectized',
        mainLogo: '.header-item-2 a',
        burgerMenuIcon: '#sidebarCollapse',
    };


};
module.exports = new header ();