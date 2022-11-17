/* Test Case 
@before
1) Navigate to site
2) Click on gifts in menu
3) Verify that navigation happens

test #1
1) Click on Sorting by Name
2) Verify sorting happens

test #2
1) Click on Sorting by price
2) Verify sorting happens

test #3
1) Click on Sorting by favor
2) Verify sorting happens

test #4
1) Click on Sorting by date
2) Verify sorting happens

test #5
1) Click on Sorting by arrow
2) Verify sorting happens
*/
import "cypress-real-events/support";
import menuPage from '../drivers/menu';
import {sort_form_selectors} from '../pages/selectors';
import sortFormPage from '../pages/sortForm';
import catalog from '../pages/catalog';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Gifts sort', () => {
  before(() => {
    cy.viewport(1200, 980);
    cy.visit('https://makeup.com.ua/');
    menuPage.navigateToMenuItem('Подарунки');
    cy.location('pathname').should('include', 'categorys/442339/');
  })
  

 it.only('work with text', () => {
  cy.get('[class="simple-slider-list"] li:nth-child(2)>div>div>a')
  .then(($element) => {
      const productText = $element.text()
      cy.log('My TEXT ', productText)
  })
});

it ('get element by .eq(0) from array', () => {
    cy.get('[class="simple-slider-list"]>li>div:nth-child(2) div').eq(0)
    .then((element) => {
        const productText = element.text()
        cy.log(productText)
    })
  });

  it.only('custom command getText', () => {
    // cy.getText(catalog_item_seletors.itemProduct).should('eq', 'myexample');
  });

  it.only('expmle with key wrok this and wrap', () => {
    sortFormPage.sortGifts(sort_form_selectors.byPrice);
    catalog.checkSorting('.price_item');
  })
  

//  it.only('Verify sort by name', () => {
//   sortFormPage.sortGifts(byPrice);


//  })

// it('Verify sort by favor', () => {
//   sortFormPage.sortGifts(byFavor);
  
// })  

// it('Verify sort by date', () => {
//   sortFormPage.sortGifts(byDate);
  
// })

// it('Verify sort by arrow up', () => {
//   sortFormPage.sortGifts(byArrowUp);

// })

// it('Verify sort by arrow down', () => {
//   sortFormPage.sortGifts(byArrowDown);

// })
});