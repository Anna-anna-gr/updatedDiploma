export class LoginPage {
    constructor() {
      this.elements = {};
      this.elements.emailField = '#email';
      this.elements.passwordField = '#password';
      this.elements.loginButton = '#loginButton';
      this.elements.mainPage = '.heading.mat-elevation-z6';
      this.elements.headerAccountButton = '#navbarAccount';
      this.elements.headerAccountLogoutButton = '#navbarLogoutButton';
      this.elements.validationError = '.error.ng-star-inserted';
      this.elements.validationErrorText = 'Invalid email or password.';
    }

    getValidationErrorText () {
      return cy.contains(this.elements.validationErrorText);
  }

    getValidationError() {
      return cy.get(this.elements.validationError);
    }

    getHeaderAccountLogoutButtone() {
      return cy.get(this.elements.headerAccountLogoutButton);
    }

    getHeaderAccountButtone() {
      return cy.get(this.elements.headerAccountButton);
    }

    getMainPage() {
      return cy.get(this.elements.mainPage);
    }
  
    getLoginButton() {
      return cy.get(this.elements.loginButton);
    }

    getEmailField() {
      return cy.get(this.elements.emailField);
    }
  
    getPasswordField() {
      return cy.get(this.elements.passwordField);
    }
  }
  
  export default LoginPage;  
  