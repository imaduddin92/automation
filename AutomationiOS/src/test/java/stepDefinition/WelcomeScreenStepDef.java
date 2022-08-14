package stepDefinition;

import java.io.IOException;

import org.apache.commons.configuration.ConfigurationException;

import com.photon.UIconstants.ChewyscreenConstant;
import com.photon.UIconstants.CoffeeSubsScreenConstant;
import com.photon.UIconstants.EnterEmailScreenConstant;
import com.photon.UIconstants.WelcomescreenConstant;
import com.photon.library.CommonLibrary;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WelcomeScreenStepDef extends CommonLibrary{

	public WelcomeScreenStepDef() throws ConfigurationException, IOException {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Given("^User Launches the Application$")
	public void user_Launches_the_Application() throws Throwable {
	   CommonLibrary.App_Launch();
	   CommonLibrary.shortTime();
	   CommonLibrary.isElementPresentVerifyClick(ChewyscreenConstant.CloseButton);
	   CommonLibrary.isElementPresentVerifyClick(ChewyscreenConstant.DismissButton);
	   CommonLibrary.shortTime();
	}
	
	@Then("^User is on welcome screen$")
	public void user_is_on_welcome_screen() throws Throwable {
		CommonLibrary.longTime();
		Assert(CommonLibrary.isElementPresentVerification(WelcomescreenConstant.SignInButton), "Pret text on welcome screen is displayed");
	}

	@When("^User tap on create and account button$")
	public void user_tap_on_create_and_account_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(WelcomescreenConstant.CreateAccountButton);
		CommonLibrary.isElementPresentVerifyClick(EnterEmailScreenConstant.ContinueButton);
		CommonLibrary.mediumTime();
	}
	
	@When("^User tap on Sign in button$")
	public void user_tap_on_Sign_in_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(WelcomescreenConstant.SignInButton);
		CommonLibrary.isElementPresentVerifyClick(EnterEmailScreenConstant.ContinueButton);
		CommonLibrary.mediumTime();
	}
	
	@Then("^User quit an application$")
    public void user_quit_an_appication() throws Throwable {
        CommonLibrary.driver.quit();
    }

}
