describe ('Registration check', () => {
    before ('Open Main Page', () => {
        cy.visit('https://sloofi.com/');
        cy.viewport(1300,768);
    });
    it ('Register Buyer by email', () => {
        cy.get('.categories_wrp h3').invoke('text').should('eq', 'All Categories');
        cy.get('.register').click();
        cy.get('#buyer h3').invoke('text').should('eq', 'Register Account');
        cy.get('#buyer #name').type('Max QA', {delay:70}).should('have.value', 'Max QA');
        cy.get('#buyer #email').type('maximskachenko@gmail.com', {delay:70}).should('have.value', 'maximskachenko@gmail.com');
        cy.get('#buyer #password').type('Qwerty123!', {delay:70}).should('have.value', 'Qwerty123!');
        cy.get('#buyer #password-confirm').type('Qwerty123!', {delay:70}).should('have.value', 'Qwerty123!');
        cy.get('#register-button-3').click();
    });
});