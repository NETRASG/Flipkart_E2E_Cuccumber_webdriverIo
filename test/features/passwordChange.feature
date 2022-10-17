Feature: Changing the password of Web app

    Scenario Outline: I as use user go to the flipkart application

        Given I as user go to the flipcart app
        Then as user enter Phone Number
        When Click on forgot password
        And enter a new password
        Then click on Login button
        When validate the user and logout
        Then login again with new password

