// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('CloseCookieMessage', (elementLocator) => {
    cy.get ('[aria-label="Close"]', {timeout: 2000}).click();
});
Cypress.Commands.add('TypeTextIn', (elementLocator, text) => {
    cy.get (elementLocator, {timeout: 4000})
    .should('be.visible')
    .type(text);
});

/**
 * FindByText
 * @param text
 */
Cypress.Commands.add('FindByText', (text) => {
    cy.get(`//*[contains(text(), ${text})]`);
});

/*Cypress.Commands.add('ClickLinkText', (elementLocator, text) => {
    cy.get(elementLocator).contains(text).click();
});
*/