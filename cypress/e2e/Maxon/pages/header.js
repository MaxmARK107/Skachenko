class header {
    selectors = {
        productsSectionButton: 'button#desktop-nav-dropdown-control-1336336',
        productsSectionSubMenu: 'ul#desktop-nav-submenu-1336336',
        newsSectionButton: '#desktop-nav-dropdown-control-1336349',
        newsSectionSubMenu: '#desktop-nav-submenu-1336349',
        learnSectionButton: '#desktop-nav-dropdown-control-1336354',
        learnSectionSubMenu: '#desktop-nav-submenu-1336354',
        buySection: 'li.inline-block:nth-child(6)',
        headlinesSubSection: '#desktop-nav-submenu-1336349 > li:nth-child(1)',
        mainMenuBlock: '[aria-label="Navigation"] > ul',
    };
selectMenuItem(itemText, subMenuParametr) {
    let getSelectorName;
    if (subMenuParametr == false) {
        getSelectorName = this.selectors.mainMenuBlock;
    } else {  
        if (subMenuParametr == 'PRODUCTS') {
            cy.get(this.selectors.productsSectionButton).click();
            getSelectorName = this.selectors.productsSectionSubMenu;
        } else {
            if (subMenuParametr == 'NEWS') {
                cy.get(this.selectors.newsSectionButton).click();
                getSelectorName = this.selectors.newsSectionSubMenu;
            } else {
                cy.get(this.selectors.learnSectionButton).click();
                getSelectorName = this.selectors.learnSectionSubMenu;
            }   
        }
    };
    cy.get(getSelectorName)
    .contains(itemText)
    .click();    

};
};
module.exports = new header();