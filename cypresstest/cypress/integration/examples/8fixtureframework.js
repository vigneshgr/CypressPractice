//import { get } from "cypress/types/lodash"

import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'
import CheckoutPage from '../../support/pageObjects/CheckoutPage'

describe('framework related tests', function(){

    before(function(){
        //setup related code
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })

    })

    it('first test case', function(){
        //creating object for the Home page class imported
        const homePage = new HomePage()
        const productPage = new ProductPage()
        const checkoutPage = new CheckoutPage()
        //validating the fixture data fetch and entry
        cy.visit(Cypress.env('url'))
        homePage.getEditName().type(this.data.name)
        cy.get('select').select(this.data.gender)
        //this is to validate the value of a populated field
        homePage.gettwoWayBinding().should('have.value',this.data.name)
        //this is to validate a attribute
        homePage.getEditName().should('have.attr','minlength', '2')
        homePage.getradioEnterpreneur().should('be.disabled')
        homePage.ShopPagelink().click()
        //validate the product item name and click add to cart based on name 
        //make this a custom command by pasting below content in command.js
        /*cy.get('h4.card-title').each(($el, index, $list) => {
            if($el.text().includes('Blackberry'))
            {
                cy.get('button.btn.btn-info').eq(index).click()
            }
        })
      */ 
        //cy.addProductCart('Blackberry');
        //cy.addProductCart('Nokia Edge');
        //parametrising the tests by taking the same from fixture
        //googled foreach method for operating on array elements
        this.data.productName.forEach(element => cy.addProductCart(element));
        productPage.getCheckout().click();
        var sum = 0
        cy.get('tr td:nth-child(4) strong').each((element,index, $list) => {
            const actualText = element.text()
            //splitting based on space Rs. 50000
            var splitResult = actualText.split(" ")
            //the above will store splitResult[0] = "Rs. " and splitResult[1]=50000
            splitResult = splitResult[1].trim()
            cy.log(splitResult)
            //converting string to number 
            sum = Number(sum) + Number(splitResult)
            cy.log(sum)
            //cy.log(sum) should be moved post promise resolution since above statement is javascript
         }).then(function()
         {
             cy.log(sum)
        })
        var actualSum = 0
            cy.get('h3 strong').then(function(element){
                const actualTotal = element.text()
                actualSum = actualTotal.split(" ")
                actualSum = Number(actualSum[1])
                cy.log(actualSum);
                expect(sum).to.equal(actualSum)
            })
        checkoutPage.selectCheckout().click();
        checkoutPage.selectCountry().type('India');
        checkoutPage.selectCountryAutoSuggest().click()
        checkoutPage.selectAgreeConditions().click({force:true});
        checkoutPage.selectPurchase().click()
        //checkoutPage.getSuccessMessage().should('have.text',' Thank you! Your order will be delivered in next few weeks :-)')
        checkoutPage.getSuccessMessage().then(function(element){
            const actualText = element.text();
            //if(actualText.contains('Success'){
            expect(actualText.includes('Success')).to.be.true
            
        })
    })
    

})