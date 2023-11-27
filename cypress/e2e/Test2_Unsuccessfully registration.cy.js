import registrationPage from '../support/pages/registrationPage'

describe('test2', () => {
    const registrationPageInstance = new registrationPage();
    
    it('Unsuccessfully registration', () => {
      cy.log('Unsuccessfully registration');
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register')
      cy.get('[aria-label="Close Welcome Banner"]').click();
      
         
      
      registrationPageInstance.getEmailField().type('invalidemail'); 
      registrationPageInstance.getPasswordField().type('123'); 
      registrationPageInstance.getRepeatPasswordField().type('mismatched'); 
      
        
          cy.get('#mat-select-0').click();
          cy.get('.mat-option').eq(0).click();
      
        
          cy.get('#securityAnswerControl').type('answer');
      
          cy.get('#mat-error-5').contains('Email address is not valid.');
          cy.get('#mat-error-6').contains('Password must be 5-40 characters long.');
          cy.get('#mat-error-7').contains('Passwords do not match');
  
          
          cy.get('#registerButton').should('be.disabled');
  
  
        });
      });
   