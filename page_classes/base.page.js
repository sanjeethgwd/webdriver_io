class BasePage {
    open(path){
        browser.url(path);
    }
}

export default BasePage;