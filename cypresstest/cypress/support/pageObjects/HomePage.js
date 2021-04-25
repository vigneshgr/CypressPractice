class HomePage{

    getEditName()
    {
        return cy.get(':nth-child(1) > .form-control')
    }

    gettwoWayBinding()
    {
        return cy.get(':nth-child(4) > .ng-valid')
    }

    getradioEnterpreneur()
    {
        return cy.get('#inlineRadio3')
    }

    ShopPagelink()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }
}

export default HomePage;