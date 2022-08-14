package stepDefinition;

import java.io.IOException;

import org.apache.commons.configuration.ConfigurationException;

import com.photon.UIconstants.HomescreenConstant;
import com.photon.UIconstants.OrderScreenConstant;
import com.photon.UIconstants.WalletScreenConstant;
import com.photon.library.CommonLibrary;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class OrderScreenStepDef 
extends CommonLibrary
{

	public OrderScreenStepDef() throws ConfigurationException, IOException {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@When("^User tap on order tab button$")
	public void user_tap_on_order_tab_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(HomescreenConstant.OrderTabButton);
	    CommonLibrary.shortTime();
	}
	
	@Then("^User is navigated to Order screen$")
	public void user_is_navigated_to_Order_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(OrderScreenConstant.OrderAheadText),"User is navigated to Order screen");
	    CommonLibrary.shortTime();
	}
	
	@When("^User tap on Start Your Order button$")
	public void user_tap_on_Start_Your_Order_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(OrderScreenConstant.StartYourOrderButton);
	    CommonLibrary.shortTime();
	}

	@When("^User tap on Allow While Using App button$")
	public void user_tap_on_Allow_While_Using_App_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(OrderScreenConstant.AllowWhileUsingAppButton);
	    CommonLibrary.shortTime();
	}
	
	@Then("^User tap on Allow Once$")
	public void user_tap_on_Allow_Once() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(OrderScreenConstant.AllowOnceButton);
		CommonLibrary.shortTime();
	}
	
	@Then("^User tap Close button on Error Popup$")
	public void user_tap_Close_button_on_Error_Popup() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(OrderScreenConstant.CloseErrorButton);
		CommonLibrary.shortTime();
	}

	@Then("^User is navigated to Select Shop screen$")
	public void user_is_navigated_to_Select_Shop_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(OrderScreenConstant.SelectShopScreen),"User is navigated to Select  Shop screen");
	    CommonLibrary.shortTime();
	}
	
	@When("^User tap on Order here button$")
	public void user_tap_on_Order_here_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(OrderScreenConstant.OrderHereButton);
	    CommonLibrary.mediumTime();
	}
	
	@Then("^User see Choose Pick up Time screen$")
	public void user_see_Choose_Pick_up_Time_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(OrderScreenConstant.PickupTimeScreen),"Choose Pick up Time screen is displayed");
		CommonLibrary.shortTime();
	}
	
	@When("^User tap on Confirm pickup details button$")
	public void user_tap_on_Confirm_pickup_details_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(OrderScreenConstant.ConfirmPickupButton);
	    CommonLibrary.shortTime();
	}
	
	@Then("^User see Menu on that Shop screen$")
	public void user_see_Menu_on_that_Shop_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(OrderScreenConstant.BreakfastButton),"Menu on that Shop screen is displayed");
		CommonLibrary.shortTime();
	}

	@When("^User tap Breakfast menu$")
	public void user_tap_Breakfast_menu() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(OrderScreenConstant.BreakfastButton);
		CommonLibrary.shortTime();
	}

	@Then("^User see Breakfast Menu screen$")
	public void user_see_Breakfast_Menu_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(OrderScreenConstant.BreakfastScreen),"Breakfast Menu screen is displayed");
		CommonLibrary.shortTime();
	}

	@When("^User tap Chocolate Croissant menu$")
	public void user_tap_Chocolate_Croissant_menu() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(OrderScreenConstant.ChocolateCroissantButton);
		CommonLibrary.shortTime();
	}

	@Then("^User see Chocolate Croissant details screen$")
	public void user_see_Chocolate_Croissant_details_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(OrderScreenConstant.ChocolateCroissantScreen),"Chocolate Croissant details screen is displayed");
		CommonLibrary.shortTime();
	}

	@When("^User tap on Coffee and Tea menu button$")
	public void user_tap_on_Coffee_and_Tea_menu_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(OrderScreenConstant.CoffeeAndTeaMenuButton);
	    CommonLibrary.shortTime();
	}

	@When("^User tap on Latte menu button$")
	public void user_tap_on_Latte_menu_button() throws Throwable {
		CommonLibrary.mediumTime();
		CommonLibrary.isElementPresentVerifyClick(OrderScreenConstant.LatteMenuButton);
	    CommonLibrary.shortTime();
	}

	@When("^User tap on Add to Bag button$")
	public void user_tap_on_Add_to_Bag_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(OrderScreenConstant.AddToBagButton);
	    CommonLibrary.shortTime();
	}

	@When("^User tap on Bag icon$")
	public void user_tap_on_Bag_icon() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(OrderScreenConstant.BagIcon);
	    CommonLibrary.shortTime();
	}
	
	@Then("^User see Your order screen$")
	public void user_see_Your_order_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(OrderScreenConstant.YourOrderScreen),"Your order screen is displayed");
		CommonLibrary.shortTime();
	}

	@When("^User tap on Change Method button$")
	public void user_tap_on_Change_Method_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(OrderScreenConstant.ChangeMethodButton);
	    CommonLibrary.shortTime();
	}
	
	@When("^User tap on Pay Order button$")
	public void User_tap_on_Pay_Order_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(OrderScreenConstant.PayOrderButton);
		CommonLibrary.shortTime();
	}
	
	@When("^User tap on Confirm Pay Order button$")
	public void User_tap_on_Confirm_Pay_Order_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(OrderScreenConstant.ConfirmPayOrderButton);
		CommonLibrary.shortTime();
	}
	
	@Then("^User verify Pick up detail component on Bag changed from “Pickup” to “Pick up”$")
	public void user_verify_Pick_up_detail_component_on_Bag_changed_from_Pickup_to_Pick_up() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(OrderScreenConstant.YourOrderScreen),"Pick up detail component on Bag changed from “Pickup” to “Pick up” is displayed");
		CommonLibrary.shortTime();
	}
	
	@When("^User tap Not Now button$")
	public void user_tap_Not_Now_button() throws Throwable {
		Thread.sleep(5000);
		CommonLibrary.isElementPresentVerifyClick(OrderScreenConstant.NotNowButton);
	}
	
	@Then("^User see you do run into any issues please contact our customer service team copy text$")
	public void user_see_you_do_run_into_any_issues_please_contact_our_customer_service_team_copy_text() throws Throwable {
		CommonLibrary.shortTime();
		CommonLibrary.scrollDown();
		CommonLibrary.scrollDown();
		Assert(CommonLibrary.isElementPresentVerification(OrderScreenConstant.RunAnyIssueContactCustomerServiceText),"you do run into any issues please contact our customer service team copy text is displayed");
		CommonLibrary.shortTime();
	}
	
	@Then("^User tap on Close button on Your Order$")
	public void user_tap_on_Close_button_on_Your_Order() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(OrderScreenConstant.CloseButton);
		CommonLibrary.shortTime();
	}


}
