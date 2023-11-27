export class captcha {
    constructor() {
        this.elements = {};
        this.elements.addComment = '#comment';
        this.elements.selectRating = '#rating';
        this.elements.selectCaptchaConteiner = '[style="margin-bottom: 10px; margin-top: 10px;"]';
        this.elements.captchaText = '#captcha';
        this.elements.captchaResult = '#captchaControl';
        this.elements.submitButton = '#submitButton';
        this.elements.feedbackResult = '.mat-simple-snack-bar-content';
        this.elements.feedbackResultText = 'Thank you for your feedback.';

    }

    getFeedbackResultText () {
        return cy.contains(this.elements.feedbackResultText);
    }

    getFeedbackResult () {
        return cy.get (this.elements.feedbackResult);
    }

    getSubmitButton () {
        return cy.get (this.elements.submitButton);
    }

    getCaptchaResult () {
        return cy.get (this.elements.captchaResult);
    }

    getCaptchaText () {
        return cy.get (this.elements.captchaText);
    }

    getSelectCaptchaConteiner () {
        return cy.get (this.elements.selectCaptchaConteiner);
    }

    getSelectRating () {
        return cy.get (this.elements.selectRating);
    }

    getAddComment () {
        return cy.get (this.elements.addComment);
    }
}

export default captcha;  