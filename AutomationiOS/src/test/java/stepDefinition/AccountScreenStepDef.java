package stepDefinition;

import java.io.IOException;

import org.apache.commons.configuration.ConfigurationException;

import com.photon.UIconstants.AccountScreenConstant;
import com.photon.UIconstants.EnterEmailScreenConstant;
import com.photon.UIconstants.PersonalDetailsScreenConstant;
import com.photon.UIconstants.WelcomescreenConstant;
import com.photon.UIconstants.YourSubscriptionConstant;
import com.photon.library.CommonLibrary;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AccountScreenStepDef extends CommonLibrary{

	public AccountScreenStepDef() throws ConfigurationException, IOException {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@When("^User see account screen$")
	public void user_see_account_screen() throws Throwable {
		CommonLibrary.mediumTime();
	    Assert(CommonLibrary.isElementPresentVerification(AccountScreenConstant.AccountInfoText), "Account screen is displayed");
	}
	
	@When("^User tap on Your Subscription$")
	public void user_tap_on_Your_Subscription() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(AccountScreenConstant.YourSubscription);
		CommonLibrary.shortTime();
	}

	@When("^User tap on personal details button$")
	public void user_tap_on_personal_details_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(AccountScreenConstant.PersonalDetailsButton);
		CommonLibrary.shortTime();
	}
	
	@When("^User see Active status coffee subscription$")
	public void User_see_Active_status_coffee_subscription() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(AccountScreenConstant.ActiveCSStatus), "Active CS status is displayed");
	}
	
	@When("^User see Full Name$")
	public void User_see_Full_Name() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(AccountScreenConstant.FullNameText),"Full name is displayed");
	}
	
	@When("^User see Mobile Number$")
	public void User_see_Mobile_Number() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(AccountScreenConstant.MobileNumberText),"Mobile number is displayed");
	}
	
	@When("^User see Account Details section$")
	public void User_see_Account_Details_section() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(AccountScreenConstant.AccountDetailsSection),"Account details section is displayed");
	}
	
	@When("^User see Email Address$")
	public void User_see_Email_Address() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(AccountScreenConstant.EmailAddressText),"Email address is displayed");
	}

	@When("^User tap on logout button$")
	public void user_tap_on_logout_button() throws Throwable {
		CommonLibrary.scrollDown();
		CommonLibrary.scrollDown();
		CommonLibrary.isElementPresentVerifyClick(PersonalDetailsScreenConstant.LogoutButton);
		CommonLibrary.shortTime();
		CommonLibrary.isElementPresentVerifyClick(EnterEmailScreenConstant.ContinueButton);
		CommonLibrary.mediumTime();
	}
	

}
