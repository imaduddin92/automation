@regression @aat1528-test
Feature: AAT-1528 Homescreen
  
  @aat1528
  Scenario: Content Cards to have an “action” field which can deep-link to other parts of the app or to a “detailPage”
  Given User Launches the Application
  When User is on welcome screen
  And User tap on Sign in button
  Then User see enter email screen
  When User enter Email Address in email textfield
  And User tap on Continue button
  Then User see enter password screen
  When User enter Password in password textfield
  And User tap on Continue button
  When User tap on Allow all button
  When User tap on Maybe later button
  Then User see home screen
  When User tap on pret coffeesubs image 
  Then User see coffeesubs modal
  And User tap close button
  When User tap on pret pick up
  Then User see pret pick up modal
  And User tap close button
  When User tap on pret foundation
  Then User see pret foundation screen
  And User tap close button
  When User tap on account button
  And User see account screen
  When User tap on personal details button
  And User tap on logout button
  Then User is on welcome screen  
  Then User quit an application
