package stepDefinition;

import java.io.IOException;

import org.apache.commons.configuration.ConfigurationException;

import com.photon.UIconstants.ExpiredRewardScreenConstant;
import com.photon.UIconstants.PretPerksScreenConstant;
import com.photon.library.CommonLibrary;

import cucumber.api.java.en.Then;

public class ExpiredRewardScreenStepDef 
extends CommonLibrary
{

	public ExpiredRewardScreenStepDef() throws ConfigurationException, IOException {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Then("^User is navigated to Reward History screen$")
	public void user_is_navigated_to_Reward_History_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(ExpiredRewardScreenConstant.RewardHistoryScreen),"User is navigated to Reward History screen");
	}

}
