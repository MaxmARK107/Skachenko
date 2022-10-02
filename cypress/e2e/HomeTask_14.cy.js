///<reference types="Cypress"/>
describe ('Sliders check', () => {
    before ('', () => {
        cy.visit('https://mui.com/material-ui/react-slider/');
    });
    it ('Small Steps slider check', () => {
        cy.get('div pre').eq(2).scrollIntoView();
        cy.get('[data-index="0"].MuiSlider-thumb').eq(6)
        .invoke('attr', 'style', 'left: 93.3333%;')
        .should('attr', 'style', 'left: 93.3333%;');
        cy.get('[data-index="0"].MuiSlider-thumb input').eq(6)
        .invoke('attr', 'aria-valuenow', '9e-8')
        .should('attr', 'aria-valuenow', '9e-8');
        cy.get('[data-index="0"].MuiSlider-thumb input').eq(6)
        .invoke('attr', 'aria-valuetext', '9e-8°C')
        .should('attr', 'aria-valuetext', '9e-8°C');
        cy.get('[data-index="0"].MuiSlider-thumb input').eq(6)
        .invoke('attr', 'value', '9e-8')
        .should('attr', 'value', '9e-8');
        cy.get('.MuiSlider-root .MuiSlider-track').eq(6)
        .invoke('attr', 'style', 'left: 0%; width: 93.3333%;')
        .should('attr', 'style', 'left: 0%; width: 93.3333%;');
    });
    it ('Custom Marks slider check', () => {
        cy.get('div pre').eq(3).scrollIntoView();
        cy.get('[data-index="0"].MuiSlider-thumb').eq(7)
        .invoke('attr', 'style', 'left: 90%;')
        .should('attr', 'style', 'left: 90%;');
        cy.get('[data-index="0"].MuiSlider-thumb input').eq(7)
        .invoke('attr', 'aria-valuenow', '90')
        .should('attr', 'aria-valuenow', '90');
        cy.get('[data-index="0"].MuiSlider-thumb input').eq(7)
        .invoke('attr', 'aria-valuetext', '90')
        .should('attr', 'aria-valuetext', '90');
        cy.get('[data-index="0"].MuiSlider-thumb input').eq(7)
        .invoke('attr', 'value', '90')
        .should('attr', 'value', '90');
        cy.get('.MuiSlider-root .MuiSlider-track').eq(7)
        .invoke('attr', 'style', 'left: 0%; width: 90%;')
        .should('attr', 'style', 'left: 0%; width: 90%;');
    });
    it ('Range Slider check', () => {
        cy.get('div pre').eq(6).scrollIntoView();
        cy.get('[data-index="1"].MuiSlider-thumb').eq(0)
        .invoke('attr', 'style', 'left: 90%;')
        .should('attr', 'style', 'left: 90%;');
        cy.get('[data-index="1"].MuiSlider-thumb input').eq(0)
        .invoke('attr', 'aria-valuenow', '90')
        .should('attr', 'aria-valuenow', '90');
        cy.get('[data-index="1"].MuiSlider-thumb input').eq(0)
        .invoke('attr', 'aria-valuetext', '90°C')
        .should('attr', 'aria-valuetext', '90°C');
        cy.get('[data-index="1"].MuiSlider-thumb input').eq(0)
        .invoke('attr', 'value', '90')
        .should('attr', 'value', '90');
        cy.get('[data-index="0"].MuiSlider-thumb').eq(10)
        .invoke('attr', 'style', 'left: 60%;')
        .should('attr', 'style', 'left: 60%;');
        cy.get('[data-index="0"].MuiSlider-thumb input').eq(10)
        .invoke('attr', 'aria-valuenow', '60')
        .should('attr', 'aria-valuenow', '60');
        cy.get('[data-index="0"].MuiSlider-thumb input').eq(10)
        .invoke('attr', 'aria-valuetext', '60°C')
        .should('attr', 'aria-valuetext', '60°C');
        cy.get('[data-index="0"].MuiSlider-thumb input').eq(10)
        .invoke('attr', 'value', '60')
        .should('attr', 'value', '60');
        cy.get('.MuiSlider-root .MuiSlider-track').eq(10)
        .invoke('attr', 'style', 'left: 60%; width: 30%;')
        .should('attr', 'style', 'left: 60%; width: 30%;');
    });
    it ('Slider with input field check', () => {
        cy.get('div pre').eq(8).scrollIntoView();
        cy.get('[aria-labelledby="input-slider"] span').eq(2)
        .invoke('attr', 'style', 'left: 80%')
        .should('attr', 'style', 'left: 80%');
        cy.get('[aria-labelledby="input-slider"] span input')
        .invoke('attr', 'aria-valuenow', '80')
        .should('attr', 'aria-valuenow', '80');
        cy.get('[aria-labelledby="input-slider"] span input')
        .invoke('attr', 'value', '80')
        .should('attr', 'value', '80');
        cy.get('[aria-labelledby="input-slider"] span').eq(1)
        .invoke('attr', 'style', 'left: 0%; width: 80%;')
        .should('attr', 'style', 'left: 0%; width: 80%;');
        cy.get('.MuiInputBase-root input').invoke('attr', 'value', '80').should('attr', 'value', '80');
    });
    it ('Music Player (time) slider check', () => {
        cy.get('[id="music-player"]').scrollIntoView();
        cy.get('[data-index="0"].MuiSlider-thumb').eq(19)
        .invoke('attr', 'style', 'left:80%')
        .should('attr', 'style', 'left:80%');
        cy.get('[data-index="0"].MuiSlider-thumb input').eq(19)
        .invoke('attr', 'aria-valuenow', '80')
        .should('attr', 'aria-valuenow', '80');
        cy.get('[data-index="0"].MuiSlider-thumb input').eq(19)
        .invoke('attr', 'value', '80')
        .should('attr', 'value', '80');
        cy.get('.MuiSlider-root .MuiSlider-track').eq(19)
        .invoke('attr', 'style', 'left: 0%;width: 80%')
        .should('attr', 'style', 'left: 0%;width: 80%');
        cy.get('.MuiBox-root p').eq(8)
        .invoke('text', '2:40')
        .should('text', '2:40');
        cy.get('.MuiBox-root p').eq(9)
        .invoke('text', '-0:40')
        .should('text', '-0:40');
    });
});
