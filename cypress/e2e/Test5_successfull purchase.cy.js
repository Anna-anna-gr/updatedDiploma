import registrationPage from '../support/pages/registrationPage'
import loginPage from '../support/pages/loginPage'
import newAddressPage from '../support/pages/newAddressPage'

describe('test5', () => {
    const registrationPageInstance = new registrationPage();
    const loginPageInstance = new loginPage();
    const newAddressPageInstance = new newAddressPage();
    let user;
    
      it('successfully registration', () => {
        cy.log('successfully purchase');
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
        cy.get('.ng-tns-c70-15 .mat-simple-snack-bar-content ').should('be.visible').should('have.text', 'Registration completed successfully. You can now log in.'); 
    
    
        Cypress.env('email', user.email);
        Cypress.env('password', user.password);
        
      });
    
      it('successfull purchase', () => {
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');
        cy.get('[aria-label="Close Welcome Banner"]').click();
    
    
        const email = Cypress.env('email');
        const password = Cypress.env('password');
    
     
        loginPageInstance.getEmailField().type(email);
        loginPageInstance.getPasswordField().type(password);
    
       
        cy.get('#loginButton').click();
    
        cy.url().should('include', '/search');
    
        cy.get('.heading.mat-elevation-z6 ').should('be.visible').should('have.text','All Products');
    
        cy.get('.btn-basket').first().click();
            
        const newAddress = {
              country : `country${Math.floor(Math.random() * 100000)}`,
              name : `name${Math.floor(Math.random() * 100000)}`,
              mobileNumber : `${Math.floor(1000000000 + Math.random() * 9000000000).toString().slice(0, 10)}`,
              zipCode : `${Math.floor(Math.random() * 100000)}`,
              address : `address${Math.floor(Math.random() * 100000)}`,
              city : `city${Math.floor(Math.random() * 100000)}`,
              state : `state${Math.floor(Math.random() * 100000)}`
        }
    
            cy.get('.mat-snack-bar-container',{ timeout: 100000 }).should('be.visible')
            cy.get('.mat-simple-snackbar.ng-star-inserted',{ timeout: 100000 }).should('be.visible').should('contain','Placed Apple Juice (1000ml) into basket.'); 
    
           
            cy.get('[routerlink="/basket"]').click();
        
            cy.get('[data-icon="cart-arrow-down"]').click();
    
            cy.get('.mat-button-wrapper').should('contain','Add New Address')
            cy.get('[routerlink="/address/create"]').click();
        
    
            newAddressPageInstance.fillNewAddressFileds(newAddress)
        
            cy.contains('Submit').click();
        
            cy.get('.mat-radio-inner-circle').first().click();
            cy.contains('Continue').click();
        
            cy.get('.mat-radio-inner-circle').first().click();
            cy.contains('Continue').click({force:true});
    
    
            cy.contains('Add a credit or debit card').click();
    
    
            const Name = 'John Doe';
            cy.contains('Name').parents('span').siblings('input').type(Name);
    
            cy.contains('Card Number').parents('span').siblings('input').type('4242424242424242');;
    
            const randomMonth = Cypress._.random(1, 12);
            cy.contains('Expiry Month').parents('span').siblings('select').select(randomMonth.toString());
    
            cy.contains('Expiry Year').parents('span').siblings('select').select('2080');
    
            cy.get('#submitButton').click();
    
            cy.get('.mat-radio-inner-circle').first().click({force:true});
            cy.contains('Continue').click({force:true});
    
            cy.get('#checkoutButton').click();
    
            cy.contains('Thank you for your purchase!').should('be.visible');
    })
    })
    
  