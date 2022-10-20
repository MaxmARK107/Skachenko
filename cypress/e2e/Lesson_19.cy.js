describe ('Custom commands', () => {
    before ('Visit site', () => {
        cy.visit ('http://autopract.com');
        cy.wait(2000);
    });
    it('commandTest', () => {
        cy.ClickOnElement('[aria-label="Close"]');
        cy.ClickOnElement('[class="bar-style"]');
    });
    it('Type Text in', () => {
        cy.TypeTextIn('[name="EMAIL"][type="text"]', 'QWert123@gmail.com');
    });
    it.only('Find by text', () => {
        cy.ClickOnElement('[aria-label="Close"]');
        cy.FindByText("Womens Fashion").click();
    });
});
    
