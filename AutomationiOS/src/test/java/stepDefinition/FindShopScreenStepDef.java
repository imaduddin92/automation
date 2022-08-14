package stepDefinition;

import java.io.IOException;

import org.apache.commons.configuration.ConfigurationException;

import com.photon.UIconstants.FindShopScreenConstant;
import com.photon.library.CommonLibrary;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FindShopScreenStepDef extends CommonLibrary{

	public FindShopScreenStepDef() throws ConfigurationException, IOException {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@When("^User tap Allow once$")
	public void user_tap_Allow_once() throws Throwable {
	    CommonLibrary.isElementPresentVerifyClick(FindShopScreenConstant.AllowOnceButton);
	    CommonLibrary.shortTime();
	}

	@When("^User close error modal$")
	public void user_close_error_modal() throws Throwable {
	    
	}

	@Then("^User see Select a shop screen$")
	public void user_see_Select_a_shop_screen() throws Throwable {
	    
	}

}
