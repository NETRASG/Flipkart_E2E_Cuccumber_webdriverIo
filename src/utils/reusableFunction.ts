class ReusableFunction {
    async clickbutton(locator: ChainablePromiseElement<WebdriverIO.Element>) {
        await (await locator).click()
    }
    async setText(locator: ChainablePromiseElement<WebdriverIO.Element>, userInput: string) {
        await (await locator).setValue(userInput)
    }

    async elementDisplayWait(locator: ChainablePromiseElement<WebdriverIO.Element>,waitSec:number){
        await (await locator).waitForDisplayed({timeout:waitSec})
    }
    async elementDisapearWait(locator: ChainablePromiseElement<WebdriverIO.Element>,waitSec:number){
    await (await locator).waitForDisplayed({timeout:waitSec,reverse:true})
        
    }
}
export default new ReusableFunction()