import BasePage from '../base.page';
import HomePage from '../home/home.page';
import Selectors from './selectors';

class LoginPage extends BasePage {

    open(){
        super.open('login');
    }

    login(username, password){
        Selectors.username.setValue(username);
        Selectors.password.setValue(password);
        Selectors.submit.click();
        Selectors.flash.waitForDisplayed();

        if(Selectors.flash.getText() === "Your username is invalid!\n×"){
            return this;
        } else {
            return HomePage;
        }
    }
}

export default new LoginPage();