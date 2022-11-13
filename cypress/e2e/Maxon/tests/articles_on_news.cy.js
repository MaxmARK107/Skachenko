/// <reference types = 'Cypress'/>
import header from '../pages/header'
import news from '../pages/news'

describe ('Total feature', () => {
    before('Visit main page', () => {
        cy.visit('/');
    });
    it('Articles on news page check', () => {
        clickOnElement(header.selectors.newsSectionButton);
        cy.get(header.selectors.newsDropdown).invoke(visible);
        clickOnElement(header.selectors.headlinesSubSection);
        cy.get(news.selectors.firstArticleBlock).should('be.visible');
    });
    it('Articles on news page check', () => {
        clickOnElement(header.selectors.newsSectionButton);
        cy.get(header.selectors.newsDropdown).invoke(visible);
        clickOnElement(header.selectors.headlinesSubSection);
        cy.get(news.selectors.articleBlocksContainer).its('length').should('equal', 24);
    });
    
});