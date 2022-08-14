package stepDefinition;

import java.io.IOException;

import org.apache.commons.configuration.ConfigurationException;

import com.photon.UIconstants.AccountScreenConstant;
import com.photon.UIconstants.CoffeeSubsScreenConstant;
import com.photon.UIconstants.EnterEmailScreenConstant;
import com.photon.UIconstants.HomescreenConstant;
import com.photon.UIconstants.NotreMenuBaristaConstant;
import com.photon.UIconstants.PersonalDetailsScreenConstant;
import com.photon.UIconstants.PretFoundationScreenConstant;
import com.photon.UIconstants.PretPickupScreenConstant;
import com.photon.library.CommonLibrary;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomeScreenStepDef extends CommonLibrary{

	public HomeScreenStepDef() throws ConfigurationException, IOException {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Then("^User see home screen$")
	public void user_see_home_screen() throws Throwable {
	   Assert(CommonLibrary.isElementPresentVerification(HomescreenConstant.WelcomeText),"Home screen is displayed");
//	   CommonLibrary.shortTime();
	}
	
	@When("^User see Pret Perks card in Home screen$")
	public void user_see_Pret_Perks_card_in_Home_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(HomescreenConstant.PretPerksCard),"User see Pret Perks card");
		CommonLibrary.shortTime();
	}
	
	@When("^User see Your Reward button$")
	public void user_see_Your_Reward_button() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(HomescreenConstant.YourRewardsButton),"User see Your Reward button");
		CommonLibrary.shortTime();
	}
	
	@When("^User tap on your rewards button$")
	public void User_tap_on_your_rewards_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(HomescreenConstant.YourRewardsButton);
		CommonLibrary.shortTime();
	}
	
	@When("^User check on title content and detail page$")
	public void user_check_on_title_content_and_detail_page() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(HomescreenConstant.WelcomeText),"title content and detail page is displayed");
		CommonLibrary.shortTime();
	}
	
	@When("^User see find a pret image$")
	public void user_see_find_a_pret_image() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerification(HomescreenConstant.FindYourPretButton2),"Find pret image is displayed");
		CommonLibrary.shortTime();
	}
	
	@When("^User tap find a pret image banner$")
	public void user_tap_find_a_pret_image_banner() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(HomescreenConstant.FindYourPretButton2);
		CommonLibrary.shortTime();
	}
	
	
	@When("^User tap on account button$")
	public void user_tap_on_account_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(HomescreenConstant.AccountTabButton);
		CommonLibrary.shortTime();
	}
	
	@When("^User tap on pret coffeesubs image$")
	public void user_tap_on_pret_coffeesubs_image() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(HomescreenConstant.CoffeeSubsButton);
		CommonLibrary.shortTime();
	}

	@Then("^User see coffeesubs modal$")
	public void user_see_coffeesubs_modal() throws Throwable {
	    Assert(CommonLibrary.isElementPresentVerification(CoffeeSubsScreenConstant.SayHelloText),"Coffee subscription screen is displayed");
	    CommonLibrary.shortTime();
	}

	@Then("^User tap close button$")
	public void user_tap_close_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(CoffeeSubsScreenConstant.CloseButton);
		CommonLibrary.shortTime();
	}

	@When("^User tap on pret pick up$")
	public void user_tap_on_pret_pick_up() throws Throwable {
		CommonLibrary.scrollDown();
		CommonLibrary.scrollDown();
		CommonLibrary.isElementPresentVerifyClick(HomescreenConstant.PretPickUpButton);
		CommonLibrary.shortTime();
	}

	@Then("^User see pret pick up modal$")
	public void user_see_pret_pick_up_modal() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerifyClick(PretPickupScreenConstant.ATapwayText),"Pret pick up modal is displayed");
	}

	@When("^User tap on pret foundation$")
	public void user_tap_on_pret_foundation() throws Throwable {
		CommonLibrary.scrollDown();
		CommonLibrary.isElementPresentVerifyClick(HomescreenConstant.PretFoundationButton);
		CommonLibrary.shortTime();
	}

	@Then("^User see pret foundation screen$")
	public void user_see_pret_foundation_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerifyClick(PretFoundationScreenConstant.ThePretFoundationTitleText),"Pret foundation screen is displayed");
	}

	@When("^User tap on Notre Menu Barista image$")
	public void user_tap_on_Notre_Menu_Barista_image() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(HomescreenConstant.NotreMenuBarista);
		CommonLibrary.shortTime();
	}

	@Then("^User see Notre Menu Barista screen$")
	public void user_see_Notre_Menu_Barista_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerifyClick(NotreMenuBaristaConstant.NotreMenuBaristaScreen),"Notre Menu Barista screen is displayed");
	}

	@When("^User tap on La Pret Foundation$")
	public void user_tap_on_La_Pret_Foundation() throws Throwable {
		CommonLibrary.scrollDown();
		CommonLibrary.isElementPresentVerifyClick(HomescreenConstant.LaPretFoundation);
		CommonLibrary.shortTime();
	}

	@Then("^User see La Pret Foundation screen$")
	public void user_see_La_Pret_Foundation_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerifyClick(PretFoundationScreenConstant.LaPretFoundationScreen),"Pret foundation screen is displayed");
	}
	
	@When("^User tap on Mon Compte button$")
	public void user_tap_on_Mon_Compte_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(HomescreenConstant.MonCompteButton);
		CommonLibrary.shortTime();
	}

	@When("^User see Mon Compte screen$")
	public void user_see_Mon_Compte_screen() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerifyClick(HomescreenConstant.MonCompteScreen),"Mon Compte screen is displayed");
	}

	@When("^User tap on Informations personelles button$")
	public void user_tap_on_Informations_personelles_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(AccountScreenConstant.PersonalDetailsButton);
		CommonLibrary.shortTime();
	}

	@When("^User tap on Se deconnecter button$")
	public void user_tap_on_Se_deconnecter_button() throws Throwable {
		CommonLibrary.scrollDown();
		CommonLibrary.scrollDown();
		CommonLibrary.isElementPresentVerifyClick(PersonalDetailsScreenConstant.SeDeconnecterButton);
		CommonLibrary.shortTime();
		CommonLibrary.isElementPresentVerifyClick(EnterEmailScreenConstant.ContinueButton);
		CommonLibrary.mediumTime();
	}

	@Then("^User is on welcome screen french$")
	public void user_is_on_welcome_screen_french() throws Throwable {
		Assert(CommonLibrary.isElementPresentVerifyClick(HomescreenConstant.WelcomeFrench),"Welcome Screen French screen is displayed");
	}	
	
	@Then("^User tap on the Back button$")
	public void user_tap_on_the_Back_button() throws Throwable {
		CommonLibrary.isElementPresentVerifyClick(HomescreenConstant.BackButtonFrench);
		CommonLibrary.shortTime();
	}
}
