package stepDefinition;

import java.io.IOException;

import javax.naming.ConfigurationException;

import com.photon.UIconstants.StockbitConstant;
import com.photon.UIconstants.eBayConstant;
import com.photon.library.CommonLibrary;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;

public class Scenario1StepDefinition extends CommonLibrary {

public Scenario1StepDefinition() throws ConfigurationException, IOException, org.apache.commons.configuration.ConfigurationException {
	super();
}

@Given("^User should be able to Launch Stockbit Website$")
public void User_should_be_able_to_Launch_Stockbit_Website() throws Throwable {
	CommonLibrary.App_Launch();
	CommonLibrary.driver.manage().window().maximize();
	
}

@When("^User should be able to see Stockbit Website Homepage$")
public void user_should_be_able_to_see_Stockbit_Website_Homepage() throws Throwable {
	Thread.sleep(2000);
    Assert(CommonLibrary.isElementPresentVerification(StockbitConstant.StockbitLogo), 
    		"Stockbit Website Homepage is displayed");
  
}

@When("^User click on Login button in Homepage$")
public void user_click_on_Login_button_in_Homepage() throws Throwable {
	CommonLibrary.isElementPresentVerifyClick(StockbitConstant.LoginButtonHomepage);
}

@Then("^User should be able to see Login Page$")
public void user_should_be_able_to_see_Login_Page() throws Throwable {
	Thread.sleep(2000);
    Assert(CommonLibrary.isElementPresentVerification(StockbitConstant.LoginPage), 
    		"Login Page is displayed");
}

@When("^User fill Email or Username field$")
public void user_fill_Email_or_Username_field() throws Throwable {
	CommonLibrary.isElementPresentVerifyClick(StockbitConstant.UsernameField);
	Thread.sleep(1000);
	CommonLibrary.clearAndEnterText(StockbitConstant.UsernameField, "imad@mailinator.com");
	Thread.sleep(1000);
}

@When("^User fill Password field$")
public void user_fill_Password_field() throws Throwable {
	CommonLibrary.isElementPresentVerifyClick(StockbitConstant.PasswordField);
	Thread.sleep(1000);
	CommonLibrary.clearAndEnterText(StockbitConstant.PasswordField, "welcome");
	Thread.sleep(1000);
}

@When("^User click on Login button in Login Page$")
public void user_click_on_Login_button_in_Login_Page() throws Throwable {
	CommonLibrary.isElementPresentVerifyClick(StockbitConstant.LoginButton);
}

@When("^User click on Skip button$")
public void user_click_on_Skip_button() throws Throwable {
	Thread.sleep(5000);
	CommonLibrary.isElementPresentVerifyClick(StockbitConstant.SkipButton);
}

@Then("^User should be able to see Stream Page$")
public void user_should_be_able_to_see_Stream_Page() throws Throwable {
	Thread.sleep(4000);
    Assert(CommonLibrary.isElementPresentVerification(StockbitConstant.StreamPage), 
    		"Stream Page is displayed");
}

@When("^User click on Profile menu$")
public void user_click_on_Profile_menu() throws Throwable {
	CommonLibrary.isElementPresentVerifyClick(StockbitConstant.ProfileMenu);
	Thread.sleep(3000);
}

@Then("^User should be able to see Profile Page$")
public void user_should_be_able_to_see_Profile_Page() throws Throwable {
	Thread.sleep(3000);
    Assert(CommonLibrary.isElementPresentVerification(StockbitConstant.ProfilePage), 
    		"Profile Page is displayed");
}

@When("^User click on Watchlist menu$")
public void user_click_on_Watchlist_menu() throws Throwable {
	CommonLibrary.isElementPresentVerifyClick(StockbitConstant.WatchlistMenu);
}

@Then("^User should be able to see Watchlist Page$")
public void user_should_be_able_to_see_Watchlist_Page() throws Throwable {
	Thread.sleep(4000);
    Assert(CommonLibrary.isElementPresentVerification(StockbitConstant.WatchlistPage), 
    		"Watchlist Page is displayed");
}

@When("^User click on Chat menu$")
public void user_click_on_Chat_menu() throws Throwable {
	CommonLibrary.isElementPresentVerifyClick(StockbitConstant.ChatMenu);
}

@Then("^User should be able to see Chat Page$")
public void user_should_be_able_to_see_Chat_Page() throws Throwable {
	Thread.sleep(4000);
    Assert(CommonLibrary.isElementPresentVerification(StockbitConstant.ChatPage), 
    		"Chat Page is displayed");
}

@When("^User click on Chartbit menu$")
public void user_click_on_Chartbit_menu() throws Throwable {
	CommonLibrary.isElementPresentVerifyClick(StockbitConstant.ChartbitMenu);
}

@Then("^User should be able to see Chartbit Page$")
public void user_should_be_able_to_see_Chartbit_Page() throws Throwable {
	Thread.sleep(4000);
    Assert(CommonLibrary.isElementPresentVerification(StockbitConstant.ChartbitPage), 
    		"Chartbit Page is displayed");
}

@When("^User click on Orderbook menu$")
public void user_click_on_Orderbook_menu() throws Throwable {
	CommonLibrary.isElementPresentVerifyClick(StockbitConstant.OrderbookMenu);
}

@Then("^User should be able to see Orderbook Page$")
public void user_should_be_able_to_see_Orderbook_Page() throws Throwable {
	Thread.sleep(4000);
    Assert(CommonLibrary.isElementPresentVerification(StockbitConstant.OrderbookPage), 
    		"Orderbook Page is displayed");
}

@When("^User click on Academy menu$")
public void user_click_on_Academy_menu() throws Throwable {
	CommonLibrary.isElementPresentVerifyClick(StockbitConstant.AcademyMenu);
}

@Then("^User should be able to see Academy Page$")
public void user_should_be_able_to_see_Academy_Page() throws Throwable {
	Thread.sleep(4000);
    Assert(CommonLibrary.isElementPresentVerification(StockbitConstant.AcademyMenu), 
    		"Academy Page is displayed");
}

@When("^User click on Screener menu$")
public void user_click_on_Screener_menu() throws Throwable {
	CommonLibrary.isElementPresentVerifyClick(StockbitConstant.ScreenerMenu);
}

@Then("^User should be able to see Screener Page$")
public void user_should_be_able_to_see_Screener_Page() throws Throwable {
	Thread.sleep(4000);
    Assert(CommonLibrary.isElementPresentVerification(StockbitConstant.ScreenerPage), 
    		"Screener Page is displayed");
}

@When("^User click on Valuation menu$")
public void user_click_on_Valuation_menu() throws Throwable {
	CommonLibrary.isElementPresentVerifyClick(StockbitConstant.ValuationMenu);
}

@Then("^User should be able to see Valuation Page$")
public void user_should_be_able_to_see_Valuation_Page() throws Throwable {
	Thread.sleep(4000);
    Assert(CommonLibrary.isElementPresentVerification(StockbitConstant.ValuationPage), 
    		"Valuation Page is displayed");
}

@When("^User click on Profile Icon button$")
public void user_click_on_Profile_Icon_button() throws Throwable {
	CommonLibrary.isElementPresentVerifyClick(StockbitConstant.ProfileIcon);
}

@When("^User click on Logout button$")
public void user_click_on_Logout_button() throws Throwable {
	CommonLibrary.isElementPresentVerifyClick(StockbitConstant.LogoutButton);
}

@Then("^User will be navigated back to Login Page$")
public void user_will_be_navigated_back_to_Login_Page() throws Throwable {
	Thread.sleep(2000);
    Assert(CommonLibrary.isElementPresentVerification(StockbitConstant.LoginPage), 
    		"Login Page is displayed");
    CommonLibrary.driver.quit();
}


//eBay
//@And("^User click on Shop by Category$")
//public void user_click_on_Shop_by_Category() throws Throwable {
//	Thread.sleep(2000);
//    CommonLibrary.isElementPresentVerifyClick(eBayConstant.ShopByCategory);
//}
//
//@Then("^User should be able to see Shop by Category overlay$")
//public void user_should_be_able_to_see_Shop_by_Category_overlay() throws Throwable {
//	Thread.sleep(2000);
//    Assert(CommonLibrary.isElementPresentVerification(eBayConstant.CellPhonesSmartWatchesMenu), 
//    		"Shop Category Overlay is displayed");
//}
//
//@When("^User click on Cell Phones, Smart Watches & Accessories$")
//public void user_click_on_Cell_Phones_Smart_Watches_Accessories() throws Throwable {
//    CommonLibrary.isElementPresentVerifyClick(eBayConstant.CellPhonesSmartWatchesMenu);
//}
//
//@Then("^User should be able to see Cell Phones, Smart Watches & Accessories page$")
//public void user_should_be_able_to_see_Cell_Phones_Smart_Watches_Accessories_page() throws Throwable {
//	Thread.sleep(2000);
//    Assert(CommonLibrary.isElementPresentVerification(eBayConstant.CellPhonesSmartPhoneMenu), 
//    		"Cell Phones, Smart Watches & Accessories page is displayed");
//}
//
//@When("^User click on Cell Phones & Smartphones in the left hand side$")
//public void user_click_on_Cell_Phones_Smartphones_in_the_left_hand_side() throws Throwable {
//	CommonLibrary.isElementPresentVerifyClick(eBayConstant.CellPhonesSmartPhoneMenu);
//}
//
//@Then("^User should be able to see Cell Phones & Smartphones page$")
//public void user_should_be_able_to_see_Cell_Phones_Smartphones_page() throws Throwable {
//	Thread.sleep(2000);
//    Assert(CommonLibrary.isElementPresentVerification(eBayConstant.AllFilters), 
//    		"Cell Phones & Smartphones page is displayed");
//}
//
//@When("^User click on All Filters$")
//public void user_click_on_All_Filters() throws Throwable {
//	CommonLibrary.isElementPresentVerifyClick(eBayConstant.AllFilters);
//}
//
//@Then("^User should be able to see All Filters overlay$")
//public void user_should_be_able_to_see_All_Filters_overlay() throws Throwable {
//    Assert(CommonLibrary.isElementPresentVerification(eBayConstant.ScreenSize), 
//    		"All Filters overlay is displayed");
//    Thread.sleep(2000);
//}
//
//@When("^User click on Screen Size$")
//public void user_click_on_Screen_Size() throws Throwable {
//	CommonLibrary.isElementPresentVerifyClick(eBayConstant.ScreenSize);
//}
//
//@Then("^User should be able to see Screen Size checkboxes$")
//public void user_should_be_able_to_see_Screen_Size_checkboxes() throws Throwable {
//	Thread.sleep(2000);
//    Assert(CommonLibrary.isElementPresentVerification(eBayConstant.ScreenSizeCheckbox), 
//    		"Screen Size checkboxes is displayed");
//}
//
//@And("^User click on one Screen Size checkboxes$")
//public void user_click_on_one_Screen_Size_checkboxes() throws Throwable {
//	CommonLibrary.isElementPresentVerifyClick(eBayConstant.ScreenSizeCheckbox);
//	Thread.sleep(2000);
//}
//
//@When("^User click on Price$")
//public void user_click_on_Price() throws Throwable {
//	CommonLibrary.isElementPresentVerifyClick(eBayConstant.Price);
//}
//
//@Then("^User should be able to see minimum and maximum Price fields$")
//public void user_should_be_able_to_see_minimum_and_maximum_Price_fields() throws Throwable {
//	Thread.sleep(2000);
//    Assert(CommonLibrary.isElementPresentVerification(eBayConstant.PriceFieldMinimum), 
//    		"Minimum Price fields is displayed");
//    Assert(CommonLibrary.isElementPresentVerification(eBayConstant.PriceFieldMaximum), 
//    		"Maximum Price fields is displayed");
//}
//
//@And("^User fill on minimum and maximum Price fields$")
//public void user_fill_on_minimum_and_maximum_Price_fields() throws Throwable {
//	CommonLibrary.isElementPresentVerifyClick(eBayConstant.PriceFieldMinimum);
//	Thread.sleep(1000);
//	CommonLibrary.clearAndEnterText(eBayConstant.PriceFieldMinimum, "1000");
//	Thread.sleep(1000);
//	CommonLibrary.isElementPresentVerifyClick(eBayConstant.PriceFieldMaximum);
//	Thread.sleep(1000);
//	CommonLibrary.clearAndEnterText(eBayConstant.PriceFieldMaximum, "5000");
//	Thread.sleep(1000);
//}
//
//@When("^User click on Item Location$")
//public void user_click_on_Item_Location() throws Throwable {
//	CommonLibrary.isElementPresentVerifyClick(eBayConstant.ItemLocation);
//}
//
//@Then("^User should be able to see Item Location radio button$")
//public void user_should_be_able_to_see_Item_Location_radio_button() throws Throwable {
//	Thread.sleep(2000);
//    Assert(CommonLibrary.isElementPresentVerification(eBayConstant.ItemLocationRadioButton), 
//    		"Item Location radio button is displayed");
//}
//
//@And("^User click on one Item Location radio button$")
//public void user_click_on_one_Item_Location_radio_button() throws Throwable {
//	CommonLibrary.isElementPresentVerifyClick(eBayConstant.ItemLocationRadioButton);
//}
//
//@When("^User click on Apply button$")
//public void user_click_on_Apply_button() throws Throwable {
//	CommonLibrary.isElementPresentVerifyClick(eBayConstant.ApplyButton);
//}
//
//@Then("^User should be able to see Filtered Search Result page$")
//public void user_should_be_able_to_see_Filtered_Search_Result_page() throws Throwable {
//	Thread.sleep(2000);
//    Assert(CommonLibrary.isElementPresentVerification(eBayConstant.FilteredSearchResult), 
//    		"Filtered Search Result page is displayed");
//    Thread.sleep(2000);
//    CommonLibrary.driver.quit();
//}
//
//@When("^User click on Buying Format$")
//public void user_click_on_Buying_Format() throws Throwable {
//	CommonLibrary.isElementPresentVerifyClick(eBayConstant.BuyingFormat);
//}
//
//@Then("^User should be able to see Buying Format radio button$")
//public void user_should_be_able_to_see_Buying_Format_radio_button() throws Throwable {
//	Thread.sleep(2000);
//    Assert(CommonLibrary.isElementPresentVerification(eBayConstant.BuyingFormatRadioButton), 
//    		"Buying Format radio button is displayed");
//}
//
//@Then("^User click on one Buying Format radio button$")
//public void user_click_on_one_Buying_Format_radio_button() throws Throwable {
//	CommonLibrary.isElementPresentVerifyClick(eBayConstant.BuyingFormatRadioButton);
//}

}

