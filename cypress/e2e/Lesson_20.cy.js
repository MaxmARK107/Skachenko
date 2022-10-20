describe ('', () => {
    it ('', () => {
        cy.visit('http://autopract.com/');
        cy.ClickOnElement('[aria-label="Close"]', {timeout:4000});
        cy.get('#mainnav > ul > li:nth-child(3)').click();
        cy.get('#mainnav > ul > li:nth-child(3) > ul').invoke('show');
        cy.get('.nav-submenu > li > [ng-reflect-router-link="/shop/collection/right/sidebar"]').click();
    });
});