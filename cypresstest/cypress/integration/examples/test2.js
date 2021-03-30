/// <reference types="Cypress" />

describe ('Full workflow test suite',function()
{

it('my second test case', function(){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    //select a field to give control and type
    cy.get('.search-keyword').type('ca');
    cy.wait(2000)
    cy.get('.products').as('productLocator')
        //looping throught the array to find the element based on a name
    cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
       const textVeg = $e1.find('h4.product-name').text()
       if (textVeg.includes('Cashews'))
       {
           $e1.find('button').click()
       }

    })
    cy.get('.cart-icon > img').click();
    cy.wait(2000)
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains('Place Order').click();
})

})