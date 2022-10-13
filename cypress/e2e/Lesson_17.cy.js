describe ('Visual Tests', () => {
    it ('Test_01', () => {
        cy.viewport(1950,1600);
        cy.visit('https://www.monobank.ua');
        cy.wait(5000);
        cy.matchImageSnapshot();
    });
});