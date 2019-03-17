import BasePage from '../base.page';
import LoginPage from '../login/login.page';
import assert from 'assert';
import _elements from "./selectors";

class HomePage extends BasePage {

    signout(){
        _elements.logout.click();
        _elements.flash.waitForDisplayed();
        assert(_elements.flash.getText() === "You logged out of the secure area!\n×");
        return LoginPage;
    }
}

export default new HomePage();