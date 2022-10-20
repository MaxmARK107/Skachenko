describe ('Cookies', () => {
    it ('check cookies', () => {
       cy.viewport(1900,1300);
       cy.visit('https://www.beaxy.com/');
       cy.wait(15000);
       cy.get('.modal-cookie-continue a', {timeout:4000}).click();
       cy.getCookie('beaxy_cookie_notificated', {timeout:4000}).should('have.property', 'value', 'true');
    });
    it ('set cookies', () => {
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.setCookie('alphaitschool', 'ture');
     });
    it ('clear cookies', () => {
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.clearCookies;
     });
    it ('clear 1 cookie', () => {
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.clearCookie('_ga');
    });
    it ('update cookie', () => {
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.get('.modal-cookie-continue a', {timeout:4000}).click();
        cy.clearCookie('beaxy_cookie_notificated').then(function() {
            cy.setCookie('beaxy_cookie_notificated', 'false').then(function() {
                cy.getCookie('beaxy_cookie_notificated', {timeout:4000}).should('have.property', 'value', 'false');
            });
        });
        
    });
    it ('deleteValueCookie', () => {
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.get('.modal-cookie-continue a', {timeout:4000}).click();
        cy.clearCookie('beaxy_cookie_notificated').then(function() {
            cy.getCookie('beaxy_cookie_notificated').should('be.null');
        });
    });
    it ('checkLengthCookie', () => {
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.getCookies().should('have.length', 3);
    });
    it.only ('checkLengthCookie', () => {
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.clearCookies();
        cy.getCookies().should('be.empty');
    });

});