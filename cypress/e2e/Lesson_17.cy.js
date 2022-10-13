describe ('Visual Tests', () => {
    it ('HomePage', () => {
        cy.viewport(1950,1600);
        cy.visit('https://www.monobank.ua');
        cy.wait(5000);
        cy.matchImageSnapshot();
    });
    it ('MobileApp_02', () => {
        cy.viewport(1950,1600);
        cy.visit('https://www.monobank.ua');
        cy.get('[class="tab-link"]').eq(0).click();
        cy.get('[class="line-in-view"]', {timeout:5000}).eq(3).should('be.visible');
        cy.get('[class="line-in-view"]').eq(3).matchImageSnapshot();
    });
    it ('MobileApp_03', () => {
        cy.viewport(1950,1600);
        cy.visit('https://www.monobank.ua');
        cy.get('[class="tab-link"]').eq(1).click();
        cy.get('[class="line-in-view"]', {timeout:5000}).eq(3).should('be.visible');
        cy.get('[class="line-in-view"]').eq(3).matchImageSnapshot();
    });
    it.only ('Beaxy HomePage', () => {
        cy.visit('https://www.beaxy.com');
        cy.wait(10000);
        cy.get('[class="home-table"]').invoke('remove');
        cy.get('[class="widget__output-data-wrapp"]').invoke('remove');
        cy.matchImageSnapshot();
    });
});