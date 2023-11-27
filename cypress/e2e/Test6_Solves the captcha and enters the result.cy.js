describe('test6', () => {
    
    it('Solves the captcha and enters the result', () => {
      cy.log('Captcha');
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/contact'); // Замените 'your_website_url' на фактический URL вашего сайта
      cy.get('[aria-label="Close Welcome Banner"]').click();
  
      cy.get('#comment').type('new_comment');
  
      cy.get('#rating').click();
  
      cy.get('[style="margin-bottom: 10px; margin-top: 10px;"]').as('captchaContainer');
  
      cy.get('#captcha').invoke('text').then((captchaText) => {
        console.log('captchaText:', captchaText);
        const [num1, operator1, num2, operator2, num3] = captchaText
          .match(/(\d+|[+\-*\/])/g)
          .map((str) => str.trim());
  
        const result =
          eval(`${parseInt(num1)} ${operator1} ${parseInt(num2)} ${operator2} ${parseInt(num3)}`);

        cy.get('#captchaControl').type(result);

        cy.get('#submitButton').click({force:true}); 
        cy.get('.mat-simple-snack-bar-content').contains('Thank you for your feedback.'); 
      });
    });
  });
  