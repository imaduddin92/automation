@Scenario1
Feature: Login, Opening displayed Header Menu, then Logout

@automation
Scenario: User should be able to Login, Opening displayed Header Menu, then Logout

		Given User should be able to Launch Stockbit Website
		When User should be able to see Stockbit Website Homepage
		And User click on Login button in Homepage
		Then User should be able to see Login Page
		When User fill Email or Username field
		And User fill Password field
		And User click on Login button in Login Page
		And User click on Skip button
		Then User should be able to see Stream Page
		When User click on Profile menu
		Then User should be able to see Profile Page
		When User click on Watchlist menu
		Then User should be able to see Watchlist Page
		When User click on Chat menu
		Then User should be able to see Chat Page
		When User click on Chartbit menu
		Then User should be able to see Chartbit Page
		When User click on Orderbook menu
		Then User should be able to see Orderbook Page
		When User click on Academy menu
		Then User should be able to see Academy Page
		When User click on Screener menu
		Then User should be able to see Screener Page
		When User click on Valuation menu
		Then User should be able to see Valuation Page
		When User click on Profile Icon button
		And User click on Logout button
		Then User will be navigated back to Login Page