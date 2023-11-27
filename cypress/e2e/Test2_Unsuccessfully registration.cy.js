import registrationPage from '../support/pages/registrationPage'

describe('test2', () => {
    const registrationPageInstance = new registrationPage();
    
    it('Unsuccessfully registration', () => {
      cy.log('Unsuccessfully registration');
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register')
      registrationPageInstance.getCloseWelcomeBanner().click();
      
         
      
      registrationPageInstance.getEmailField().type('invalidemail'); 
      registrationPageInstance.getPasswordField().type('123'); 
      registrationPageInstance.getRepeatPasswordField().type('mismatched'); 
      
        
      registrationPageInstance.getSecurityQuestion().click();
      registrationPageInstance.getSelectSecurityQuestion().eq(0).click();
      
        
      registrationPageInstance.getSecurityAnswer().type('answer');
      
      registrationPageInstance.getEmailError().should('contain', registrationPageInstance.elements.emailErrorContains);
      registrationPageInstance.getPasswordError().should('contain', registrationPageInstance.elements.passwordErrorContains);
      registrationPageInstance.getRetypePasswordError().should('contain',registrationPageInstance.elements.retypePasswordErrorContains);
  
          
          registrationPageInstance.getRegisterButton().should('be.disabled');
  
  
        });
      });
   