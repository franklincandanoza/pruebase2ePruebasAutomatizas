const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const { assert } = require('assertthat');
const util = require('util');
const fsp = require('fs').promises;
const {By} = require('webdriver');

function takeScreenshot(driver, file){
        return driver.takeScreenshot().then(image => fsp.writeFile(file, image, 'base64'));
    }


Given('I go to {kraken-string}', async function (url) {
           // Write code here that turns the phrase above into concrete actions
            let element = await this.driver.url(url);
          return element;
         });


//When('I enter email {kraken-string}', async function (email) {
When('I enter email {kraken-string} into selector {kraken-string}', async function (email, field) {
	// Write code here that turns the phrase above into concrete actions
	  let element = await this.driver.$(field);
          return await element.setValue(email);
         });

When('I enter password {kraken-string} into selector {kraken-string}', async function (pass, field) {
	// Write code here that turns the phrase above into concrete actions
	  let element = await this.driver.$(field);
          return await element.setValue(pass);
         });

 When('I push login button with selector {kraken-string}', async function (button) {
           // Write code here that turns the phrase above into concrete actions
           let element = await this.driver.$(button);
            return await element.click();
         });

When ('I expect to enter to Ghost home page {kraken-string}', async function (url) {
           // Write code here that turns the phrase above into concrete actions
        let element = await this.driver.getUrl()
        assert.that(element).is.equalTo(url);
});


When('I click on Tags list with selector {kraken-string}', async function (link) {
           // Write code here that turns the phrase above into concrete actions
            let element = await this.driver.$(link);
        //let element = await this.driver.$("a[href='#/tags/']");
       // let element = await this.driver.$("a[contains(text(),'Tags')]");
            return await element.click();
         });

When('I expect to enter to Ghost Tags section {kraken-string}', async function (url) {
           // Write code here that turns the phrase above into concrete actions
           takeScreenshot(this.driver, 'screenshot.png');
            let element = await this.driver.getUrl()
            assert.that(element).is.equalTo(url);
         });

 When('I click on New Tag with selector {kraken-string}', async function (link) {
           // Write code here that turns the phrase above into concrete actions
            let element = await this.driver.$(link);
            return await element.click();
         });


 When('I enter Tag Name {kraken-string} into selector {kraken-string}', async function (name, field) {
           // Write code here that turns the phrase above into concrete actions
           let element = await this.driver.$(field);
           return await element.setValue(name);
         });

 When('I enter Tag Color {kraken-string} into selector {kraken-string}', async function (color, field) {
           // Write code here that turns the phrase above into concrete actions
           let element = await this.driver.$(field);
           return await element.setValue(color);
         });

 When('I enter Tag Slug {kraken-string} into selector {kraken-string}', async function (slug, field) {
           // Write code here that turns the phrase above into concrete actions
           let element = await this.driver.$(field);
           return await element.setValue(slug);
         });
         
 When('I enter Tag Description {kraken-string} into selector {kraken-string}', async function (description, field) {
           // Write code here that turns the phrase above into concrete actions
           let element = await this.driver.$(field);
           return await element.setValue(description);
         });

When('I push Save button with selector {kraken-string}', async function (button) {
           // Write code here that turns the phrase above into concrete actions
            let element = await this.driver.$(button);
            return await element.click();
         });

Then('I go to Ghost Tags section {kraken-string}', async function (url) {
           // Write code here that turns the phrase above into concrete actions
           let element = await this.driver.url(url);
          return element;
         });
         
Then('I expect to stay in Ghost Tags section {kraken-string}', async function (url) {
           // Write code here that turns the phrase above into concrete actions
            let element = await this.driver.getUrl()
            assert.that(element).is.equalTo(url);
         });


Then('I looking for tag {kraken-string} on tags list', async function (tag) {
           // Write code here that turns the phrase above into concrete actions
           let tag_aux =tag.toLowerCase();
           let tag2= `a[href='#/tags/${tag_aux}/']`;
           let element = await this.driver.$(tag2);
           return element;
            //assert.that(element.href).is.equalTo(tag);
         });
         
 Then('I looking for error {kraken-string} on selector {kraken-string}', async function (string, selector) {
           let element = await this.driver.$("p[class='response']");
           let element2 = await element.getText();
           assert.that(element2).is.equalTo(string);
           //return element2;
         });

 When('I do not enter Tag Name', function () {
           // Write code here that turns the phrase above into concrete actions
           return true;
         });


 Then('I expect for error {kraken-string} on selector {kraken-string}', async function (string, selector) {
           let elements = await this.driver.$$("p[class='response']");
           let element2 = await elements[1].getText();
           assert.that(element2).is.equalTo(string);
           
           //return element2;
         });