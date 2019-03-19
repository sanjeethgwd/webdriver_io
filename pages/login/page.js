import HomePage from '../home/home.page';
import SELECTORS from './selectors';

const LoginPage = {

    usernameInput: () => browser.$(SELECTORS.usernameInput),
    passwordInput: () => browser.$(SELECTORS.passwordInput),
    submitButton: () => browser.$(SELECTORS.submitButton),
    flashMessage: () => browser.$(SELECTORS.flashMessage),

    login(username, password){
        this.usernameInput().setValue(username);
        this.passwordInput().setValue(password);
        this.submitButton().click();
        this.flashMessage().waitForDisplayed();

        if(this.flashMessage().getText() === "Your username is invalid!\n×"){
            return this;
        } else {
            return HomePage;
        }
    }
};

export default LoginPage;
