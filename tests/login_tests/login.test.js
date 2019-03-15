import loginPage from '../../pages/login/login.page';

describe('Tests related to Login page', () => {
    beforeEach('Navigate to Login page', () => {
        loginPage.open();
    });

    it('Login should failed with invalid credentials.', () => {
        loginPage.login("qwerr","dsdsds");
        loginPage.checkElementalSelenium();
    });

    it('Login should successful with valid credentials.', () => {
        let homePage = loginPage.login("tomsmith", "SuperSecretPassword!");
        homePage.checkElementalSelenium();
        homePage.signout();
    });

});