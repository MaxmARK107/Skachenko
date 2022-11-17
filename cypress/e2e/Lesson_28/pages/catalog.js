import "cypress-real-events/support";
import {catalog_item_seletors} from './selectors';



class catalog {

  itemPrice() {
    let prices = []; 
    cy.get(catalog_item_seletors.productPrice)
    .each(($el) => {
      prices.push($el.text()) 
      cy.log($el.text())
    })
  }
    
} module.exports = new catalog();