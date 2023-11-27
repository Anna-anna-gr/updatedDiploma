import registrationPage from '../support/pages/registrationPage'
import loginPage from '../support/pages/loginPage'
import purchase from '../support/pages/purchase'

describe('test5', () => {
    const registrationPageInstance = new registrationPage();
    const loginPageInstance = new loginPage();
    const newPurchaseInstance = new purchase();
    let user;
    
      it('successfully registration', () => {
        cy.log('successfully purchase');
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
        registrationPageInstance.getSuccessfullMessage().should('be.visible').should('have.text', 'Registration completed successfully. You can now log in.'); // Replace with the actual success message or element
    
    
        Cypress.env('email', user.email);
        Cypress.env('password', user.password);
        
      });
    
      it('successfull purchase', () => {
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');
        registrationPageInstance.getCloseWelcomeBanner().click();
    
    
        const email = Cypress.env('email');
        const password = Cypress.env('password');
    
     
        loginPageInstance.getEmailField().type(email);
        loginPageInstance.getPasswordField().type(password);
    
       
        loginPageInstance.getLoginButton().click();
    
        cy.url().should('include', '/search');
    
        loginPageInstance.getMainPage().should('be.visible').should('have.text','All Products');
    
        newPurchaseInstance.getAddToButton().first().click();
            
        const newAddress = {
              country : `country${Math.floor(Math.random() * 100000)}`,
              name : `name${Math.floor(Math.random() * 100000)}`,
              mobileNumber : `${Math.floor(1000000000 + Math.random() * 9000000000).toString().slice(0, 10)}`,
              zipCode : `${Math.floor(Math.random() * 100000)}`,
              address : `address${Math.floor(Math.random() * 100000)}`,
              city : `city${Math.floor(Math.random() * 100000)}`,
              state : `state${Math.floor(Math.random() * 100000)}`
        }
    
            newPurchaseInstance.getNotification().should('be.visible')
            newPurchaseInstance.getNotificationText().should('be.visible').should('contain','Placed Apple Juice (1000ml) into basket.'); 
    
           
            newPurchaseInstance.getSelectBasket().click();
        
            newPurchaseInstance.getOpenBasket().click();
    
            newPurchaseInstance.getSelectAddNewAddress().should('contain','Add New Address')
            newPurchaseInstance.getCreateNewAddress().click();
        
    
            newPurchaseInstance.fillNewAddressFileds(newAddress)
        
            newPurchaseInstance.getSubmitButton().click();

        
            newPurchaseInstance.getSelectAnOption().first().click();
            newPurchaseInstance.getContinueButton().click();
        
            newPurchaseInstance.getSelectAnOption().first().click();
            newPurchaseInstance.getContinueButton().click({force:true});
    
    
            newPurchaseInstance.getAddCreditCard().click();
    
    
            const Name = 'John Doe';
            newPurchaseInstance.getName2().parents('span').siblings('input').type(Name);
    
            newPurchaseInstance.getYourCardNumber().parents('span').siblings('input').type('4242424242424242');;
    
            const randomMonth = Cypress._.random(1, 12);
            newPurchaseInstance.getExpiryMonth().parents('span').siblings('select').select(randomMonth.toString());
    
            newPurchaseInstance.getExpiryYear().parents('span').siblings('select').select('2080');
    
            newPurchaseInstance.getSubmitButton().click();
    
            newPurchaseInstance.getSelectAnOption().first().click({force:true});
            newPurchaseInstance.getContinueButton().click({force:true});
    
            newPurchaseInstance.getCheckoutButton().click();
    
            newPurchaseInstance.getSuccessPurchase().should('be.visible');
    })
    })
    
  