describe('test suite for element interaction practice',function(){

    it('popup window handling', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //autohandling of alerts without intervention
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        //popup text validation handling by triggering window alert
        cy.on('window:alert',(str) =>
        {
            //mocha assertions
            expect(str).to.be.equal('Hello , share this practice page and share your knowledge')
        })
        //cy.get('#opentab').invoke('removeAttr','target').click()
     })

     it('child window handling by deleting target attribute using jquery', function(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
          })
          //jquery method to remove attribute
        cy.get('#opentab').invoke('removeAttr','target').click()
     })

     it('back navigation in cypress', function(){
        //redirections is a problem. need to check further
        //cy.forceVisit('https://www.rahulshettyacademy.com'); 
        //cy.forceVisit('https://www.hollisterco.com');
        //cy.get('#site-cookie-banner .secondary-button').first().click();
        //validating url
         cy.url().should('include','shettyacademy')
         cy.go('back')
     })

     it('getting value from web table based on another row element', function(){
        cy.get('table#product td:nth-child(2)').each(($e1, index, $list) => {
            const textCourse = $e1.text()
            if (textCourse.includes('API Testing with Soap'))
            {   
                //text is jquery object hence cannot be directly used with cypress
                cy.get('table#product td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const priceText = price.text();
                    expect(priceText).to.equal('35')
                })
            }
     
         })

     })

     

})
