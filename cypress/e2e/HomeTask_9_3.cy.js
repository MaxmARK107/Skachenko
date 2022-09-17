describe('First post check on blog page', () => {
    before(() => {
        cy.visit('https://www.beaxy.com/blog/');
        
    });
    it('', () => {
        cy.get('.entry-contents div:nth-child(1) h2').invoke('text').should('eq', 'Introduction to Bitcoin, Cryptocurrency, and Crypto Markets');
        cy.get('.entry-contents div:nth-child(1) img').invoke('attr', 'src').should('eq', 'data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20500%20300%22%3E%3C/svg%3E');      
        //После долгих попыток нагуглить, как протестировать class="nolazy" нашел как проверить значение атрибута src (значение подсказал Cypress) 
    });
});