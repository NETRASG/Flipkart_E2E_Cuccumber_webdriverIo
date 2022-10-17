class AppLocators {
    get loginText() {
        return $("//a[text()='Login']/../..")
    }
    get phoneNumInput() {
        return $("//span[text()='Enter Email/Mobile number']/preceding::input[1]")
    }
    get passwordInput() {
        return $("//span[text()='Enter Password']/preceding::input[1]")
    }
    get NewpasswordInput() {
        return $("//span[text()='Set Password']/preceding::input[1]")
    }
    get submitButton() {
        return $("//button/span[text()='Login']")
    }
    get getuserName() {
        return $("//div[@class='_2Xfa2_'] //child::div[3]")
    }
    get searchfield() {
        return $("//input[@placeholder='Search for products, brands and more']")
    }
    get searchButton() {
        return $(".L0Z3Pu")
    }
    get loginPannel() {
        return $('._2QfC02')
    }
    get searchProductList() {
        return $$('._1xHGtK .IRpwTa');
    }
    get sizeList() {
        return $$("//div[@class='_3wmLAA']/child::div[2] //li")
    }
    get addToCart() {
        return $("//li/button")
    }

    get placeOrderButton() {
        return $("//span[contains(text(),'Place Order')]/..")
    }
    get continueButton() {
        return $("//button[contains(.,'CONTINUE')]")
    }
    get paymentPanel() {
        return $("//span[text()='Payment Options']/../..")
    }
    get paymentOption() {
        return $("//input[@id='PHONEPE']")
    }
    get paymentButton() {
        return $("//label[@for='PHONEPE'] //button")
    }
    //._4rR01T
    get forgotPassword(){
        return $("//span[text()='Forgot?']")
    }



}
export default new AppLocators();