import loginPage from '../support/pages/loginPage'

describe('test4', () => {
    const loginPageInstance = new loginPage();
  
    it('Unsuccessfull login', () => {
      cy.log('Unsuccessfully login');
     
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');
      cy.get('[aria-label="Close Welcome Banner"]').click();
  
      loginPageInstance.getEmailField().type('example');
      loginPageInstance.getPasswordField().type('123');
  
      cy.get('#loginButton').click();
  
      cy.get('.error.ng-star-inserted').contains('Invalid email or password.');
  
      cy.get('#loginButton').should('not.be.disabled');
      
    });
  });
  
  