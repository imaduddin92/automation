package stepDefinition;

import java.io.IOException;

import org.apache.commons.configuration.ConfigurationException;

import com.photon.UIconstants.CreateAccountScreen;
import com.photon.UIconstants.EnterEmailScreenConstant;
import com.photon.UIconstants.EnterPasswordScreenConstant;
import com.photon.library.CommonLibrary;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EnterPasswordScreenStepDef extends CommonLibrary{

	public EnterPasswordScreenStepDef() throws ConfigurationException, IOException {
		super();
		// TODO Auto-generated constructor stub
	}

	@Then("^User see enter password screen$")
	public void user_see_enter_password_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(EnterPasswordScreenConstant.EnterPasswordText),"enter password screen is displayed");
	}
	
	@When("^User enter Password in password textfield")
	public void user_enter_password_in_password_textfield() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(EnterPasswordScreenConstant.PasswordTextfield);
		CommonLibrary.clearAndEnterText(EnterPasswordScreenConstant.PasswordTextfield, "Welcome123");
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.DoneButton);
		CommonLibrary.mediumTime();
	}
	
	@When("^User enter Password \"([^\"]*)\"$")
	public void user_enter_password_cs(String arg1) throws Throwable {
		String arg2 = CommonLibrary.getValueFromProperty(arg1);
		CommonLibrary.clearAndEnterText(EnterPasswordScreenConstant.EnterPasswordText, arg2);
		CommonLibrary.isElementPresentVerifyClick(CreateAccountScreen.DoneButton);
		CommonLibrary.mediumTime();
	}
	
}
