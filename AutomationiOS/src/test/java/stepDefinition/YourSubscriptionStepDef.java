package stepDefinition;

import java.io.IOException;

import org.apache.commons.configuration.ConfigurationException;

import com.photon.UIconstants.AccountScreenConstant;
import com.photon.UIconstants.YourSubscriptionConstant;
import com.photon.library.CommonLibrary;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class YourSubscriptionStepDef 
extends CommonLibrary
{

	public YourSubscriptionStepDef() throws ConfigurationException, IOException {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Then("^User is navigated to Your Subscription screen$")
	public void user_is_navigated_to_Your_Subscription_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(YourSubscriptionConstant.YourSubscriptionScreen), "User is navigated to Your Subscription screen");
		CommonLibrary.shortTime();
	}
	
	@When("^User see Subscription Status$")
	public void user_see_Subscription_Status() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(YourSubscriptionConstant.SubscriptionStatus), "Subscription Status is displayed");
		CommonLibrary.shortTime();
	}

	@When("^User see Manage Subscription$")
	public void user_see_Manage_Subscription() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(YourSubscriptionConstant.ManageSubscription), "Manage Subscription is displayed");
		CommonLibrary.shortTime();
	}

	@When("^User see Next Payment Subscription$")
	public void user_see_Next_Payment_Subscription() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(YourSubscriptionConstant.NextPaymentSubscription), "Next Payment Subscription is displayed");
		CommonLibrary.shortTime();
	}
	
	@When("^User tap on Back button$")
	public void user_tap_on_Back_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(YourSubscriptionConstant.BackButton);
		CommonLibrary.shortTime();
	}
	
	@Then("^User see Cancel Subscription Menu$")
	public void user_see_Cancel_Subscription_Menu() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(YourSubscriptionConstant.CancelSubscriptionMenu), "Cancel Subscription is displayed");
		CommonLibrary.shortTime();
	}

	@When("^User tap on Cancel Subscription Menu$")
	public void user_tap_on_Cancel_Subscription_Menu() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(YourSubscriptionConstant.CancelSubscriptionMenu);
		CommonLibrary.shortTime();
	}

	@Then("^User is navigated to Cancel Subscription screen$")
	public void user_is_navigated_to_Cancel_Subscription_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(YourSubscriptionConstant.CancelSubscriptionScreen), "User is navigated to Cancel Subscription screen");
		CommonLibrary.shortTime();
	}

	@When("^User tap on Something Else option$")
	public void user_tap_on_Something_Else_option() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(YourSubscriptionConstant.SomethingElseButton);
		CommonLibrary.shortTime();
	}

	@When("^User tap on Cancel Subscription button$")
	public void user_tap_on_Cancel_Subscription_button() throws Throwable {
		CommonLibrary.scrollDown();
		CommonLibrary.isElementPresentVerifyClick(YourSubscriptionConstant.CancelSubscriptionButton);
		CommonLibrary.shortTime();
	}

	@Then("^User see Remove Cancellation button$")
	public void user_see_Remove_Cancellation_button() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(YourSubscriptionConstant.RemoveCancellationButton), "Remove Cancellation button is displayed");
		CommonLibrary.shortTime();
	}	
	
	@When("^User tap on Remove Cancellation button$")
	public void user_tap_on_Remove_Cancellation_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(YourSubscriptionConstant.RemoveCancellationButton);
		CommonLibrary.shortTime();
	}

	@When("^User tap on Yes button$")
	public void user_tap_on_Yes_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(YourSubscriptionConstant.YesCancellationButton);
		CommonLibrary.shortTime();
	}

}
