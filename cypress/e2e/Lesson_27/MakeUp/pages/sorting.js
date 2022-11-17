
class sorting {
    selectors = {
        nameSortingButton: '.catalog-sort-list > li:nth-child(1) > label',
        priceSortingButton: '.catalog-sort-list > li:nth-child(2) > label',
        popularitySortingButton: '.catalog-sort-list > li:nth-child(3) > label',
        dateSortingButton: '.catalog-sort-list > li:nth-child(4) > label',
        ascSorting: '[for="input-sort-up"]',
        descSorting: '[for="input-sort-down"]',
    };

priceSortingButton() {
    cy.get(this.selectors.priceSortingButton).click()
};

popularitySortingButton() {
    cy.get(this.selectors.popularitySortingButton).click()
};


// checkSortingAsc(firstElementSelector, lastElementSelector) {
    
//     first = cy.get(firstElementSelector)
//     .invoke ('text')
//     .then (parseInt);
//     cy.get(lastElementSelector)
//     .invoke('text')
//     .then (parseInt)
//     .should('be.lessThan', first);
// };

checkSorting(selector) {
    cy.get(selector).eq(4).then( (result) => {
       const resultA = Number(result.text());
       cy.wrap(resultA).as('firstNumer');
    })

    cy.get(selector).eq(3).then(function (result)  {
      const resultB = Number(result.text());
      expect(this.firstNumer).to.be.greaterThan(resultB);
    })
    
};

};
module.exports = new sorting ();