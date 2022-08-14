package stepDefinition;

import java.io.IOException;

import org.apache.commons.configuration.ConfigurationException;

import com.photon.UIconstants.CreateAccountScreen;
import com.photon.UIconstants.EnterEmailScreenConstant;
import com.photon.UIconstants.HomescreenConstant;
import com.photon.UIconstants.WalletScreenConstant;
import com.photon.library.CommonLibrary;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WalletScreenStepDef extends CommonLibrary{

	public WalletScreenStepDef() throws ConfigurationException, IOException {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@When("^User tap on wallet tab button$")
	public void User_tap_on_wallet_tab_button() throws Throwable {
	    CommonLibrary.isElementPresentVerifyClick(HomescreenConstant.WalletTabButton);
	    CommonLibrary.shortTime();
	}

	@When("^User tap on Pret coffee subscription$")
	public void user_tap_on_Pret_coffee_subscription() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.PretCoffeeSubsMonthText);
		CommonLibrary.longTime();
	}

	@When("^User choose Classic$")
	public void user_choose_Classic() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.ClassicButton);
	}

	@When("^User choose New york$")
	public void user_choose_New_york() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.NewYorkRadioButton);
	}

	@When("^User tap continue button on your subscription screen$")
	public void user_tap_continue_button_on_your_subscription_screen() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.ContinueButtonSubs);
		CommonLibrary.mediumTime();
	}

	@Then("^User see Your Order Screen$")
	public void user_see_Your_Order_Screen() throws Throwable {
		CommonLibrary.longTime();
	    Assert(CommonLibrary.isElementPresentVerification(WalletScreenConstant.YourOrderTitleText),"Your order screen is displayed");
	    CommonLibrary.shortTime();
	}

	@Then("^User see legal copy text$")
	public void user_see_legal_copy_text() throws Throwable {
		 Assert(CommonLibrary.isElementPresentVerification(WalletScreenConstant.LegalCopyText),"Legal copy text is displayed");
		    CommonLibrary.shortTime();
	}
	
	@Then("^User back to homescreen from wallet screen$")
	public void user_back_to_homescreen_from_wallet_screen() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.BackButtonToYourSubsScreen);
		CommonLibrary.shortTime();
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.CloseButtonYourSubsScreen);
		CommonLibrary.shortTime();
	}
	
	@Then("^User is navigated to Wallet screen$")
	public void user_is_navigated_to_Wallet_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(WalletScreenConstant.WalletScreen),"User is navigated to Wallet screen");
	    CommonLibrary.shortTime();
	}

	@Then("^User see copy text below the QR code$")
	public void user_see_copy_text_below_the_QR_code() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(WalletScreenConstant.OneCodeText),"User see copy text below QR code");
	    CommonLibrary.shortTime();
	}
	
	@When("^User see Compare Plan button$")
	public void user_see_Compare_Plan_button() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(WalletScreenConstant.ComparePlanButton),"User see Compare Plan button");
	    CommonLibrary.shortTime();
	}

	@When("^User tap on Compare Plan button$")
	public void user_tap_on_Compare_Plan_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.ComparePlanButton);
		CommonLibrary.shortTime();
	}

	@Then("^User is navigated to Compare Plan screen$")
	public void user_is_navigated_to_Compare_Plan_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(WalletScreenConstant.ComparePlanScreen),"User is navigated to Compare Plan screen");
	    CommonLibrary.shortTime();
	}
	
	@When("^User tap Payment Method$")
	public void user_tap_Payment_Method() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.ChangeMethodButton);
		CommonLibrary.mediumTime();
	}
	
	@Then("^User see Payment Methods overlay$")
	public void user_see_Payment_Methods_overlay() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(WalletScreenConstant.PaymentMethodsOverlay),"Payment Methods overlay is displayed");
	    CommonLibrary.shortTime();
	}

	@When("^User tap Close button on Payment Methods overlay$")
	public void user_tap_Close_button_on_Payment_Methods_overlay() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.CloseButton);
		CommonLibrary.mediumTime();
	}

	@When("^User tap Credit Card button$")
	public void user_tap_Credit_Card_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.CreditCardButton);
		CommonLibrary.mediumTime();
	}
	
	@Then("^User is navigated to Credit Card overlay$")
	public void user_is_navigated_to_Credit_Card_overlay() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(WalletScreenConstant.CreditCardNumberTextfield),"User is navigated to Credit Card overlay");
	    CommonLibrary.shortTime();
	}

	@When("^User enter Credit Card number in Credit Card number textfield$")
	public void user_enter_Credit_Card_number_in_Credit_Card_number_textfield() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.CreditCardNumberTextfield);
		CommonLibrary.clearAndEnterText(WalletScreenConstant.CreditCardNumberTextfield, "5555444433331111");
		CommonLibrary.shortTime();
	}

	@When("^User enter CVV number in CVV textfield$")
	public void user_enter_CVV_number_in_CVV_textfield() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.CVVTextfield);
		CommonLibrary.clearAndEnterText(WalletScreenConstant.CVVTextfield, "737");
		CommonLibrary.shortTime();
	}
	
	@When("^User enter Expiry date in Expiry date textfield$")
	public void user_enter_Expiry_date_in_Expiry_date_textfield() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.ExpiryDateTextfield);
		CommonLibrary.clearAndEnterText(WalletScreenConstant.ExpiryDateTextfield, "0330");
		CommonLibrary.shortTime();
	}

	@When("^User enter Billing Address US in Billing Address textfield$")
	public void user_enter_Billing_Address_US_in_Billing_Address_textfield() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.StreetTextfield);
		CommonLibrary.clearAndEnterText(WalletScreenConstant.StreetTextfield, "731 2nd Ave");
		CommonLibrary.shortTime();
		
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.CityTextfield);
		CommonLibrary.clearAndEnterText(WalletScreenConstant.CityTextfield, "Fairbanks");
		CommonLibrary.shortTime();
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.NextBtn);


		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.PostalCodeTextfield);
		CommonLibrary.clearAndEnterText(WalletScreenConstant.PostalCodeTextfield, "35013");
		CommonLibrary.shortTime();
	}
	
	@When("^User enter Billing Address UK in Billing Address textfield$")
	public void user_enter_Billing_Address_UK_in_Billing_Address_textfield() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.HouseNumberTextfield);
		CommonLibrary.clearAndEnterText(WalletScreenConstant.HouseNumberTextfield, "21");
		CommonLibrary.shortTime();
		
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.StreetTextfield);
		CommonLibrary.clearAndEnterText(WalletScreenConstant.StreetTextfield, "Constitution St");
		CommonLibrary.shortTime();
		
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.CityTextfield);
		CommonLibrary.clearAndEnterText(WalletScreenConstant.CityTextfield, "Llanharry");
		CommonLibrary.shortTime();
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.NextBtn);
		
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.PostalCodeTextfield);
		CommonLibrary.clearAndEnterText(WalletScreenConstant.PostalCodeTextfield, "CF726NJ");
		CommonLibrary.shortTime();
	}

	@When("^User tap on Pay button$")
	public void user_tap_on_Pay_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.PayButton);
		Thread.sleep(30000);
	}
	
	@Then("^User see Welcome to Your new Coffee Subscription overlay$")
	public void user_see_Welcome_to_Your_new_Coffee_Subscription_overlay() throws Throwable {
		Thread.sleep(5000);
		Assert(CommonLibrary.isElementPresentVerification(WalletScreenConstant.WelcomeYourNewCoffeeSubscription),"User see Welcome to Your new Coffee Subscription overlay");
	    CommonLibrary.shortTime();
	}
	
	@When("^User see Welcome message$")
	public void user_see_Welcome_message() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(WalletScreenConstant.WelcomeMessage),"Welcome message is displayed");
	    CommonLibrary.shortTime();
	}

	@When("^User see the date of the subscription is going to renew text$")
	public void user_see_the_date_of_the_subscription_is_going_to_renew_text() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(WalletScreenConstant.RenewSubscription),"The date of subcription is going to renew text is displayed");
	    CommonLibrary.shortTime();
	}

	@Then("^User tap Get started now button$")
	public void user_tap_Get_started_now_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.GetStartedButton);
		CommonLibrary.mediumTime();
	}

	@Then("^User see Active status$")
	public void user_see_Active_status() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.ActiveStatus);
		CommonLibrary.mediumTime();
	}

	@When("^User tap on Abonnement Cafe button$")
	public void user_tap_on_Abonnement_Cafe_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.AbonnementCafeButton);
		CommonLibrary.mediumTime();
	}

	@Then("^User see Votre Abonnement screen$")
	public void user_see_Votre_Abonnement_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(WalletScreenConstant.VotreAbonnementScreen),"Votre Abonnement screen is displayed");
	    CommonLibrary.shortTime();
	}

	@When("^User tap on Comment ca marche\\? button$")
	public void user_tap_on_Comment_ca_marche_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(WalletScreenConstant.CommentCaMarche);
		CommonLibrary.mediumTime();
	}

	@Then("^User see L'Abonnement Cafe Pret screen$")
	public void user_see_L_Abonnement_Cafe_Pret_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(WalletScreenConstant.LAbonnementCafe),"L'Abonnement Cafe is displayed");
	    CommonLibrary.shortTime();
	}

	@Then("^User see Wallet QR Code$")
	public void user_see_Wallet_QR_Code() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(WalletScreenConstant.WalletQRCode),"Wallet QR Code is displayed");
	    CommonLibrary.shortTime();
	}
	
}
