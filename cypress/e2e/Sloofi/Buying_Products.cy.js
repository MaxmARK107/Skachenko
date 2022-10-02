describe ('Buying test', () => {
    before ('Authorisation as Buyer', () => {
        cy.visit('https://staging.sloofi.com/');
        cy.get('.sign-wrap span').eq(0).click();
        cy.get('#email').type('maximskachenko@gmail.com');
        cy.get('[type="password"]').type('Qwerty123!');
        cy.get('[type="submit"]').click();
    });
    it ('Collect products to a Cart + Pay', () => {
        cy.get('#search-form #basic-addon2').click();
        cy.get('a[class="btn_bg"]').eq(5).click();
        cy.get('.col-form-label').eq(4).scrollIntoView();
        cy.get('.buyNowButton').click();
        cy.get('.productDetail').then(function(alert){
            const notif = alert.contents().find('.alert');
            cy.wrap(notif).find('h3').contains('Item added to Cart');
        });
        cy.get('#search-form #basic-addon2').click();
        cy.get('[class="pagination"]').scrollIntoView();
        cy.get('.pagination a').eq(2).click();
        cy.url().should('eq', "https://staging.sloofi.com/frontend/search-product?page=2");
        cy.get('a[class="btn_bg"]').eq(18).click();
        cy.get('.col-form-label').eq(4).scrollIntoView();
        cy.get('.buyNowButton').click();
        cy.get('.productDetail').then(function(alert){
            const notif = alert.contents().find('.alert');
            cy.wrap(notif).find('h3').contains('Item added to Cart');
        });
        cy.get('.text-end .btn').click();
        cy.url().should('eq', "https://staging.sloofi.com/frontend/cart");
        cy.get('select[id="country"]').select('Vietnam').should('have.value', 'VN');
        cy.get('select[id="shipping_method"]').select('International EMS').should('have.text', 'International EMS');
        cy.get('[onclick="submit()"]').click();    
        cy.get('h3 a').invoke('text').should('eq', ' Checkout');
        cy.get('input[id="country"]').type('China').should('have.value', 'China');
        cy.get('input[id="address"]').type('Foshan Main St. 215').should('have.value', 'Foshan Main St. 215');
        cy.get('input[id="notes"]').type('Test Purchase').should('have.value', 'Test Purchase');
        cy.get('.pl-4').click();
        cy.get('input[id="shippingfname"]').type('Max').should('have.value', 'Max');
        cy.get('input[id="shippinglname"]').type('QA').should('have.value', 'QA');
        cy.get('input[id="shippingaddress"]').type('Main St. 215').should('have.value', 'Main St. 215');
        cy.get('input[id="shippingaddress2"]').type('Guangdong').should('have.value', 'Guangdong');
        cy.get('input[id="shippingcity"]').type('Foshan').should('have.value', 'Foshan');
        cy.get('input[id="shippingpostcode"]').type('510168').should('have.value', '510168');
        cy.get('a[id="show_payments"]').click();    
        cy.get('#stripe h2').invoke('text').should('eq', 'Card Info');
        cy.get('[id="card_name"]').type('Bill Hickok').should('have.value', 'Bill Hickok');
        cy.get('[id="cardnumber"]').type('4242424242424242').should('have.value', '4242 4242 4242 4242');
        cy.get('[id="expirationdate"]').type('1224').should('have.value', '12/24');
        cy.get('[id="securitycode"]').type('123').should('have.value', '123');
        cy.get('.btn-danger').click();
        cy.get('#swal2-title').invoke('text').should('eq', 'Success');
        cy.get('.swal2-confirm').click();
        cy.get('.cart_widget h5').scrollIntoView();
        cy.get('[id="proceed_button"]').click();
        cy.get('.slolfi_btn').click();
        cy.get('.nk-block-title').invoke('text').should('eq', 'Dashboard');
        cy.get('.nk-tb-list .badge').invoke('text').should('eq', 'completed');

    });
});