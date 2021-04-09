import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";


export = function onlinerSteps() {

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

    this.Given(/^I am on Onler homepage$/, async () => {
        let onlinerByURL:string = "https://www.onliner.by";
        await browser.navigate().to(onlinerByURL);
    });

    this.Then(/^I click "Барахолка" in Onliner.by header$/, async () => {
        let barakholkaButton:ElementFinder = await element(by.xpath('//span.b-main-navigation__text[contains(twxt(), "Барахолка")]'));
        await barakholkaButton.click();
    });

    this.Then(/^I redirected to  "Барахолка" page$/, async () => {
        let barakholkaURL:string = "https://baraholka.onliner.by/";
        await ExpectedConditions.urlIs(barakholkaURL);
    });
}