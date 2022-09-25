describe ('Check LogIn form on main page', () => {
    before ('Open page', () => {
        cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/');
        cy.viewport(1300,768);
        cy.wait(8000);
    });
    it ('Test', () => {
        cy.contains('Log In').click();
        cy.url().should('eq', 'https://yevheniiahlovatska.editorx.io/web-practice/');
        cy.get('button[data-testid="signUp.switchToSignUp"]', {timeout:7000}).click();
        cy.get('button[data-testid="buttonElement"]', {timeout:10000}).click();
        cy.contains('h1', 'Log In').invoke('text').should('eq', 'Log In');
        cy.get('input[type="email"]').type('alphaitschool@gmail.com', {delay:50}).should('have.value', 'alphaitschool@gmail.com');
        cy.get('input[type="password"]').type('Qwerty123!', {delay:50}).should('have.value', 'Qwerty123!');
        cy.get('[data-testid="buttonElement"]').click();
        cy.get('div[data-testid="siteMembers.container"] span').invoke('text').should('eq', 'Wrong email or password');
    });
});