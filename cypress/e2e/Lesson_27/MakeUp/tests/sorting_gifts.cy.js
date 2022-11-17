/// <reference types = 'Cypress'/>
import categories from '../pages/categories'
import sorting from '../pages/sorting'
import productBlock from '../pages/product_block'

describe ('Sorting gifts', () => {
    before('Visit main page', () => {
        cy.visit('https://makeup.com.ua/ua/');
        cy.get(categories.selectors.giftsButton).click();
    });
    it('Check sorting by Price', () => {
        cy.url({timeout:4000}).should('contain.text', 'categorys');
        sorting.priceSortingButton({timeout:4000}); 
        sorting.checkSorting(productBlock.selectors.lastProductPrice, productBlock.selectors.firstProductPrice);
    });    
    it('Check sorting by Popularity', () => {
        sorting.priceSortingButton({timeout:4000}); 
        sorting.checkSorting(productBlock.selectors.lastProductPrice, productBlock.selectors.firstProductPrice);
    });
        it('Check whether links are correct', () => {
        cy.get('.catalog-sort-list > li:nth-child(4) > label').click();
        cy.url().should('include','#sort=date_modified');
    });
    it.only('Check sorting by favor', () => {
            //cy.url({timeout:4000}).should('contain.text', 'categorys');
            
            sorting.popularitySortingButton({timeout:4000}); 
            sorting.checkSortingAsc(productBlock.selectors.lastProductPopularity, productBlock.selectors.firstProductPopularity);        
    });    
    
});