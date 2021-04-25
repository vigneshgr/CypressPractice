describe('complex actions suite',function(){
    it('mousehover function',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')
    })

    it('grabbing attribute value like links', function(){

        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
          })
        cy.get('#opentab').then(function(foo){
            const url = foo.prop('href')
            cy.visit(url)
        })
        //prop('href')

    })
})