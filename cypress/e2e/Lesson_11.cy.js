/*
describe ('Check XTZ / BTC element displayed', () => {
    before ('Open page', () => {
        cy.visit('https://www.beaxy.com/exchange/');
        cy.viewport(1300,768);
    });
    it ('Test', () => {
        cy.get('span[class="view-more-text"]').scrollIntoView({duration:2000}).click();        
        cy.get('span[class="view-more-text"]').scrollIntoView({duration:2000});
        cy.get('[data-pair-name="XTZBTC"] [data-sort-index="0"]>div').invoke('text').should('eq'. '          XTZ / BTC          ');
    });
});
*/
/*
describe('homework-10', () => {
    it('cy.viewport() - set the viewport size and dimension', () => {
      cy.visit('https://www.beaxy.com');

      cy.get('.widget-wrapp__info-text-simple.widget-wrapp__info-text-color').scrollIntoView();
      cy.wait(5000);
      cy.get('input.widget__input-data-value').focus().clear();
      cy.get('input.widget__input-data-value').type(45, {delay: 15});
      cy.get('.widget__select-block .widget__select-block-active-quote').click();
      cy.get('.widget__select-block-active-quote .widget__select-block-drop-list').scrollTo('center');
      cy.get('[data-currentname="ETHUSD"]').click();
      cy.get('.select-block-active-quote__value').invoke('text').should('eq', 'ETH');
      cy.get('.widget__output-data-wrapp .widget__output-data').should('have.text', '0.03309748');
    });
  });
*/

describe ('Check register feature on main page', () => {
    before ('Open page', () => {
        cy.visit('https://www.beaxy.com');
        cy.viewport(1300,768);
    });
    it ('Test', () => {
        cy.get('.form-send-input-wrap.form-send__email').first().find('input').click();
        //type('alphaitschool@gmail.com').should('visible', 'alphaitschool@gmail.com');        
        cy.get('[data-error="Email is required"]>button').click();        
    });
});