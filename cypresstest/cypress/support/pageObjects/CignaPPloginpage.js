class CignaPPloginpage{

    loginusername(){
        return cy.get('#username')
    }

    loginpassword(){
        return cy.get('#password')
    }

    loginbutton(){
        return cy.get('#loginbutton')
    }

    forgotpwdlink(){
        return cy.get('#forgotpassword > a')
    }

    forgotusrlink(){
        return cy.get('#forgotusername > a')
    }

    invalidLoginAlert(){
        return cy.get('#alertmessage')
    }

}

export default CignaPPloginpage