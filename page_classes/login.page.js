import BasePage from './base.page';
import HomePage from './home.page';

class LoginPage extends BasePage {

    open(){
        super.open('login');
    }

    get username(){ return $('#username'); }
    get password(){ return $('#password'); }
    get submit(){ return $('[type="submit"]'); }
    get flash(){ return  $('#flash'); }

    login(username, password){
        this.username.setValue(username);
        this.password.setValue(password);
        this.submit.click();
        this.flash.waitForDisplayed();

        if(this.flash.getText() === "Your username is invalid!\n×"){
            return this;
        } else {
            return HomePage;
        }
    }
}

export default new LoginPage();