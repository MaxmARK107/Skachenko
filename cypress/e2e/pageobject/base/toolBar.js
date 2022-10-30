export const selectorsOfToolBar = {
    buttonMenuHome: "#mainnav > ul > li:nth-child(2)",
    homeSubMenu: "#mainnav > ul > li:nth-child(2) > ul",
    linkOnHomePage: "#mainnav > ul > li:nth-child(2) > ul > li > a",
    buttonClothingMenu: "#mainnav > ul > li:nth-child(2) > ul > li:nth-child(1)",
    clothingSubMenu: "#mainnav > ul > li:nth-child(2) > ul > li > ul",
    linkOnClothingSubMenu: "#mainnav > ul > li:nth-child(2) > ul > li > ul > li > a",

    buttonMenuShop: "#mainnav > ul > li:nth-child(3)",
    shopSubMenu: "#mainnav > ul > li:nth-child(3) > ul",
    linkOnShopPage: "#mainnav > ul > li:nth-child(3) > ul > li > a",
    
    buttonMenuProducts: "#mainnav > ul > li:nth-child(4)",
    productsSubMenu: "#mainnav > ul > li:nth-child(4) > ul",
    linkOnProductsPage: "#mainnav > ul > li:nth-child(4) > ul > li > a",
    buttonSidebarMenu: "#mainnav > ul > li:nth-child(4) > ul > li:nth-child(1)",
    sidebarSubMenu: "#mainnav > ul > li:nth-child(4) > ul > li > ul",
    linkOnSidebarSubMenu: "#mainnav > ul > li:nth-child(4) > ul > li > ul > li > a",

    buttonMenuFeatures: "#mainnav > ul > li:nth-child(5)",
    featuresSubMenu: ".mega-menu-container",
    linkOnFeaturesPage: ".mega-menu-container > div > div a",

    buttonMenuPages: "#mainnav > ul > li:nth-child(6)",
    pagesSubMenu: "#mainnav > ul > li:nth-child(6) > ul",
    linkOnPagesPage: "#mainnav > ul > li:nth-child(6) > ul > li > a",
    buttonMenuAccount: "#mainnav > ul > li:nth-child(6) > ul > li:nth-child(1)",
    accountSubMenu: "#mainnav > ul > li:nth-child(6) > ul > li:nth-child(1) > ul",
    linkOnAccountPage: "#mainnav > ul > li:nth-child(6) > ul > li:nth-child(1) > ul > li > a",
    buttonMenuCompare: "#mainnav > ul > li:nth-child(6) > ul > li:nth-child(7)",
    compareSubMenu: "#mainnav > ul > li:nth-child(6) > ul > li:nth-child(7) > ul",
    linkOnComparePage: "#mainnav > ul > li:nth-child(6) > ul > li:nth-child(7) > ul > li > a",
    
    buttonMenuBlogs: "#mainnav > ul > li:nth-child(7)",
    blogsSubMenu: "#mainnav > ul > li:nth-child(7) > ul",
    linkOnBlogsPage: "#mainnav > ul > li:nth-child(7) > ul > li > a",
};

class toolBar {
    visitMainPage() {
        cy.visit('http://autopract.com/');
    };

    PageOnSectionHome(text) {
        return cy.get(selectorsOfToolBar.linkOnHomePage).contains(text);
    };
    PageOnSectionClothing(text) {
        return cy.get(selectorsOfToolBar.linkOnClothingSubMenu).contains(text);
    };
    openPageOnSectionHome(namePage, subMenu) {
        cy.get(selectorsOfToolBar.buttonMenuHome).click();
        cy.get(selectorsOfToolBar.homeSubMenu).invoke('show');
        if (subMenu == true) {
            cy.get(selectorsOfToolBar.buttonClothingMenu).click();
            cy.get(selectorsOfToolBar.clothingSubMenu).invoke('show');
            this.PageOnSectionClothing(namePage).click()
        } else {
            this.PageOnSectionHome(namePage).click();}
    };

    PageOnSectionShop(text) {
        return cy.get(selectorsOfToolBar.linkOnShopPage).contains(text);
    };
    openPageOnSectionShop(namePage) {
        cy.get(selectorsOfToolBar.buttonMenuShop).click();
        cy.get(selectorsOfToolBar.shopSubMenu).invoke('show');
        this.PageOnSectionShop(namePage).click();
    };

    PageOnSectionProducts(text) {
        return cy.get(selectorsOfToolBar.linkOnProductsPage).contains(text);
    };
    PageOnSectionSidebar(text) {
        return cy.get(selectorsOfToolBar.linkOnSidebarSubMenu).contains(text);
    };
    openPageOnSectionProducts(namePage, subMenu) {
        cy.get(selectorsOfToolBar.buttonMenuProducts).click();
        cy.get(selectorsOfToolBar.productsSubMenu).invoke('show');
        if (subMenu == true) {
            cy.get(selectorsOfToolBar.buttonSidebarMenu).click();
            cy.get(selectorsOfToolBar.sidebarSubMenu).invoke('show');
            this.PageOnSectionSidebar(namePage).click()
        } else {
            this.PageOnSectionProducts(namePage).click();}
    };

    PageOnSectionFeatures(text) {
        return cy.get(selectorsOfToolBar.linkOnFeaturesPage).contains(text);
    };
    openPageOnSectionFeatures(namePage) {
        cy.get(selectorsOfToolBar.buttonMenuFeatures).click();
        cy.get(selectorsOfToolBar.featuresSubMenu).invoke('show');
        this.PageOnSectionFeatures(namePage).click();
    };

    PageOnSectionPages(text) {
        return cy.get(selectorsOfToolBar.linkOnPagesPage).contains(text);
    };
    PageOnSectionAccount(text) {
        return cy.get(selectorsOfToolBar.linkOnAccountPage).contains(text);
    };
    PageOnSectionCompare(text) {
        return cy.get(selectorsOfToolBar.linkOnComparePage).contains(text);
    };    
    openPageOnSectionPages(namePage, accSubMenu, compSubMenu) {
        cy.get(selectorsOfToolBar.buttonMenuPages).click();
        cy.get(selectorsOfToolBar.pagesSubMenu).invoke('show');
        if (compSubMenu == true) {
            cy.get(selectorsOfToolBar.buttonMenuCompare).click();
            cy.get(selectorsOfToolBar.compareSubMenu).invoke('show');
            this.PageOnSectionCompare(namePage).click()
        } else { if (accSubMenu == true) {
            cy.get(selectorsOfToolBar.buttonMenuAccount).click();
            cy.get(selectorsOfToolBar.accountSubMenu).invoke('show');
            this.PageOnSectionAccount(namePage).click();
            } else {
                this.PageOnSectionPages(namePage).click()
                };
            };
    };

    PageOnSectionBlogs(text) {
        return cy.get(selectorsOfToolBar.linkOnBlogsPage).contains(text);
    };
    openPageOnSectionBlogs(namePage) {
        cy.get(selectorsOfToolBar.buttonMenuBlogs).click();
        cy.get(selectorsOfToolBar.blogsSubMenu).invoke('show');
        this.PageOnSectionBlogs(namePage).click();
    };


} module.exports = new toolBar();