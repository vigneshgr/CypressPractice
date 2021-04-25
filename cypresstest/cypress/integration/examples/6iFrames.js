/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('frame handling', function(){

it('Handling frames', function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.frameLoaded("#courses-iframe")
    //cy.get('iframe')
    cy.wait(2000);
    cy.iframe().find("a[href*='mentorship']").eq(0).click()
    cy.visit()
 })

})