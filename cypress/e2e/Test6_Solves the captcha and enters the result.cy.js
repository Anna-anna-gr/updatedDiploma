import captcha from '../support/pages/captchaPage.js'
import registrationPage from '../support/pages/registrationPage'

describe('test6', () => {
  const newCaptchaInstance = new captcha();
  const registrationPageInstance = new registrationPage();
    
    it('Solves the captcha and enters the result', () => {
      cy.log('Captcha');
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/contact'); 
      registrationPageInstance.getCloseWelcomeBanner().click();
  
      newCaptchaInstance.getAddComment().type('new_comment');
  
      newCaptchaInstance.getSelectRating().click();
  
      newCaptchaInstance.getSelectCaptchaConteiner().as('captchaContainer');
  
      newCaptchaInstance.getCaptchaText().invoke('text').then((captchaText) => {
        console.log('captchaText:', captchaText);
        const [num1, operator1, num2, operator2, num3] = captchaText
          .match(/(\d+|[+\-*\/])/g)
          .map((str) => str.trim());
  
        const result =
          eval(`${parseInt(num1)} ${operator1} ${parseInt(num2)} ${operator2} ${parseInt(num3)}`);

          newCaptchaInstance.getCaptchaResult().type(result);

          newCaptchaInstance.getSubmitButton().click({force:true}); 
          newCaptchaInstance.getFeedbackResult().should('contain', newCaptchaInstance.elements.feedbackResultText);
      });
    });
  });
  