import loginPage from '../../page_classes/login.page';

describe('Tests related to Login page', () => {
    beforeEach('Navigate to Login page', () => {
        loginPage.open();
    });

    it('Login should failed with invalid credentials.', () => {
        loginPage.login("qwerr","dsdsds");
    });

    it('Login should successful with valid credentials.', () => {
        let homePage = loginPage.login("tomsmith", "SuperSecretPassword!");
        homePage.signout();
    });

});