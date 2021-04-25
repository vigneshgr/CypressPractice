import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CignaPPloginpage from "../../../support/pageObjects/CignaPPloginpage"

const cignaPPloginpage = new CignaPPloginpage()
//const productPage = new ProductPage()
//const checkoutPage = new CheckoutPage()



Given('I open Cigna patient portal',function() {
  cy.visit(Cypress.env('cignaurl'))    

})

When('the user enters the invalid username',function() {
  cignaPPloginpage.loginusername().type(this.cigdata.invalidusername)
   
 })

And ('the user enters an invalid password',function(){
  cignaPPloginpage.loginpassword().type(this.cigdata.invalidpassword)
})

And  ('the user hits Login button',function(){
  cignaPPloginpage.loginbutton().click()
  cy.pause();
})

Then('the portal throws a error message',() =>{
  cignaPPloginpage.invalidLoginAlert().should('have.text','The username and password combination you entered does not match our records.')
  cy.log("Test case completed")
})

When ('the user clicks the forgot password link',() => {
  cignaPPloginpage.forgotpwdlink().click();
})

Then ('the user is taken to forgot password page',() => {
  cy.url().should('include','consumer/forgotpassword') 
  cy.log("Forgot password page navigation completed")
})

