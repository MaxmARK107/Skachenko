/// <reference types = 'Cypress'/>
import burger_menu from '../base/burger_menu'
describe ('Burger Menu', () => {
    beforeEach ('Visit site', () => {
        burger_menu.visitMainPage();
        cy.CloseCookieMessage();
    });
    it ('Open burger menu check', () => {
        burger_menu.OpenBurgerMenu();
    });

    
});