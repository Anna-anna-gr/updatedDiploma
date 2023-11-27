import registrationPage from '../support/pages/registrationPage'
import loginPage from '../support/pages/loginPage'

describe('test3', () => {
    const registrationPageInstance = new registrationPage();
    const loginPageInstance = new loginPage();
    let user;
    
    it('successfully registration', () => {
      cy.log('successfully login');
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register')
      registrationPageInstance.getCloseWelcomeBanner().click();
  
      user = {
        email : `testuser${Math.floor(Math.random() * 100000)}@example.com`,
        password : `testpassword${Math.floor(Math.random() * 100000)}`,
        securityAnswer : `Answer${Math.floor(Math.random() * 100000)}`
       }
   
       registrationPageInstance.fillRegistrationFileds(user)
  
      const randomSecurityQuestionIndex = Math.floor(Math.random() * 3); 
      registrationPageInstance.getSecurityQuestion().click();
      registrationPageInstance.getSelectSecurityQuestion().eq(randomSecurityQuestionIndex).click();
  
      registrationPageInstance.getSecurityAnswer().type(user.securityAnswer);
  
      registrationPageInstance.getRegisterButton().click();
  
      
      cy.url().should('include', '/login'); 
      

      Cypress.env('email', user.email);
      Cypress.env('password', user.password);
      
    });
  
    it('successfull login', () => {
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');
      registrationPageInstance.getCloseWelcomeBanner().click();
  
     
      const email = Cypress.env('email'); 
      const password = Cypress.env('password');
  
      loginPageInstance.getEmailField().type(email);
      loginPageInstance.getPasswordField().type(password);
  
      loginPageInstance.getLoginButton().click();
  
      cy.url().should('include', '/search');
  
      loginPageInstance.getMainPage().should('be.visible').should('have.text','All Products');
  
      loginPageInstance.getHeaderAccountButtone().click();
      loginPageInstance.getHeaderAccountLogoutButtone().click();
    });
  });
  
  