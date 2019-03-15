import BasePage from '../base.page';
import LoginPage from '../login/login.page';
import Selectors from './selectors';
import assert from 'assert';

class HomePage extends BasePage {

    signout(){
        Selectors.logout.click();
        Selectors.flash.waitForDisplayed();
        assert(Selectors.flash.getText() === "You logged out of the secure area!\n×");
        return LoginPage;
    }
}

export default new HomePage();