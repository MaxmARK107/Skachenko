describe('SignIn form test on main page', () => {
    before(() => {
        cy.visit('https://www.beaxy.com/');
        cy.viewport(1300,768);
        cy.get('.modal-cookie-continue>a').click();     
    });
    it('', () => {     
        cy.get('.header-buttons [data-tomodal="login"]').click();
        cy.get('#popUp-login-email').type('alphaitschool@gmail.com').should('eq', 'alphaitschool@gmail.com');
        cy.get('#popUp-login-password').type('Qwerty123!').should('eq', 'Qwerty123!');
        cy.get('#login-checkbox').click();
        cy.get('.popUp-form-login-btn button[type="submit"]').click();
    });
});