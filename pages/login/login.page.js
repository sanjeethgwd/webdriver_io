import BasePage from '../base.page';
import HomePage from '../home/home.page';
import _elements from './selectors';

class LoginPage extends BasePage {

    open(){
        super.open('login');
    }

    login(username, password){
        _elements.username.setValue(username);
        _elements.password.setValue(password);
        _elements.submit.click();
        _elements.flash.waitForDisplayed();

        if(_elements.flash.getText() === "Your username is invalid!\n×"){
            return this;
        } else {
            return HomePage;
        }
    }
}

export default new LoginPage();