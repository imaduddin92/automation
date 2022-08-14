package stepDefinition;

import java.io.IOException;

import org.apache.commons.configuration.ConfigurationException;

import com.photon.UIconstants.HomescreenConstant;
import com.photon.UIconstants.PretPerksScreenConstant;
import com.photon.library.CommonLibrary;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PretPerksScreenStepDef extends CommonLibrary{

	public PretPerksScreenStepDef() throws ConfigurationException, IOException {
		super();
		// TODO Auto-generated constructor stub
	}

	@Then("^User see Pret Perks single star and no rewards$")
	public void User_see_Pret_Perks_single_star_and_no_rewards() throws Throwable {
	   Assert(CommonLibrary.isElementPresentVerification(PretPerksScreenConstant.YourFirstStarText),"Your first star is displayed");
	}
	
	@Then("^User see Pret Perks single star and with rewards$")
	public void User_see_Pret_Perks_single_star_and_with_rewards() throws Throwable {
	   Assert(CommonLibrary.isElementPresentVerification(PretPerksScreenConstant.YouUnlockPerkText),"You’ve unlocked a perk is displayed");
	}
	
	@Then("^User see Pret Perks screen$")
	public void user_see_Pret_Perks_screen() throws Throwable {
	   Assert(CommonLibrary.isElementPresentVerification(PretPerksScreenConstant.PretPerksTitleText),"Pret Perks screen is displayed");

	}
	
	@When("^User see Eligible Item link$")
	public void user_see_Eligible_Item_link() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(PretPerksScreenConstant.EligibleItemLink),"Eligible Item link is displayed");
	}

	@When("^User tap on Eligible Item link$")
	public void user_tap_on_Eligible_Item_link() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(PretPerksScreenConstant.EligibleItemLink);
		CommonLibrary.longTime();
	}
	
	@When("^User see Expired Reward button$")
	public void user_see_Expired_Reward_button() throws Throwable {
		Thread.sleep(10000);
		CommonLibrary.scrollDown();
		Assert(CommonLibrary.isElementPresentVerification(PretPerksScreenConstant.ExpiredRewardBtn),"Expired Reward button is displayed");
	}

	@When("^User tap on Expired Reward button$")
	public void user_tap_on_Expired_Reward_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(PretPerksScreenConstant.ExpiredRewardBtn);
		CommonLibrary.longTime();
	}
	
	//How Pret Perks Works

	@When("^User tap on How Pret Perks Works button$")
	public void user_tap_on_How_Pret_Perks_Works_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(PretPerksScreenConstant.HowPretPerksWorkLink);
		CommonLibrary.shortTime();
	}

	@Then("^User see How Pret Perks Works screen$")
	public void user_see_How_Pret_Perks_Works_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(PretPerksScreenConstant.HowPretPerksWorkPage),"How Pret Perks Works screen is displayed");
		CommonLibrary.scrollDown();
		CommonLibrary.scrollDown();
		CommonLibrary.scrollDown();
	}

	@Then("^User tap Back button$")
	public void user_tap_Back_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(PretPerksScreenConstant.HowPretPerksWorkBackButton);
		CommonLibrary.shortTime();
	}
	
	@When("^User tap on Terms and Conditions button$")
	public void user_tap_on_Terms_and_Conditions_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(PretPerksScreenConstant.TermsButton);
		CommonLibrary.shortTime();
	}

	@Then("^User see Terms and Conditions overlay$")
	public void user_see_Terms_and_Conditions_overlay() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(PretPerksScreenConstant.TermsOverlay),"Terms and Conditions overlay is displayed");
		CommonLibrary.shortTime();
	}

	@Then("^User tap Done button$")
	public void user_tap_Done_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(PretPerksScreenConstant.DoneButton);
		CommonLibrary.shortTime();
	}

	@When("^User tap on FAQs button$")
	public void user_tap_on_FAQs_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(PretPerksScreenConstant.FAQsButton);
		CommonLibrary.shortTime();
	}

	@Then("^User see FAQs overlay$")
	public void user_see_FAQs_overlay() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(PretPerksScreenConstant.FAQsOverlay),"FAQs overlay is displayed");
		CommonLibrary.shortTime();
	}
	
}
