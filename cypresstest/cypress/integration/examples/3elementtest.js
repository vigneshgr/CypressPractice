describe('test suite for element interaction practice',function(){

    it('validating click of a check box or radio button', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        //selecting multiple checkbox based on value
        cy.get('input[type="checkbox"]').check(['option2','option3'])
    })

    it('validating static and dynamic dropdowns', function(){
        //static dropdown
        cy.get('select').select('option2').should('have.value','option2')
        //dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            if ($el.text() === 'India') {
              // wrap this element so we can
              // use cypress commands on it
              cy.wrap($el).click()
            } 
        
        
        })
        cy.get('#autocomplete').should('have.value','India')
    })

    it('working on visibility property with objects that can be made invisible', function(){
        //static dropdown
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible');

    })

    it('My FirstTest case',function() {
 
        //Iterating Check boxes and select the appropriate option based on text
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
         
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
         
            const text=$e1.text()
            if(text.includes("Python"))
            {
         
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                 const priceText=   price.text()
                 expect(priceText).to.equal('26')
                })
            }
        })

        })
  
})