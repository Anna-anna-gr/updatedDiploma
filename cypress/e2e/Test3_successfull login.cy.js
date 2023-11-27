import registrationPage from '../support/pages/registrationPage'
import loginPage from '../support/pages/loginPage'

describe('test3', () => {
    const registrationPageInstance = new registrationPage();
    const loginPageInstance = new loginPage();
    let user;
    
    it('successfully registration', () => {
      cy.log('successfully login');
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register')
      cy.get('[aria-label="Close Welcome Banner"]').click();
  
      user = {
        email : `testuser${Math.floor(Math.random() * 100000)}@example.com`,
        password : `testpassword${Math.floor(Math.random() * 100000)}`,
        securityAnswer : `Answer${Math.floor(Math.random() * 100000)}`
       }
   
       registrationPageInstance.fillRegistrationFileds(user)
  
      const randomSecurityQuestionIndex = Math.floor(Math.random() * 3); 
      cy.get('#mat-select-0').click();
      cy.get('.mat-option').eq(randomSecurityQuestionIndex).click();
  
      cy.get('#securityAnswerControl').type(user.securityAnswer);
  
      
      cy.get('#registerButton').click();
  
      
      cy.url().should('include', '/login'); 
      cy.get('.ng-tns-c70-15 .mat-simple-snack-bar-content ').should('be.visible').should('have.text', 'Registration completed successfully. You can now log in.'); // Replace with the actual success message or element
  
  
      Cypress.env('email', user.email);
      Cypress.env('password', user.password);
      
    });
  
    it('successfull login', () => {
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');
      cy.get('[aria-label="Close Welcome Banner"]').click();
  
     
      const email = Cypress.env('email'); 
      const password = Cypress.env('password');
  
      loginPageInstance.getEmailField().type(email);
      loginPageInstance.getPasswordField().type(password);
  
      cy.get('#loginButton').click();
  
      cy.url().should('include', '/search');
  
      cy.get('.heading.mat-elevation-z6 ').should('be.visible').should('have.text','All Products');
  
      cy.get('#navbarAccount').click();
      cy.get('#navbarLogoutButton').click();
    });
  });
  
  