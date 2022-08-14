package stepDefinition;

import java.io.IOException;

import org.apache.commons.configuration.ConfigurationException;

import com.photon.UIconstants.EligibleItemsScreenConstant;
import com.photon.UIconstants.HomescreenConstant;
import com.photon.library.CommonLibrary;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EligibleItemsStepDef 
extends CommonLibrary
{

	public EligibleItemsStepDef() throws ConfigurationException, IOException {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Then("^User is navigated to Eligible Items screen$")
	public void user_is_navigated_to_Eligible_Items_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(EligibleItemsScreenConstant.EligibleItemsHeader),"User is navigated to Eligible Items screen");
		CommonLibrary.shortTime();
	}
	
	@When("^User see Redeem reward button$")
	public void user_see_Redeem_reward_button() throws Throwable {
		CommonLibrary.scrollDown();
		CommonLibrary.scrollDown();
		Assert(CommonLibrary.isElementPresentVerification(EligibleItemsScreenConstant.RedeemRewardBtn),"Redeem reward button is displayed");
		CommonLibrary.shortTime();
	}

	@When("^User tap on Redeem reward button$")
	public void user_tap_on_Redeem_reward_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(EligibleItemsScreenConstant.RedeemRewardBtn);
		CommonLibrary.shortTime();
	}

	@Then("^User see Order Pret Pickup option$")
	public void user_see_Order_Pret_Pickup_option() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(EligibleItemsScreenConstant.OrderPretPickupBtn),"Order Pret Pickup option is displayed");
		CommonLibrary.shortTime();
	}

	@Then("^User see Show QR Code in Shop option$")
	public void user_see_Show_QR_Code_in_Shop_option() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(EligibleItemsScreenConstant.ShowQRCodeinShopBtn),"Show QR Code in Shop option is displayed");
		CommonLibrary.shortTime();
	}

	@Then("^User tap on Close option button$")
	public void user_tap_on_Close_option_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(EligibleItemsScreenConstant.CloseBtn);
		CommonLibrary.shortTime();
	}

}
