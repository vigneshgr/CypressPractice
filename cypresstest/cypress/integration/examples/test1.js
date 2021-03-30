/// <reference types="Cypress" />

describe ('My first test suite',function()
{

it('my first test case', function(){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    //select a field to give control and type
    cy.get('.search-keyword').type('ca');
    cy.wait(2000)
    //assert to check if four results are shown and assert
    cy.get('.product:visible').should('have.length',4)
    //parent child 
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length',4)
    cy.wait(2000)
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click(). then(function()
    {
        console.log("TEST SYNCHRONOUS");
    })
    //looping throught the array to find the element based on a name
    cy.get('@productLocator').find('.product').each(($e1, index, $list) => {
       const textVeg = $e1.find('h4.product-name').text()
       if (textVeg.includes('Cashews'))
       {
           $e1.find('button').click()
       }

    })
    //asserting the text in logo using chai

    cy.get('.brand').should('have.text',"GREENKART")
    //asynchronous related edge cases that cypress does not support. 
    //The below errors out because cypress does not add Then() properly
    //const logo = cy.get('.brand')
    //cy.log(logo.text())
    const logo = cy.get('.brand').then(function(logoelement)
    {
        cy.log(logoelement.text())
    })
})

})