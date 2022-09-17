describe('example to-do app', () => {
    before(() => {
        cy.viewport(1300,768);
        cy.visit('https://www.beaxy.com/');
        
        
    });
    it('', () => {
        cy.get('.header-buttons [data-tomodal="login"]').click();
        cy.get('.modal-login.active-modal-popUp .popUp-form-wrapper').invoke('show');
        //cy.get('.modal-login .popUp-form-name').invoke('text').should('eq', 'Login');
        cy.get('#popUp-login-email').type('alphaitschool@gmail.com');
        cy.get('#popUp-login-password').type('Qwerty123!');
        cy.get('#login-checkbox').click();
        cy.get('.popUp-form-login-btn button[type="submit"]').click();
    });
});