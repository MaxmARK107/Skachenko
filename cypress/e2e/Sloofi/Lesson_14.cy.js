///<reference types="Cypress"/>
import {faker} from '@faker-js/faker';
//import '@tw/cypress-drag-drop'

describe ('', () => {
    before ('', () => {
        cy.visit('www.testautomationpractice.blogspot.com');        
    });
    xit ('UI-Test', () => {
        cy.get('[onclick="myFunction()"]').click();
        cy.on('window:confirm', (textAlertForm)=> {
            expect(textAlertForm).to.equal('Press a b');
        });
    });
    xit ('UI-Test_1', () => {
        cy.get('#draggable.ui-widget-content').drag('#droppable.ui-widget-header');
        
    });
    it ('UI-Test_2', () => {
        cy.get('h2[class="title"]').eq(4).scrollIntoView();
        cy.get('#slider span').invoke('attr', 'style', 'left: 50%;')
        .should('attr', 'style', 'left: 50%;');        
    });
    it ('UI-Test_3', () => {
        cy.visit('https://mui.com/material-ui/react-slider/');
        cy.get('.Multislider-root span:nth-child(2)')
        .invoke('attr', 'style', 'left: 0%; width: 99%;')
        .should('attr', 'style', 'left: 0%; width: 99%;');
        cy.get('.Multislider-root span:nth-child(3)')
        .invoke('attr', 'style', 'left: 99%;')
        .should('attr', 'style', 'left: 99%;');     
        cy.get('.Multislider-root input')
        .invoke('attr', 'aria-valuenow', '99')
        .invoke('attr', 'value', '99')
        .should('attr', 'aria-valuenow', '99')
        .should('attr', 'value', '99');

    });
    it ('UI-Test_4', () => {
        cy.visit('https://mui.com/material-ui/react-slider/');
        cy.get('.MuiSlider-root span:nth-child(8)')
        .invoke('attr', 'style', 'left: 0%; width: 85%;')
        .should('attr', 'style', 'left: 0%; width: 85%;');
        cy.get('.MuiSlider-root span:nth-child(9)')
        .invoke('attr', 'style', 'left: 85%;')
        .should('attr', 'style', 'left: 85%;');     
        cy.get('.MuiSlider-colorPrimary span input')
        .invoke('attr', 'aria-valuenow', '85')
        .invoke('attr', 'value', '85')
        .should('attr', 'aria-valuenow', '85')
        .should('attr', 'value', '85');

    });
});