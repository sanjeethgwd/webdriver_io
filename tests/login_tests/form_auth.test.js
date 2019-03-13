import assert from 'assert';

describe('Tests related to Home page', () => {

    beforeEach('Navigate to Login page', () => {
        browser.url('/');
        $('[href="/login"]').click();
    });

    it('Login should failed with invalid credentials.', () => {
        $('#username').addValue("invalidUser");
        $('#password').addValue("invalidPwd");
        $('[type="submit"]').click();

        $('#flash').waitForDisplayed();

        let error_msg = $('#flash').getText();
        assert.equal(error_msg,"Your username is invalid!\n×");
    });

    it('Login should successful with valid credentials.', () => {
        $('#username').setValue("tomsmith");
        $('#password').setValue("SuperSecretPassword!");
        $('[type="submit"]').click();

        $('#flash').waitForDisplayed();

        let login_msg = $('#flash').getText();
        assert.equal(login_msg,"You logged into a secure area!\n×");

        $('=Logout').click();
        $('#flash').waitForDisplayed();

        let logout_msg = $('#flash').getText();
        assert.equal(logout_msg,"You logged out of the secure area!\n×");
    });

});