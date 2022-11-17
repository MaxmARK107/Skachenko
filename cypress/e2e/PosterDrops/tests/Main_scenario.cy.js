describe ('', () => {
    it ('Test', () => {
        cy.visit('https://staging.posterdrops.com/');
        cy.get('.btn-cookie-accept').click();
        cy.get('[data-title="Log In"]').click();
        cy.url().should('eq', 'https://staging.posterdrops.com/login');
        
    });
});