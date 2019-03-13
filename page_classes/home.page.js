import BasePage from './base.page';
import LoginPage from './login.page';
import assert from 'assert';

class HomePage extends BasePage {
    get flash(){ return  $('#flash'); }

    get logout(){ return $('=Logout'); }

    signout(){
        this.logout.click();
        this.flash.waitForDisplayed();
        assert(this.flash.getText() === "You logged out of the secure area!\n×");
        return LoginPage;
    }
}

export default new HomePage();