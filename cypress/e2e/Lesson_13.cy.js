describe ('Test of iFrame', () => {
    xit ('Test 1', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe');
        cy.viewport(1300,768);
        cy.wait(5000);
        cy.get('#mce_0_ifr').then(function($iframe){
        const iframe = $iframe.contents().find('body');
        cy.wrap(iframe)
        .clear()
        .type('Hello world');
        });
    });
    xit ('Test 2', () => {
        cy.visit('https://elfsight.com/ru/instagram-feed-instashow/create/');
        cy.viewport(1300,768);
        cy.wait(5000);
        cy.get('iframe').then(function($iframe){
            const iframe = $iframe.contents().find('body');
            cy.wrap(iframe).find('.ea-editor-templates-header').then((el) => {
                expect(el.text()).to.be.equal('Select a template to start with');
            });
        });
    });
    xit ('Test 3 - First icon title check', () => {
        cy.visit('https://elfsight.com/ru/instagram-feed-instashow/create/');
        cy.viewport(1300,768);
        cy.wait(5000);
        cy.get('iframe').then(function($iframe){
            const iframe = $iframe.contents().find('body');
            cy.wrap(iframe).find('[title="Slider"] span').then((el) => {
                expect(el.text()).to.contains('\nSlider\n');
            });
        });
    });
    xit ('Test 4 - Button click', () => {
        cy.visit('https://elfsight.com/ru/instagram-feed-instashow/create/');
        cy.viewport(1300,768);
        cy.wait(5000);
        cy.get('iframe').then(function($iframe){
            const iframe = $iframe.contents().find('body');
            cy.wrap(iframe).find('[class*="actions-customize"]').click();
                });
    });
    it ('Test 5 - Cart check', () => {
        cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/product-page/croc-clutch');
        cy.viewport(1300,768);
        cy.wait(10000);
        cy.get('[type="button"]').wait(4000).click();
        cy.get('iframe').then(function($iframe){
            const iframe = $iframe.contents().find('#item-name-0').invoke('text').should('eq', ' Croc Clutch ');
            
                });
    });
});