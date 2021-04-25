class CheckoutPage
{
    selectCheckout(){
        return cy.contains('Checkout')
    }

    selectCountry(){
        return cy.get('#country')
    }
    selectCountryAutoSuggest(){
        return cy.get('.suggestions > ul > li > a')
    }
    selectAgreeConditions(){
        return cy.get('#checkbox2')
    }
    selectPurchase(){
        return cy.get('.ng-untouched > .btn')
    }
    getSuccessMessage(){
        return cy.get('.alert')
    }

}

export default CheckoutPage