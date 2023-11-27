export class LoginPage {
    constructor() {
      this.elements = {};
      this.elements.emailField = '#email';
      this.elements.passwordField = '#password';
    }
  
    getEmailField() {
      return cy.get(this.elements.emailField);
    }
  
    getPasswordField() {
      return cy.get(this.elements.passwordField);
    }
  }
  
  export default LoginPage;  
  