export const selectorsOfToolBar = {
    buttonMenuHome: "#mainnav > ul > li:nth-child(2)",
    homeSubMenu: "#mainnav > ul > li:nth-child(2) > ul",
    linkOnHomePage: "#mainnav > ul > li:nth-child(2) > ul > li > a",
    buttonMenuShop: "#mainnav > ul > li:nth-child(3)",
    shopSubMenu: "#mainnav > ul > li:nth-child(3) > ul",
    linkOnShopPage: "#mainnav > ul > li:nth-child(3) > ul > li > a"
};

class toolBar {
    PageOnSectionHome(text) {
        return cy.get(selectorsOfToolBar.linkOnHomePage).contains(text);
    };

    openPageOnSectionHome(namePage) {
        cy.get(selectorsOfToolBar.buttonMenuHome).click();
        cy.get(selectorsOfToolBar.homeSubMenu).invoke('show');
        this.PageOnSectionHome(namePage).click();
    };

    PageOnSectionShop(text) {
        return cy.get(selectorsOfToolBar.linkOnShopPage).contains(text);
    };

    openPageOnSectionShop(namePage) {
        cy.get(selectorsOfToolBar.buttonMenuShop).click();
        cy.get(selectorsOfToolBar.shopSubMenu).invoke('show');
        this.PageOnSectionShop(namePage).click();
    };

} module.exports = new toolBar();