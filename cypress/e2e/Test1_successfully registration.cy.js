import registrationPage from '../support/pages/registrationPage'

describe('test1', () => {
    const registrationPageInstance = new registrationPage();
    let user;
  
    it('successfully registration', () => {
      cy.log('successfully registration');
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register')
      cy.get('[aria-label="Close Welcome Banner"]').click();
  
      const user = {
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
    
  
    })
  })
  
  