/// <reference types = 'Cypress'/>
import cookie from '../pages/cookie_popup'
import header from '../pages/header'
import news from '../pages/news'

describe ('Total feature', () => {
    before('Visit main page', () => {
        cy.visit('/');
    });
    it('Articles on news page check', () => {
        // cy.get(cookie.selectors.allowAllCookieButton).click();
        // cy.get(header.selectors.newsSectionButton).click();
        // cy.get(header.selectors.headlinesSubSection).click();
        // cy.get(news.selectors.firstArticleBlock).should('be.visible');
        // cy.get(news.selectors.articleBlocksContainer).its('length').should('equal', 24);
        // clickOnElement(cookie.selectors.allowAllCookieButton);
        header.selectMenuItem('HEADLINES', 'NEWS');
        cy.get(news.selectors.firstArticleBlock).should('be.visible');
        cy.get(news.selectors.articleBlocksContainer).its('length').should('equal', 24);
    });    
});