/// <reference types = 'Cypress'/>
import toolBar from '../base/toolBar'
describe ('Toolbar', () => {
    beforeEach ('Visit site', () => {
        toolBar.visitMainPage();
        cy.CloseCookieMessage();
    });
    it ('Home Section Check', () => {
        toolBar.openPageOnSectionHome('flower', false);
        cy.url().should('be.equal', 'http://autopract.com/home/flower');
    });
    it ('Shop Section Check', () => {
        toolBar.openPageOnSectionShop('Infinite Scroll');
        cy.url().should('be.equal', 'http://autopract.com/shop/collection/infinitescroll');
    });
    it ('Products Section Check', () => {
        toolBar.openPageOnSectionProducts('right sidebar', true);
        cy.url().should('be.equal', 'http://autopract.com/shop/product/right/sidebar/trim-dress');
    });
    it ('Features Section Check', () => {
        toolBar.openPageOnSectionFeatures('collection banner');
        cy.url().should('be.equal', 'http://autopract.com/elements/theme/collection-banner');
    });
    it ('Pages Section Check', () => {
        toolBar.openPageOnSectionPages('contact', true, false);
        cy.url().should('be.equal', 'http://autopract.com/pages/contact');
    });
    it ('Blogs Section Check', () => {
        toolBar.openPageOnSectionBlogs('blog details');
        cy.url().should('be.equal', 'http://autopract.com/pages/blog/details');
    });

    
});