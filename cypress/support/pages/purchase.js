export class purchase {
    constructor() {
      this.elements = {};
      this.elements.country = '[placeholder="Please provide a country."]';
      this.elements.name = '[placeholder="Please provide a name."]';
      this.elements.mobileNumber = '[placeholder="Please provide a mobile number."]';
      this.elements.address = '#address';
      this.elements.city = '[placeholder="Please provide a city."]';
      this.elements.zipCode = '[placeholder="Please provide a ZIP code."]';
      this.elements.state = '[placeholder="Please provide a state."]';
      this.elements.addToButton = '.btn-basket';
      this.elements.notification = '.mat-snack-bar-container';
      this.elements.notificationText = '.mat-simple-snackbar.ng-star-inserted';
      this.elements.selectBasket = '[routerlink="/basket"]';
      this.elements.openBasket = '[data-icon="cart-arrow-down"]';
      this.elements.selectAddNewAddress = '.mat-button-wrapper';
      this.elements.createNewAddress = '[routerlink="/address/create"]';
      this.elements.submitButton = 'Submit';
      this.elements.selectAnOption = '.mat-radio-inner-circle';
      this.elements.continueButton = 'Continue';
      this.elements.addCreditCard = 'Add a credit or debit card';
      this.elements.name2 = 'Name';
      this.elements.yourCardNumber = 'Card Number';
      this.elements.expiryMonth = 'Expiry Month';
      this.elements.expiryYear = 'Expiry Year';
      this.elements.checkoutButton = '#checkoutButton';
      this.elements.successPurchase = 'Thank you for your purchase!';
      
    }

    getSuccessPurchase () {
      return cy.contains(this.elements.successPurchase);
  }

    getCheckoutButton () {
      return cy.get (this.elements.checkoutButton);
  }

    getExpiryYear () {
      return cy.contains(this.elements.expiryYear);
  }

  getExpiryMonth () {
    return cy.contains(this.elements.expiryMonth);
}

    getYourCardNumber () {
      return cy.contains(this.elements.yourCardNumber);
  }

    getName2 () {
      return cy.contains(this.elements.name2);
  }

    getAddCreditCard () {
      return cy.contains(this.elements.addCreditCard);
  }

    getContinueButton () {
      return cy.contains(this.elements.continueButton);
  }

    getSelectAnOption () {
      return cy.get(this.elements.selectAnOption);
  }

    getSubmitButton () {
      return cy.contains(this.elements.submitButton);
  }

    getCreateNewAddress() {
      return cy.get(this.elements.createNewAddress);
    }

    getSelectAddNewAddress() {
      return cy.get(this.elements.selectAddNewAddress);
    }

    getOpenBasket() {
      return cy.get(this.elements.openBasket);
    }

    getSelectBasket() {
      return cy.get(this.elements.selectBasket);
    }

    getNotificationText() {
      return cy.get(this.elements.notificationText,{ timeout: 100000 });
    }

    getNotification() {
      return cy.get(this.elements.notification,{ timeout: 100000 });
    }
  
    getAddToButton() {
      return cy.get(this.elements.addToButton);
    }

    getCountry() {
      return cy.get(this.elements.country);
    }
  
    getName() {
      return cy.get(this.elements.name);
    }

    getMobileNumber() {
      return cy.get(this.elements.mobileNumber);
    }
  
    getAddress() {
      return cy.get(this.elements.address);
    }

    getCity() {
      return cy.get(this.elements.city);
    }
  
    getZipCode() {
      return cy.get(this.elements.zipCode);
    }

    getState() {
      return cy.get(this.elements.state);
    }

    fillNewAddressFileds (newAddress) {
      this.getCountry().type(newAddress.country);
      this.getName().type(newAddress.name);
      this.getMobileNumber().type(newAddress.mobileNumber);
      this.getAddress().type(newAddress.address);
      this.getCity().type(newAddress.city);
      this.getZipCode().type(newAddress.zipCode);
      this.getState().type(newAddress.state);
  }

  }
  
  export default purchase;  
  