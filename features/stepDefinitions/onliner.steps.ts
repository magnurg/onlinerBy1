import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";



export = function onlinerSteps() {

    //Default cucumber timeout
    this.setDefaultTimeout(60000);

    this.Given(/^I am on Onliner homepage$/, async () => {
        let onlinerURL:string = "https://www.onliner.by/";
        await browser.navigate().to(onlinerURL);
    });

    this.Then(/^I click "Барахолка" in Onliner.by header$/, async () => {
        let barakholkaButton:ElementFinder = await element(by.xpath('//span[contains(text(), "Барахолка") and @class="b-main-navigation__text"]'));
        await browser.wait(ExpectedConditions.visibilityOf(barakholkaButton));
        await barakholkaButton.click();
    });

    this.Then(/^I redirected to  "Барахолка" page$/, async () => {
        let barakholkaURL:string = "https://baraholka.onliner.by/";
        await browser.wait(ExpectedConditions.urlIs(barakholkaURL));
        await ExpectedConditions.urlIs(barakholkaURL);
    });

    this.Given(/^I am on "Барахолка" page of onliner.by$/, async () => {
        let onlinerURL:string = "https://www.onliner.by/";
        let barakholkaButton:ElementFinder = await element(by.xpath('//span[contains(text(), "Барахолка") and @class="b-main-navigation__text"]'));
        await browser.navigate().to(onlinerURL);
        await browser.wait(ExpectedConditions.visibilityOf(barakholkaButton));
        await barakholkaButton.click();
    });

    this.Then(/^I enter "Лопата" in Search field$/, async () => {
        let searchField:ElementFinder = await element(by.xpath('//input[@id="fleaMarketSearchInput"]'));
        await browser.wait(ExpectedConditions.visibilityOf(searchField));
        await searchField.sendKeys("Лопата");
    });

    this.Then(/^I click "Search" button$/, async () => {
        let searchButton:ElementFinder = await element(by.xpath('//button[@value="Найти"]'));
        await browser.wait(ExpectedConditions.visibilityOf(searchButton));
        await searchButton.click();
    });

    this.Then(/^I see following search result headers: "Все", "Продам", "Куплю", "Обмен", "Услуга", "Аренда", "Закрыто"$/, async () => {
        let elemArr:ElementFinder = await element(by.xpath('//ul[@class="b-ba-tabs fleamarket__1"]/child::*'));
        let itemNamesArr:Array<string> = ["Все", "Продам", "Куплю", "Обмен", "Услуга", "Аренда", "Закрыто"];
        
        for (let i = 0; i < elemArr.length; i++) {
            await ExpectedConditions.textToBePresentInElement(elemArr[i], itemNamesArr[i]);
        };
    });
};