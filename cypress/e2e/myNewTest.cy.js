describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://facebook.com');
    cy.get('h2').invoke('text').should('eq',"Facebook допомагає тримати зв'язок з рідними та близькими.");
    cy.get('[id="email"]').type('alphaitschool@gmail.com');
    cy.get('[name="pass"]').type('Qwerty123!');

    cy.get('[id="email"]').invoke('val').should('eq',"alphaitschool@gmail.com");
    cy.get('[name="pass"]').invoke('val').should('eq',"Qwerty123!");

    cy.get('[name="login"]').click();
  })
})