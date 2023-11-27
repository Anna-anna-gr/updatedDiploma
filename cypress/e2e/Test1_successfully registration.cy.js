import registrationPage from '../support/pages/registrationPage'

describe('test1', () => {
    const registrationPageInstance = new registrationPage();
    let user;
  
    it('successfully registration', () => {
      cy.log('successfully registration');
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register')
      registrationPageInstance.getCloseWelcomeBanner().click();
  
      const user = {
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
      registrationPageInstance.getSuccessfullMessage().should('be.visible').should('have.text', 'Registration completed successfully. You can now log in.'); // Replace with the actual success message or element
    
  
    })
  })
  
  