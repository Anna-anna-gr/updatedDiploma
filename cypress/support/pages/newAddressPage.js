export class newAddressPage {
    constructor() {
      this.elements = {};
      this.elements.country = '[placeholder="Please provide a country."]';
      this.elements.name = '[placeholder="Please provide a name."]';
      this.elements.mobileNumber = '[placeholder="Please provide a mobile number."]';
      this.elements.address = '#address';
      this.elements.city = '[placeholder="Please provide a city."]';
      this.elements.zipCode = '[placeholder="Please provide a ZIP code."]';
      this.elements.state = '[placeholder="Please provide a state."]';
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
  
  export default newAddressPage;  
  