import { Then, When, Given } from '@wdio/cucumber-framework'
import utils from '../../src/utils/reusableFunction'
import locators from '../../src/locators/appLocators'
import formdata from '../resources/logindata.json'
Given("I as user go to the flipcart app", async () => {
    await browser.maximizeWindow();
    await browser.url('/')
    await browser.pause(3000)
})
Then("as user enter Phone Number", async () => {
    await utils.setText(locators.phoneNumInput, formdata.phoneNum);
})
When("Click on forgot password", async () => {
    (await utils.clickbutton(locators.forgotPassword))
    await browser.pause(10000)
})
When("enter a new password", async () => {
    (await utils.clickbutton(locators.NewpasswordInput))
})
Then("click on Login button", async () => {
    (await utils.clickbutton(locators.submitButton))
    await utils.elementDisapearWait(locators.loginPannel, 5000)
})
When("validate the user and logout", async () => {
    await utils.elementDisplayWait(locators.getuserName, 3000)
    const username = (await locators.getuserName).getText();
    console.log("username", username)
    expect(username).toEqual(String(formdata.userName))
})
Then("login again with new password", async () => {
    console.log("--------------yet to implement")
})