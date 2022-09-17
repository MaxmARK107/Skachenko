describe('empty spec', () => {
 /* before((){    
    cy.log('after');
  });
  after((){
    cy.log('after');
  });
  beforeEach((){
    cy.log('before Each');
  });
  afterEach((){
    cy.log('after Each');
  });
    
  it('passes', () => {    
    cy.visit('https://facebook.com');
    cy.get('h2').invoke('text').should('eq',"Facebook допомагає тримати зв'язок з рідними та близькими.");
    cy.get('[id="email"]').type('alphaitschool@gmail.com');
    cy.get('[name="pass"]').type('Qwerty123!');

    cy.get('[id="email"]').invoke('val').should('eq',"alphaitschool@gmail.com");
    cy.get('[name="pass"]').invoke('val').should('eq',"Qwerty123!");

    cy.get('[name="login"]').click();

    cy.get('#day').select('25');
    cy.get('#month').select('дек');
    cy.get('#year').select('2022');

    cy.get('#day').invoke('val').should('eq', '25');
    cy.get('#month').invoke('val').should('eq', '12');
    cy.get('#year').invoke('val').should('eq', '2022');
  })*/
    before(() => {
    cy.visit('https://facebook.com')
    });
    it (('') {
      cy.visit('https://facebook.com');
    });
  
})