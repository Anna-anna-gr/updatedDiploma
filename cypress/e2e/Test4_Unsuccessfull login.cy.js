import loginPage from '../support/pages/loginPage'
import registrationPage from '../support/pages/registrationPage'

describe('test4', () => {
    const loginPageInstance = new loginPage();
    const registrationPageInstance = new registrationPage();
  
    it('Unsuccessfull login', () => {
      cy.log('Unsuccessfully login');
     
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');
      registrationPageInstance.getCloseWelcomeBanner().click();
  
      loginPageInstance.getEmailField().type('example');
      loginPageInstance.getPasswordField().type('123');
  
      loginPageInstance.getLoginButton().click();
  
      loginPageInstance.getValidationError().should('contain', loginPageInstance.elements.validationErrorText);
  
      loginPageInstance.getLoginButton().should('not.be.disabled');
      
    });
  });
  
  