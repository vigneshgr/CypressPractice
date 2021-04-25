beforeEach(function(){
    cy.fixture('cignalogindata').then(function(cigdata)
    {
        this.cigdata=cigdata
    }) 
})