package stepDefinition;

import java.io.IOException;

import org.apache.commons.configuration.ConfigurationException;
import com.photon.UIconstants.CreateAccountScreen;
import com.photon.UIconstants.EnterEmailScreenConstant;
import com.photon.UIconstants.HomescreenConstant;
import com.photon.UIconstants.PretPerksScreenConstant;
import com.photon.library.CommonLibrary;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EnterEmailScreenStepDef extends CommonLibrary{

	public EnterEmailScreenStepDef() throws ConfigurationException, IOException {
		super();
		// TODO Auto-generated constructor stub
	}

	@Then("^User see enter email screen$")
	public void user_see_enter_email_screen() throws Throwable {
			Assert(CommonLibrary.isElementPresentVerification(EnterEmailScreenConstant.EnterEmailText),"enter email screen is displayed");
		
	}
	
	@When("^User enter Email Address in email textfield")
	public void user_enter_email_address_in_email_textfield() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(EnterEmailScreenConstant.EmailTextfield);
		CommonLibrary.clearAndEnterText(EnterEmailScreenConstant.EmailTextfield, "pret-cypress-test-imadusa@mailinator.com");
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.DoneButton);
		CommonLibrary.shortTime();
	}
	
	@Then("^User enter Email Address in the email textfield \"([^\"]*)\"$")
	public void user_enter_email_address_in_the_email_textfield(String arg1) throws Throwable {
		CommonLibrary.shortTime();
	    Assert(CommonLibrary.isElementPresentVerification(EnterEmailScreenConstant.EmailTextfield), 
	    		"The Email field is displayed");
		String arg2 = CommonLibrary.getValueFromProperty(arg1);
		CommonLibrary.Assert(CommonLibrary.clearAndEnterText(EnterEmailScreenConstant.EmailTextfield, arg2),
				"User able to enter the Email : " + arg2);
	}
	
	@When("^User enter Email Address UK in email textfield")
	public void user_enter_email_address_uk_in_email_textfield() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(EnterEmailScreenConstant.EmailTextfield);
		CommonLibrary.clearAndEnterText(EnterEmailScreenConstant.EmailTextfield, "pret-cypress-test-autouk002@mailinator.com");
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.DoneButton);
		CommonLibrary.shortTime();
	}
	
	@When("^User enter Email Address UK Subs in email textfield$")
	public void user_enter_Email_Address_UK_Subs_in_email_textfield() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(EnterEmailScreenConstant.EmailTextfield);
		CommonLibrary.clearAndEnterText(EnterEmailScreenConstant.EmailTextfield, "pret-cypress-test-imad-eng@mailinator.com");
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.DoneButton);
		CommonLibrary.shortTime();
	}
	
	@When("^User enter French Email Address in email textfield$")
	public void user_enter_French_Email_Address_in_email_textfield() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(EnterEmailScreenConstant.EmailTextfield);
		CommonLibrary.clearAndEnterText(EnterEmailScreenConstant.EmailTextfield, "pret-cypress-test-imadfrench@mailinator.com");
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.DoneButton);
		CommonLibrary.shortTime();
	}
	
	@When("^User enter Email Address \"([^\"]*)\"$")
	public void user_enter_email_address_cs(String arg1) throws Throwable {
		String arg2 = CommonLibrary.getValueFromProperty(arg1);
		CommonLibrary.isElementPresentVerifyClick(EnterEmailScreenConstant.EmailTextfield);
		CommonLibrary.clearAndEnterText(EnterEmailScreenConstant.EmailTextfield, arg2);
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.DoneButton);
		CommonLibrary.shortTime();
	}
	
	@When("^User enter Email Address Coffee Subscription in email textfield$")
	public void user_enter_Email_Address_Coffee_Subscription_in_email_textfield() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(EnterEmailScreenConstant.EmailTextfield);
		CommonLibrary.clearAndEnterText(EnterEmailScreenConstant.EmailTextfield, "pret-cypress-test-imad-eng@mailinator.com");
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.DoneButton);
		CommonLibrary.shortTime();
	}

	@When("^User tap on Continue button$")
	public void user_tap_on_Continue_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(EnterEmailScreenConstant.ContinueButton);
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.DoneButton);
		CommonLibrary.isElementPresentVerifyClick(PretPerksScreenConstant.CloseButton);
		CommonLibrary.shortTime();
	}
}
