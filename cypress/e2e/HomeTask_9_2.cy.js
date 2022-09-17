describe('Title tests on career page', () => {
    before(() => {
        cy.visit('https://www.beaxy.com/careers/');
    });
    it('', () => {
        cy.get('.career-header .career-header__title').invoke('text').should('eq', ' Join a global team working on the future of finance');
        cy.get('.career-body .career-body__title').invoke('text').should('eq', ' Why join Beaxy?');
        cy.get('.career-footer .career-footer__title').invoke('text').should('eq', ' Want to be part of our team?');
        cy.get('.body-content>div:nth-child(1) .content-item__title').invoke('text').should('eq', ' Bridge gaps');
        cy.get('.body-content>div:nth-child(2) .content-item__title').invoke('text').should('eq', ' Connect globally');
        cy.get('.body-content>div:nth-child(3) .content-item__title').invoke('text').should('eq', ' Build powerfully');
        cy.get('.body-content>div:nth-child(4) .content-item__title').invoke('text').should('eq', ' Value driven');
        cy.get('.body-content>div:nth-child(5) .content-item__title').invoke('text').should('eq', ' Opportunities for everyone');
        cy.get('.body-content>div:nth-child(6) .content-item__title').invoke('text').should('eq', ' Empowering freedom');
    });
});