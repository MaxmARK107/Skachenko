describe('Calculator check on main page', () => {
    before(() => {
        cy.visit('https://www.beaxy.com');
        cy.viewport(1300,768);
        cy.get('div[class="widget-wrapp__main"]').scrollIntoView({offset:{top:-100}});
        
    });
    it('Calculator default display check', () => {
        cy.get('.custom-widget p:first-child').invoke('text').should('eq', ' I want to spend');
        cy.get('.custom-widget p').contains('to buy').invoke('text').should('eq', ' I want to buy');
        cy.get('div[class="widget__input-data"]',{timeout:3000}).find('input').invoke('val').should('eq', '100');        
        cy.get('div[class="widget__input-data-currency"]').invoke('text').should('eq', 'USD');
        cy.get('.select-block-active-quote__value').invoke('text').should('eq', 'BTC');
        cy.get('.cacl-btn-name-crypto').invoke('text').should('eq', 'Bitcoin');        
        //cy.get('span[class="widget__output-data"]').invoke('text').should('eq', '0.00497196');    
        //Не знаю, где взять текущий курс крипты, чтобы проверить, правильно ли работает калькулятор   
    });
    it('Calculator work check', () => {         
        console.log('BTC currency = ', typeof(currentBTC))
        cy.get('div[class="widget-wrapp__main"]').scrollIntoView({offset:{top:-100}});     
        cy.get('div[class="widget__select-block-active-quote"]').click();
        cy.get('[data-name="ETC"]').click();
        cy.get('.select-block-active-quote__value').invoke('text').should('eq', 'ETC');
        cy.get('div[class="widget__input-data"]').find('input').clear().type('250');
        cy.get('input[class="widget__input-data-value"]').invoke('val').should('eq', '250');
        /* Не знаю как рассчитать результат, чтиобы его сверить); 
        cy.get('span[class="widget__output-data"]').invoke('text').should('eq', */
        cy.get('.widget__select-block .widget__select-block-btn').click();
        cy.url().should('eq', 'https://www.beaxy.com/register/');
        cy.visit('https://www.beaxy.com');
        cy.get('div[class="widget-wrapp__main"]').scrollIntoView({offset:{top:-100}});
        
    });
});