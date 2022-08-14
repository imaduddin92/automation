package stepDefinition;

import java.io.IOException;

import org.apache.commons.configuration.ConfigurationException;

import com.photon.UIconstants.CreateAccountScreen;
import com.photon.UIconstants.MaybeLaterModalConstant;
import com.photon.UIconstants.YourPrivacyScreenConstant;
import com.photon.library.CommonLibrary;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateAccountScreenStepDef extends CommonLibrary{

	public CreateAccountScreenStepDef() throws ConfigurationException, IOException {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Then("^User see create account screen$")
	public void user_see_create_account_screen() throws Throwable {
	    Assert(CommonLibrary.isElementPresentVerification(CreateAccountScreen.GettingToKnowYouText),"Create account is displayed");
	}

	@When("^User input First name")
	public void user_input_First_name() throws Throwable {
	    CommonLibrary.clearAndEnterText(CreateAccountScreen.FirstNameTextField, "Adam");
	    CommonLibrary.shortTime();
	}

	@When("^User input Last name")
	public void user_input_Last_name() throws Throwable {
		CommonLibrary.clearAndEnterText(CreateAccountScreen.LastNameTextField, "Smith");
	    CommonLibrary.shortTime();
	}

	@When("^User input Mobile Number")
	public void user_input_Mobile_Number() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.PhoneNumberDropdown);
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.USCountryCode);
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.DoneButton);
		CommonLibrary.shortTime();
		CommonLibrary.clearAndEnterText(CreateAccountScreen.PhoneTextField, "5558554009");
	}
	
	@When("^User input French Mobile Number")
	public void user_input_French_Mobile_Number() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.PhoneNumberDropdown);
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.FranceCountryCode);
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.DoneButton);
		CommonLibrary.shortTime();
		CommonLibrary.clearAndEnterText(CreateAccountScreen.PhoneTextField, "644621320");
	}

	@When("^User input Phone Number \"([^\"]*)\"$")
	public void user_input_Phone_Number_uk(String arg1) throws Throwable {
//		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.PhoneNumberDropdown);
//		CommonLibrary.shortTime();
		String arg2 = CommonLibrary.getValueFromProperty(arg1);
		CommonLibrary.clearAndEnterText(CreateAccountScreen.PhoneTextField, arg2);
	}
	
	@When("^User input Email Address")
	public void user_input_Email_Address() throws Throwable {
		CommonLibrary.clearAndEnterText(CreateAccountScreen.EmailTextField, CommonLibrary.generateMailinatorEmail());
	    CommonLibrary.shortTime();
	}
	

	@When("^User input Password")
	public void user_input_Password() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.DoneButton);
		CommonLibrary.scrollDown();
		CommonLibrary.clearAndEnterText(CreateAccountScreen.PasswordTextField,"Welcome123");
	    CommonLibrary.shortTime();
	}

	@When("^User choose a USA location$")
	public void user_choose_a_usa_location() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.ChooseLocationDropdown);
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.USALocation);
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.DoneButton);
		CommonLibrary.shortTime();
	}
	
	@When("^User choose a UK location$")
	public void user_choose_a_uk_location() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.ChooseLocationDropdown);
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.UKLocation);
		CommonLibrary.shortTime();
	}
	
	@When("^User choose a France location$")
	public void user_choose_a_france_location() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.ChooseLocationDropdown);
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.FranceLocation);
		CommonLibrary.shortTime();
	}

	@When("^User tap on Email checkbox$")
	public void user_tap_on_Email_checkbox() throws Throwable {
		CommonLibrary.scrollDown();
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.EmailCheckbox);
	}

	@When("^User tap on Create account button$")
	public void user_tap_on_Create_account_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.CreateAccountButton);
		Thread.sleep(5000);
	}
	
	@When("^User tap on Allow all button$")
	public void user_tap_on_Allow_all_button() throws Throwable {
		Thread.sleep(10000);
		CommonLibrary.isElementPresentVerifyClick(YourPrivacyScreenConstant.AllowAllButton);
		CommonLibrary.shortTime();
	}
	
	@When("^User tap on Allow all french button$")
	public void user_tap_on_Allow_all_french_button() throws Throwable {
		Thread.sleep(10000);
		CommonLibrary.isElementPresentVerifyClick(YourPrivacyScreenConstant.AllowAllFrench);
		CommonLibrary.shortTime();
	}
	
	@When("^User tap on Close button in Error Popup$")
	public void user_tap_on_Close_button_in_Error_Popup() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(YourPrivacyScreenConstant.CloseButton_Error);
		CommonLibrary.shortTime();
	}
	
	@When("^User tap on Maybe later button$")
	public void user_tap_on_Maybe_later_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(MaybeLaterModalConstant.MaybeLaterButton);
		CommonLibrary.shortTime();
	}

}
