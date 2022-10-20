describe ('LocalStorage', () => {
    it ('setLocalStorage', () => {
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.setLocalStorage('testKey', 'testValue');
    });
    it.only ('getLocalStorage', () => {
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.setLocalStorage('testKey', 'testValue');
        cy.getLocalStorage('testKey').should('equal', 'testValue');
        cy.clearLocalStorage();
    });

});