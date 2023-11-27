export default class registrationPage{

    constructor () {
        this.elements={};
        this.elements.emailField = '#emailControl';
        this.elements.passwordField = '#passwordControl';
        this.elements.repeatPasswordField = '#repeatPasswordControl';
        this.elements.closeWelcomeBanner = '[aria-label="Close Welcome Banner';
        this.elements.securityQuestion = '#mat-select-0';
        this.elements.selectSecurityQuestion = '.mat-option';
        this.elements.securityAnswer = '#securityAnswerControl';
        this.elements.registerButton = '#registerButton';
        this.elements.emailError= '#mat-error-5'
        this.elements.passwordError = '#mat-error-6'
        this.elements.retypePasswordError = '#mat-error-7'
        this.elements.emailErrorContains= 'Email address is not valid.'
        this.elements.passwordErrorContains = 'Password must be 5-40 characters long.'
        this.elements.retypePasswordErrorContains = 'Passwords do not match'
        this.elements.successfullMessage = '.ng-tns-c70-15 .mat-simple-snack-bar-content '
    }
    

    getRetypePasswordErrorContains () {
        return cy.contains(this.elements.retypePasswordErrorContains);
    }

    getPasswordErrorContains () {
        return cy.contains(this.elements.passwordErrorContains);
    }

    getEmailErrorContains () {
        return cy.contains(this.elements.emailErrorContains);
    }

    getRetypePasswordError () {
        return cy.get(this.elements.retypePasswordError);
    }

    getPasswordError () {
        return cy.get(this.elements.passwordError);
    }

    getEmailError () {
        return cy.get(this.elements.emailError);
    }

    getSuccessfullMessage () {
        return cy.get(this.elements.successfullMessage);
    }

    getRegisterButton () {
        return cy.get(this.elements.registerButton);
    }

    getSecurityAnswer () {
        return cy.get(this.elements.securityAnswer);
    }

    getSelectSecurityQuestion () {
        return cy.get(this.elements.selectSecurityQuestion);
    }

    getSecurityQuestion () {
        return cy.get(this.elements.securityQuestion);
    }

    getCloseWelcomeBanner () {
        return cy.get(this.elements.closeWelcomeBanner);
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