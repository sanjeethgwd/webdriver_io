import assert from 'assert';

export default class BasePage {

    open(path){
        browser.url(path);
    }

    checkElementalSelenium(){
        let result = $('=Elemental Selenium').isDisplayed();
        assert.equal(result, true);
    }
}
