export default class registrationPage{

    constructor () {
        this.elements={};
        this.elements.emailField = '#emailControl';
        this.elements.passwordField = '#passwordControl';
        this.elements.repeatPasswordField = '#repeatPasswordControl';
    }

    getEmailField () {
        return cy.get(this.elements.emailField);
    }

    getPasswordField () {
        return cy.get(this.elements.passwordField);
    }

    getRepeatPasswordField () {
        return cy.get(this.elements.repeatPasswordField);
    }

    fillRegistrationFileds (user) {
        this.getEmailField().type(user.email);
        this.getPasswordField().type(user.password);
        this.getRepeatPasswordField().type(user.password)
    }

}
