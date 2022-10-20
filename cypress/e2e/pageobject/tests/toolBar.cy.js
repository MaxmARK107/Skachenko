/// <reference types = 'Cypress'/>
import toolBar from '../base/toolBar'
describe ('Toolbar', () => {
    beforeEach ('Visit site', () => {
        cy.visit('http://autopract.com/');
        cy.ClickOnElement('[aria-label="Close"]', {timeout:4000});
    });
    it ('Home Section', () => {
        toolBar.openPageOnSectionHome('beauty');
    });
    it ('Shop Section', () => {
        toolBar.openPageOnSectionShop('left sidebar');
    });
});