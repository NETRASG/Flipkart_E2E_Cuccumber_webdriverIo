Feature: Flipkart End to End automation

    @E2E
    Scenario Outline: I as use user go to the flipkart app
        Given I as user go to the flipcart app
        # Then Click on Login option
        When Enter phone Number and Password
        Then after login validate the userName
        Then Click search button
        When Click on one product and switch to new tab
        And select size and add product to cart
        And click on place order button
        And click on contineu of order summary
        Then make the payment






