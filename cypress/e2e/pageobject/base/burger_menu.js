export const selectorsOfBurgerMenu = {
    buttonBurgerMenu: ".navbar",
    mainMenu: "#mySidenav",
    buttonBack: "#unset .sidebar-back",
    sideMenu: "#sub-menu",
    sectionOfSideMenu: "#sub-menu > li",
    clothingSubMenu: ".clothing-menu",
    bagsSubMenu: ".opensub1",
    footwearSubMenu: "#sub-menu >li:nth-child(3) > ul",
    accessoriesSubMenu: "#sub-menu >li:nth-child(5) > ul",
    beautycareSubMenu: "#sub-menu >li:nth-child(7) > ul",

};

class toolBar {
    visitMainPage() {
        cy.visit('http://autopract.com/');
    };

    OpenBurgerMenu () {
        cy.get(selectorsOfBurgerMenu.buttonBurgerMenu).click();
        cy.get(selectorsOfBurgerMenu.mainMenu).invoke('show');
    };


} module.exports = new toolBar();