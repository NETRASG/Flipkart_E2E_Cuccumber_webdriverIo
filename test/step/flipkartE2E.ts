import { When, Given, Then } from '@wdio/cucumber-framework'
import utils from '../../src/utils/reusableFunction'
import locators from '../../src/locators/appLocators'
import formdata from '../resources/data.json'
import { sizeChart } from '../../src/constants/sizeChart'
Given(/^I as user go to the flipcart app$/, async () => {
    await browser.maximizeWindow();
    await browser.url('/')
    await browser.pause(3000)
})
// Then("Click on Login option" ,async () => {
//     //await utils.clickbutton(locators.loginText)
//     const butt=$("//a[text()='Login']/../..")
//     await (await butt).click()
// })
When(/^Enter phone Number and Password$/, async () => {
    await utils.setText(locators.phoneNumInput, formdata.phoneNum)
    await utils.setText(locators.passwordInput, formdata.password)
})
Then("after login validate the userName", async () => {
    await utils.clickbutton(locators.submitButton)
    await utils.elementDisapearWait(locators.loginPannel, 3000)
    //  await (await locators.getuserName).waitForDisplayed({timeout:5000});
    // const username= (await locators.getuserName).getText();
    // console.log("username",username)
    // expect(username).toEqual(String(formdata.userName))
    // browser.pause(10000)
})
Then("Click search button", async () => {
    await utils.setText(locators.searchfield, formdata.searchProductName)
    await utils.clickbutton(locators.searchButton)
    const waitproductdisplay = await $('._1xHGtK .IRpwTa')
    await utils.elementDisplayWait(waitproductdisplay, 5000)
})
When("Click on one product and switch to new tab", async () => {
    console.log("---------------------------------------------")
    let parentTab = await browser.getWindowHandle();
    console.log("parent", parentTab)
    for (let i = 0; i < (await locators.searchProductList).length; i++) {
        const product = await (locators.searchProductList[i]).getText();
        console.log(product)
        if (product.includes('Men')) {
            await utils.clickbutton(locators.searchProductList[i])
            await browser.pause(5000)
            break;
        }
    }
    let alltabId = await browser.getWindowHandles()
    let childTab: string;
    for (let i = 0; i < (await alltabId).length; i++) {
        if (alltabId[i] != parentTab) {
            childTab = alltabId[i]
            break
        }
    }
    await browser.switchToWindow(childTab)
    await browser.maximizeWindow()
    await browser.pause(3000)
})
When("select size and add product to cart", async () => {
    await browser.pause(3000)

    for (let i = 0; i < (await locators.sizeList).length; i++) {
        const size = (await locators.sizeList[i]).getText();
        console.log(size)
        if ((await size).includes(sizeChart.S) || (await size).includes(sizeChart.M) || (await size).includes(sizeChart.L) || (await size).includes(sizeChart.XL)) {
            // await utils.clickbutton(locators.sizeList[i])
            await (await locators.sizeList[i]).click()
            console.log("size selected ")
            break;
        }
    }
    await utils.elementDisplayWait(locators.addToCart, 10000)
    await utils.clickbutton(locators.addToCart)
    await browser.pause(3000);
})
When("click on place order button", async () => {
    await utils.clickbutton(locators.placeOrderButton)
    await browser.pause(3000);
})
When("click on contineu of order summary", async () => {
    await browser.pause(10000)
    await utils.clickbutton(locators.continueButton)
})
When("make the payment", async () => {
    await utils.elementDisplayWait(locators.paymentPanel, 3000)
    await utils.clickbutton(locators.paymentOption)
    await utils.elementDisplayWait(locators.paymentButton, 3000)
    await utils.clickbutton(locators.paymentButton)
})
