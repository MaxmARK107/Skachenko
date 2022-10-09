describe ('iframe test', () => {
    /*before ('', () => {
        cy.visit('https://demoqa.com/nestedframes');
        cy.wait(5000);
        cy.get('#framesWrapper').scrollIntoView();
    });*/
    it('', () => {
        cy.visit('https://demoqa.com/nestedframes');
        cy.wait(5000);
        cy.get('#framesWrapper').scrollIntoView();
        cy.get('#frame1').eq(4).then(function(iframeParent){
            const iframe = iframeParent.contents().find('body');
            cy.wrap(iframe).find('iframe').then((iframeChild) => {
                cy.wrap(iframeChild).find('p').invoke('text').should('eq', 'Child Iframe');
            });
        });
    });
});