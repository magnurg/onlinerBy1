import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";


export = function onlinerSteps() {

    //Default cucumber timeout
    this.setDefaultTimeout(60000);

    this.Given(/^I am on Onliner homepage$/, async () => {
        let onlinerByURL:string = "https://www.onliner.by";
        await browser.navigate().to(onlinerByURL);
    });

    this.Then(/^I click "Барахолка" in Onliner.by header$/, async () => {
        let barakholkaButton:ElementFinder = await element(by.xpath('//.b-main-navigation__text[contains(text(), "Барахолка")]'));
        await barakholkaButton.click();
    });

    this.Then(/^I redirected to  "Барахолка" page$/, async () => {
        let barakholkaURL:string = "https://baraholka.onliner.by/";
        await ExpectedConditions.urlIs(barakholkaURL);
    });
};