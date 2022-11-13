/// <reference types = 'Cypress'/>
import buy from '../pages/buy';
import header from '../pages/header'
import cart from '../pages/cart'

describe ('Total feature', () => {
    before('Visit main page', () => {
        cy.visit('/');
        
    });
    it('Total feature check', () => {
        ClickOnElement(header.selectors.buySection);
        clickOnElement(buy.selectors.buyAnnualFirstPlan);
        CheckElementText(cart.selectors.totalPriceInclVatValue, '1.351,77 €');
        
    });
});
