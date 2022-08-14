$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cache/cache/0.feature");
formatter.feature({
  "name": "MyStore Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "MyStore \u003cRole\u003e Login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Launches the Application",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters the username in the \"\u003cusername\u003e\" field",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters the password in the \"\u003cpassword\u003e\" field",
  "keyword": "Then "
});
formatter.step({
  "name": "user click on LOGIN",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Role"
      ]
    },
    {
      "cells": [
        "labsm1",
        "Welcome1a",
        "SM"
      ]
    }
  ],
  "tags": [
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.scenario({
  "name": "MyStore SM Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launches the Application",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonStepDefinition.user_Launches_the_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the username in the \"labsm1\" field",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStoreLoginsStepDefinitions.user_enters_the_username_in_the_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the password in the \"Welcome1a\" field",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStoreLoginsStepDefinitions.user_enters_the_password_in_the_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on LOGIN",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStoreLoginsStepDefinitions.user_click_on_LOGIN()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("cache/cache/2.feature");
formatter.feature({
  "name": "Store Manager Smoke Suite for tablet",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validating \"\u003cNavigationLink\u003e\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"\u003cNavigationLink\u003e\" via card navigation",
  "keyword": "When "
});
formatter.step({
  "name": "check a page loaded with view text equals to \"\u003cPageHeader\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Menus",
        "NavigationLink",
        "PageHeader",
        "Role"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eProfessional Development-\u003ePTCB Certification Information",
        "PTCB",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eProfessional Development-\u003ePharmacy Technician Training",
        "Pharmacy Technician Training",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eProfessional Development-\u003eLEAP Program General Information",
        "Welcome to LEAP (Lead, Engage, Advance, Perform)–",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eProfessional Development-\u003eLEAP Home Page for Leaders and Facilitators",
        "LEAP Materials for Leaders",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eRefresh Repair and Maintenance Program",
        "Location Inquiry",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003ePharmacy SOPs",
        "Pharmacy Operations: Filling Prescriptions",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eSafety \u0026 Security-\u003eProduct Tampering/Contamination Policy",
        "Product Tampering and Contamination: Suspected or Confirmed",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eNext Gen Registers and Back Office",
        "Next Generation POS",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003ePharmacy \u0026 Retail Implementation",
        "Welcome the Pharmacy \u0026 Retail Implementation Webpage",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eProfessional Development-\u003eWalgreens University",
        "Walgreens University",
        "SM"
      ]
    },
    {
      "cells": [
        "Store Operations",
        "Store Operations-\u003ePharmacy-\u003eAcquisition Integration Home",
        "Acquisition Integration Home Page",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBAE Onboarding",
        "Director of Pharmacy and Retail Operations",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials",
        "Beauty Area Experts",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials",
        "Beauty Consultant",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials",
        "Store Manager",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding",
        "Store Manager/Beauty Consultant",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies",
        "Testers",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies",
        "Beauty Department Hygiene",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies",
        "Incentives",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies",
        "Travel Planning and Expense Site",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies",
        "Safety",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBeauty Standards",
        "Beauty Consultant",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials-\u003eTravel Planning and Expense Site",
        "Welcome to the Travel Planning and Expense Center",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials-\u003eBeauty Differentiation Training on LMTP",
        "Beauty Differentiation Training",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBAE Onboarding-\u003eRequest User IDs",
        "ID Administration System Request Forms",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBAE Onboarding-\u003eUpdate an Existing Phone/Voicemail",
        "Login",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eLabor:",
        "Labor:",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eBeauty Personal Care Incentives (coming soon)",
        "Personal Care",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eGlobal Brand Tester Policy",
        "Beauty Product Tester Job Aid",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eSpent Tester Policy (coming soon)",
        "Spent Tester Policy",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eTester Hygiene (Coming Soon)",
        "Tester Hygiene",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eHygiene Best Practices (coming soon)",
        "Hygiene",
        "SM"
      ]
    }
  ],
  "tags": [
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eProfessional Development-\u003ePTCB Certification Information\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eProfessional Development-\u003ePTCB Certification Information\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"PTCB\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eProfessional Development-\u003ePharmacy Technician Training\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eProfessional Development-\u003ePharmacy Technician Training\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Pharmacy Technician Training\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eProfessional Development-\u003eLEAP Program General Information\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eProfessional Development-\u003eLEAP Program General Information\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Welcome to LEAP (Lead, Engage, Advance, Perform)–\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eProfessional Development-\u003eLEAP Home Page for Leaders and Facilitators\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eProfessional Development-\u003eLEAP Home Page for Leaders and Facilitators\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"LEAP Materials for Leaders\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eRefresh Repair and Maintenance Program\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eRefresh Repair and Maintenance Program\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Location Inquiry\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003ePharmacy SOPs\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003ePharmacy SOPs\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Pharmacy Operations: Filling Prescriptions\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eSafety \u0026 Security-\u003eProduct Tampering/Contamination Policy\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eSafety \u0026 Security-\u003eProduct Tampering/Contamination Policy\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Product Tampering and Contamination: Suspected or Confirmed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eNext Gen Registers and Back Office\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eNext Gen Registers and Back Office\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Next Generation POS\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003ePharmacy \u0026 Retail Implementation\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003ePharmacy \u0026 Retail Implementation\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Welcome the Pharmacy \u0026 Retail Implementation Webpage\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eProfessional Development-\u003eWalgreens University\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eProfessional Development-\u003eWalgreens University\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Walgreens University\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Store Operations-\u003ePharmacy-\u003eAcquisition Integration Home\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Store Operations-\u003ePharmacy-\u003eAcquisition Integration Home\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Acquisition Integration Home Page\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBAE Onboarding\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBAE Onboarding\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Director of Pharmacy and Retail Operations\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Beauty Area Experts\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Beauty Consultant\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Store Manager\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Store Manager/Beauty Consultant\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Testers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Beauty Department Hygiene\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Incentives\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Travel Planning and Expense Site\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Safety\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBeauty Standards\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBeauty Standards\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Beauty Consultant\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials-\u003eTravel Planning and Expense Site\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials-\u003eTravel Planning and Expense Site\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Welcome to the Travel Planning and Expense Center\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials-\u003eBeauty Differentiation Training on LMTP\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials-\u003eBeauty Differentiation Training on LMTP\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Beauty Differentiation Training\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBAE Onboarding-\u003eRequest User IDs\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBAE Onboarding-\u003eRequest User IDs\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"ID Administration System Request Forms\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBAE Onboarding-\u003eUpdate an Existing Phone/Voicemail\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBAE Onboarding-\u003eUpdate an Existing Phone/Voicemail\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eLabor:\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eLabor:\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Labor:\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eBeauty Personal Care Incentives (coming soon)\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eBeauty Personal Care Incentives (coming soon)\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Personal Care\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[normalize-space(@content-desc)\u003d\"Personal Care\" or normalize-space(@text)\u003d\"Personal Care\"] (tried for 60 second(s) with 500 MILLISECONDS interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat com.horizon.utils.WaitUtils.visibilityOfElementLocated(WaitUtils.java:37)\n\tat com.horizon.base.CustomElementSelector.getElementWait(CustomElementSelector.java:76)\n\tat com.horizon.base.ElementIdentification.getElementByPropertyWait(ElementIdentification.java:99)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:115)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:93)\n\tat com.horizon.base.AssertValidation.assertElementPresentVerificationWait(AssertValidation.java:100)\n\tat com.horizon.stepDefinition.CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(CommonStepDefinition.java:1087)\n\tat ✽.check a page loaded with view text equals to \"Personal Care\"(cache/cache/2.feature:16)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[normalize-space(@content-desc)\u003d\"Personal Care\" or normalize-space(@text)\u003d\"Personal Care\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027CHMM118325.local\u0027, ip: \u0027fe80:0:0:0:1437:e351:f322:759b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:882)\n\tat java.util.Optional.orElseThrow(Optional.java:290)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\n\tat com.horizon.utils.WaitUtils.visibilityOfElementLocated(WaitUtils.java:37)\n\tat com.horizon.base.CustomElementSelector.getElementWait(CustomElementSelector.java:76)\n\tat com.horizon.base.ElementIdentification.getElementByPropertyWait(ElementIdentification.java:99)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:115)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:93)\n\tat com.horizon.base.AssertValidation.assertElementPresentVerificationWait(AssertValidation.java:100)\n\tat com.horizon.stepDefinition.CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(CommonStepDefinition.java:1087)\n\tat sun.reflect.GeneratedMethodAccessor25.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:84)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.runTests(TestNGTestClassProcessor.java:134)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.stop(TestNGTestClassProcessor.java:88)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.stop(SuiteTestClassProcessor.java:61)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy1.stop(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.stop(TestWorker.java:123)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:146)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:128)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:46)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:55)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eGlobal Brand Tester Policy\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eGlobal Brand Tester Policy\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Beauty Product Tester Job Aid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[normalize-space(@content-desc)\u003d\"Beauty Product Tester Job Aid\" or normalize-space(@text)\u003d\"Beauty Product Tester Job Aid\"] (tried for 60 second(s) with 500 MILLISECONDS interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat com.horizon.utils.WaitUtils.visibilityOfElementLocated(WaitUtils.java:37)\n\tat com.horizon.base.CustomElementSelector.getElementWait(CustomElementSelector.java:76)\n\tat com.horizon.base.ElementIdentification.getElementByPropertyWait(ElementIdentification.java:99)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:115)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:93)\n\tat com.horizon.base.AssertValidation.assertElementPresentVerificationWait(AssertValidation.java:100)\n\tat com.horizon.stepDefinition.CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(CommonStepDefinition.java:1087)\n\tat ✽.check a page loaded with view text equals to \"Beauty Product Tester Job Aid\"(cache/cache/2.feature:16)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[normalize-space(@content-desc)\u003d\"Beauty Product Tester Job Aid\" or normalize-space(@text)\u003d\"Beauty Product Tester Job Aid\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027CHMM118325.local\u0027, ip: \u0027fe80:0:0:0:1437:e351:f322:759b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:882)\n\tat java.util.Optional.orElseThrow(Optional.java:290)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\n\tat com.horizon.utils.WaitUtils.visibilityOfElementLocated(WaitUtils.java:37)\n\tat com.horizon.base.CustomElementSelector.getElementWait(CustomElementSelector.java:76)\n\tat com.horizon.base.ElementIdentification.getElementByPropertyWait(ElementIdentification.java:99)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:115)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:93)\n\tat com.horizon.base.AssertValidation.assertElementPresentVerificationWait(AssertValidation.java:100)\n\tat com.horizon.stepDefinition.CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(CommonStepDefinition.java:1087)\n\tat sun.reflect.GeneratedMethodAccessor25.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:84)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.runTests(TestNGTestClassProcessor.java:134)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.stop(TestNGTestClassProcessor.java:88)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.stop(SuiteTestClassProcessor.java:61)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy1.stop(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.stop(TestWorker.java:123)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:146)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:128)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:46)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:55)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eSpent Tester Policy (coming soon)\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eSpent Tester Policy (coming soon)\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Spent Tester Policy\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[normalize-space(@content-desc)\u003d\"Spent Tester Policy\" or normalize-space(@text)\u003d\"Spent Tester Policy\"] (tried for 60 second(s) with 500 MILLISECONDS interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat com.horizon.utils.WaitUtils.visibilityOfElementLocated(WaitUtils.java:37)\n\tat com.horizon.base.CustomElementSelector.getElementWait(CustomElementSelector.java:76)\n\tat com.horizon.base.ElementIdentification.getElementByPropertyWait(ElementIdentification.java:99)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:115)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:93)\n\tat com.horizon.base.AssertValidation.assertElementPresentVerificationWait(AssertValidation.java:100)\n\tat com.horizon.stepDefinition.CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(CommonStepDefinition.java:1087)\n\tat ✽.check a page loaded with view text equals to \"Spent Tester Policy\"(cache/cache/2.feature:16)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[normalize-space(@content-desc)\u003d\"Spent Tester Policy\" or normalize-space(@text)\u003d\"Spent Tester Policy\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027CHMM118325.local\u0027, ip: \u0027fe80:0:0:0:1437:e351:f322:759b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:882)\n\tat java.util.Optional.orElseThrow(Optional.java:290)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\n\tat com.horizon.utils.WaitUtils.visibilityOfElementLocated(WaitUtils.java:37)\n\tat com.horizon.base.CustomElementSelector.getElementWait(CustomElementSelector.java:76)\n\tat com.horizon.base.ElementIdentification.getElementByPropertyWait(ElementIdentification.java:99)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:115)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:93)\n\tat com.horizon.base.AssertValidation.assertElementPresentVerificationWait(AssertValidation.java:100)\n\tat com.horizon.stepDefinition.CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(CommonStepDefinition.java:1087)\n\tat sun.reflect.GeneratedMethodAccessor25.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:84)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.runTests(TestNGTestClassProcessor.java:134)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.stop(TestNGTestClassProcessor.java:88)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.stop(SuiteTestClassProcessor.java:61)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy1.stop(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.stop(TestWorker.java:123)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:146)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:128)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:46)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:55)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eTester Hygiene (Coming Soon)\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eTester Hygiene (Coming Soon)\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Tester Hygiene\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[normalize-space(@content-desc)\u003d\"Tester Hygiene\" or normalize-space(@text)\u003d\"Tester Hygiene\"] (tried for 60 second(s) with 500 MILLISECONDS interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat com.horizon.utils.WaitUtils.visibilityOfElementLocated(WaitUtils.java:37)\n\tat com.horizon.base.CustomElementSelector.getElementWait(CustomElementSelector.java:76)\n\tat com.horizon.base.ElementIdentification.getElementByPropertyWait(ElementIdentification.java:99)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:115)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:93)\n\tat com.horizon.base.AssertValidation.assertElementPresentVerificationWait(AssertValidation.java:100)\n\tat com.horizon.stepDefinition.CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(CommonStepDefinition.java:1087)\n\tat ✽.check a page loaded with view text equals to \"Tester Hygiene\"(cache/cache/2.feature:16)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[normalize-space(@content-desc)\u003d\"Tester Hygiene\" or normalize-space(@text)\u003d\"Tester Hygiene\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027CHMM118325.local\u0027, ip: \u0027fe80:0:0:0:1437:e351:f322:759b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:882)\n\tat java.util.Optional.orElseThrow(Optional.java:290)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\n\tat com.horizon.utils.WaitUtils.visibilityOfElementLocated(WaitUtils.java:37)\n\tat com.horizon.base.CustomElementSelector.getElementWait(CustomElementSelector.java:76)\n\tat com.horizon.base.ElementIdentification.getElementByPropertyWait(ElementIdentification.java:99)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:115)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:93)\n\tat com.horizon.base.AssertValidation.assertElementPresentVerificationWait(AssertValidation.java:100)\n\tat com.horizon.stepDefinition.CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(CommonStepDefinition.java:1087)\n\tat sun.reflect.GeneratedMethodAccessor25.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:84)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.runTests(TestNGTestClassProcessor.java:134)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.stop(TestNGTestClassProcessor.java:88)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.stop(SuiteTestClassProcessor.java:61)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy1.stop(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.stop(TestWorker.java:123)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:146)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:128)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:46)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:55)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eHygiene Best Practices (coming soon)\" navigation for role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerlink"
    },
    {
      "name": "@HOAO-21517"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eHygiene Best Practices (coming soon)\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check a page loaded with view text equals to \"Hygiene\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[normalize-space(@content-desc)\u003d\"Hygiene\" or normalize-space(@text)\u003d\"Hygiene\"] (tried for 60 second(s) with 500 MILLISECONDS interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat com.horizon.utils.WaitUtils.visibilityOfElementLocated(WaitUtils.java:37)\n\tat com.horizon.base.CustomElementSelector.getElementWait(CustomElementSelector.java:76)\n\tat com.horizon.base.ElementIdentification.getElementByPropertyWait(ElementIdentification.java:99)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:115)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:93)\n\tat com.horizon.base.AssertValidation.assertElementPresentVerificationWait(AssertValidation.java:100)\n\tat com.horizon.stepDefinition.CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(CommonStepDefinition.java:1087)\n\tat ✽.check a page loaded with view text equals to \"Hygiene\"(cache/cache/2.feature:16)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[normalize-space(@content-desc)\u003d\"Hygiene\" or normalize-space(@text)\u003d\"Hygiene\"]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027CHMM118325.local\u0027, ip: \u0027fe80:0:0:0:1437:e351:f322:759b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:882)\n\tat java.util.Optional.orElseThrow(Optional.java:290)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\n\tat com.horizon.utils.WaitUtils.visibilityOfElementLocated(WaitUtils.java:37)\n\tat com.horizon.base.CustomElementSelector.getElementWait(CustomElementSelector.java:76)\n\tat com.horizon.base.ElementIdentification.getElementByPropertyWait(ElementIdentification.java:99)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:115)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:93)\n\tat com.horizon.base.AssertValidation.assertElementPresentVerificationWait(AssertValidation.java:100)\n\tat com.horizon.stepDefinition.CommonStepDefinition.checkAPageLoadedWithViewTextEqualsTo(CommonStepDefinition.java:1087)\n\tat sun.reflect.GeneratedMethodAccessor25.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:84)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.runTests(TestNGTestClassProcessor.java:134)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.stop(TestNGTestClassProcessor.java:88)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.stop(SuiteTestClassProcessor.java:61)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy1.stop(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.stop(TestWorker.java:123)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:146)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:128)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:46)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:55)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validating  \"\u003cNavigationLinkPDF\u003e\" pdf link navigation for \"\u003cRole\u003e\" role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Hambergerpdflink"
    },
    {
      "name": "@HOAO-20221"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"\u003cNavigationLinkPDF\u003e\" via card navigation",
  "keyword": "When "
});
formatter.step({
  "name": "user should be able to view PDF containing text \"\u003cPageHeader\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Menus",
        "NavigationLinkPDF",
        "PageHeader",
        "Role"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBAE Onboarding-\u003eBAE Onboarding Week One Checklist",
        "Beauty Area Expert On-Boarding",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBAE Onboarding-\u003eBAE Market Onboarding Guide",
        "Beauty Area Expert On-Boarding",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials-\u003eSoap \u0026 Glory Brand training for Store Management and Team Members",
        "Soap \u0026 Glory Brand History",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials-\u003eBoots No.7 Brand training for Store Management and Team Members PDF",
        "Boots Brand History",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials-\u003eUpdating the Match Made Device in Store",
        "MATCH MADE DEVICE SOFTWARE UPDATE",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials-\u003eMatch Made Foundation Shade Chart for No7 Lipsticks and Blush PDF",
        "Boots Brand History",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eHow to Refresh Beauty Consultant in Authenticator Maintenance",
        "POS Vision Maintenance (Back Office)",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eBeauty Consultant Orientation New Hire Experience",
        "New Hire Experience – Beauty Consultant Orientation Checklist",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eStore Manager Toolkit",
        "Beauty Differentiation:",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eBeauty Differentiation Store Manager Presentation",
        "Beauty Customer Care",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eIn Store Observation Checklist",
        "In-Store Observation Checklist",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eBeauty Consultant - Employee Refresh",
        "POS Vision Maintenance (Back Office)",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eBeauty Consultant Training and Engagement Check List - No Global Brands",
        "On-going activities to accomplish on a regular basis",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eBeauty Consultant Training and Engagement Check List - With Global Brands",
        "On-going activities to accomplish on a regular basis",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eBeauty Consultant New Hire Onboarding",
        "New Hire Onboarding: Step-by-Step Guide",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eTravel Expenses \u0026 Hotel: Charge to Store. See Travel Planning and Expense Site",
        "Travel Expenses",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eBeauty Promotional Monies Policy",
        "Cosmetic PMs: Policy and Overview",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBeauty Standards-\u003eBeauty Department Expense List",
        "Expense",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBeauty Standards-\u003eBeauty Differentiation Standards",
        "Retail Operations: Beauty",
        "SM"
      ]
    },
    {
      "cells": [
        "Training and Procedures",
        "Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBeauty Standards-\u003eConsultation Station Planogram",
        "BEAUTY CONSULTATION DESK",
        "SM"
      ]
    }
  ],
  "tags": [
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating  \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBAE Onboarding-\u003eBAE Onboarding Week One Checklist\" pdf link navigation for \"SM\" role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerpdflink"
    },
    {
      "name": "@HOAO-20221"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBAE Onboarding-\u003eBAE Onboarding Week One Checklist\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to view PDF containing text \"Beauty Area Expert On-Boarding\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating  \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBAE Onboarding-\u003eBAE Market Onboarding Guide\" pdf link navigation for \"SM\" role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerpdflink"
    },
    {
      "name": "@HOAO-20221"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBAE Onboarding-\u003eBAE Market Onboarding Guide\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to view PDF containing text \"Beauty Area Expert On-Boarding\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //android.view.View[contains(normalize-space(@content-desc), \u0027Beauty Area Expert On-Boarding\u0027)] (tried for 60 second(s) with 500 MILLISECONDS interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat com.horizon.utils.WaitUtils.visibilityOfElementLocated(WaitUtils.java:37)\n\tat com.horizon.base.CustomElementSelector.getElementWait(CustomElementSelector.java:76)\n\tat com.horizon.base.ElementIdentification.getElementByPropertyWait(ElementIdentification.java:99)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:115)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:93)\n\tat com.horizon.base.AssertValidation.assertElementPresentVerificationWait(AssertValidation.java:100)\n\tat com.horizon.stepDefinition.CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(CompassPageStepDefinition.java:1120)\n\tat ✽.user should be able to view PDF containing text \"Beauty Area Expert On-Boarding\"(cache/cache/2.feature:250)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //android.view.View[contains(normalize-space(@content-desc), \u0027Beauty Area Expert On-Boarding\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027CHMM118325.local\u0027, ip: \u0027fe80:0:0:0:1437:e351:f322:759b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:882)\n\tat java.util.Optional.orElseThrow(Optional.java:290)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\n\tat com.horizon.utils.WaitUtils.visibilityOfElementLocated(WaitUtils.java:37)\n\tat com.horizon.base.CustomElementSelector.getElementWait(CustomElementSelector.java:76)\n\tat com.horizon.base.ElementIdentification.getElementByPropertyWait(ElementIdentification.java:99)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:115)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:93)\n\tat com.horizon.base.AssertValidation.assertElementPresentVerificationWait(AssertValidation.java:100)\n\tat com.horizon.stepDefinition.CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(CompassPageStepDefinition.java:1120)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:84)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.runTests(TestNGTestClassProcessor.java:134)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.stop(TestNGTestClassProcessor.java:88)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.stop(SuiteTestClassProcessor.java:61)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy1.stop(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.stop(TestWorker.java:123)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:146)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:128)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:46)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:55)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating  \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials-\u003eSoap \u0026 Glory Brand training for Store Management and Team Members\" pdf link navigation for \"SM\" role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerpdflink"
    },
    {
      "name": "@HOAO-20221"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials-\u003eSoap \u0026 Glory Brand training for Store Management and Team Members\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to view PDF containing text \"Soap \u0026 Glory Brand History\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating  \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials-\u003eBoots No.7 Brand training for Store Management and Team Members PDF\" pdf link navigation for \"SM\" role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerpdflink"
    },
    {
      "name": "@HOAO-20221"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials-\u003eBoots No.7 Brand training for Store Management and Team Members PDF\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //android.widget.TextView[@text\u003d\u0027Boots No.7 Brand training for Store Management and Team Members PDF\u0027] (tried for 60 second(s) with 500 MILLISECONDS interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat com.horizon.utils.WaitUtils.visibilityOfElementLocated(WaitUtils.java:37)\n\tat com.horizon.base.CustomElementSelector.getElementWait(CustomElementSelector.java:76)\n\tat com.horizon.base.ElementIdentification.getElementByPropertyWait(ElementIdentification.java:99)\n\tat com.horizon.base.ElementPresent.isElementPresentVerifyWaitClick(ElementPresent.java:331)\n\tat com.horizon.base.ElementPresent.isElementPresentVerifyWaitClick(ElementPresent.java:255)\n\tat com.horizon.base.AssertValidation.assertElementPresentVerifyWaitClick(AssertValidation.java:147)\n\tat com.horizon.stepDefinition.CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(CommonStepDefinition.java:1228)\n\tat ✽.user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials-\u003eBoots No.7 Brand training for Store Management and Team Members PDF\" via card navigation(cache/cache/2.feature:249)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //android.widget.TextView[@text\u003d\u0027Boots No.7 Brand training for Store Management and Team Members PDF\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027CHMM118325.local\u0027, ip: \u0027fe80:0:0:0:1437:e351:f322:759b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:882)\n\tat java.util.Optional.orElseThrow(Optional.java:290)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\n\tat com.horizon.utils.WaitUtils.visibilityOfElementLocated(WaitUtils.java:37)\n\tat com.horizon.base.CustomElementSelector.getElementWait(CustomElementSelector.java:76)\n\tat com.horizon.base.ElementIdentification.getElementByPropertyWait(ElementIdentification.java:99)\n\tat com.horizon.base.ElementPresent.isElementPresentVerifyWaitClick(ElementPresent.java:331)\n\tat com.horizon.base.ElementPresent.isElementPresentVerifyWaitClick(ElementPresent.java:255)\n\tat com.horizon.base.AssertValidation.assertElementPresentVerifyWaitClick(AssertValidation.java:147)\n\tat com.horizon.stepDefinition.CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(CommonStepDefinition.java:1228)\n\tat sun.reflect.GeneratedMethodAccessor24.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:84)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.runTests(TestNGTestClassProcessor.java:134)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.stop(TestNGTestClassProcessor.java:88)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.stop(SuiteTestClassProcessor.java:61)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy1.stop(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.stop(TestWorker.java:123)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:146)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:128)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:46)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:55)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.step({
  "name": "user should be able to view PDF containing text \"Boots Brand History\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating  \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials-\u003eUpdating the Match Made Device in Store\" pdf link navigation for \"SM\" role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerpdflink"
    },
    {
      "name": "@HOAO-20221"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials-\u003eUpdating the Match Made Device in Store\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to view PDF containing text \"MATCH MADE DEVICE SOFTWARE UPDATE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating  \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials-\u003eMatch Made Foundation Shade Chart for No7 Lipsticks and Blush PDF\" pdf link navigation for \"SM\" role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerpdflink"
    },
    {
      "name": "@HOAO-20221"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eTraining Materials-\u003eMatch Made Foundation Shade Chart for No7 Lipsticks and Blush PDF\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to view PDF containing text \"Boots Brand History\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating  \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eHow to Refresh Beauty Consultant in Authenticator Maintenance\" pdf link navigation for \"SM\" role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerpdflink"
    },
    {
      "name": "@HOAO-20221"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eHow to Refresh Beauty Consultant in Authenticator Maintenance\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to view PDF containing text \"POS Vision Maintenance (Back Office)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating  \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eBeauty Consultant Orientation New Hire Experience\" pdf link navigation for \"SM\" role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerpdflink"
    },
    {
      "name": "@HOAO-20221"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eBeauty Consultant Orientation New Hire Experience\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to view PDF containing text \"New Hire Experience – Beauty Consultant Orientation Checklist\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating  \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eStore Manager Toolkit\" pdf link navigation for \"SM\" role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerpdflink"
    },
    {
      "name": "@HOAO-20221"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eStore Manager Toolkit\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to view PDF containing text \"Beauty Differentiation:\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating  \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eBeauty Differentiation Store Manager Presentation\" pdf link navigation for \"SM\" role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerpdflink"
    },
    {
      "name": "@HOAO-20221"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eBeauty Differentiation Store Manager Presentation\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to view PDF containing text \"Beauty Customer Care\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating  \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eIn Store Observation Checklist\" pdf link navigation for \"SM\" role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerpdflink"
    },
    {
      "name": "@HOAO-20221"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eIn Store Observation Checklist\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to view PDF containing text \"In-Store Observation Checklist\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating  \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eBeauty Consultant - Employee Refresh\" pdf link navigation for \"SM\" role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerpdflink"
    },
    {
      "name": "@HOAO-20221"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eBeauty Consultant - Employee Refresh\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to view PDF containing text \"POS Vision Maintenance (Back Office)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating  \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eBeauty Consultant Training and Engagement Check List - No Global Brands\" pdf link navigation for \"SM\" role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerpdflink"
    },
    {
      "name": "@HOAO-20221"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eBeauty Consultant Training and Engagement Check List - No Global Brands\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to view PDF containing text \"On-going activities to accomplish on a regular basis\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //android.view.View[contains(normalize-space(@content-desc), \u0027On-going activities to accomplish on a regular basis\u0027)] (tried for 60 second(s) with 500 MILLISECONDS interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat com.horizon.utils.WaitUtils.visibilityOfElementLocated(WaitUtils.java:37)\n\tat com.horizon.base.CustomElementSelector.getElementWait(CustomElementSelector.java:76)\n\tat com.horizon.base.ElementIdentification.getElementByPropertyWait(ElementIdentification.java:99)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:115)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:93)\n\tat com.horizon.base.AssertValidation.assertElementPresentVerificationWait(AssertValidation.java:100)\n\tat com.horizon.stepDefinition.CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(CompassPageStepDefinition.java:1120)\n\tat ✽.user should be able to view PDF containing text \"On-going activities to accomplish on a regular basis\"(cache/cache/2.feature:250)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //android.view.View[contains(normalize-space(@content-desc), \u0027On-going activities to accomplish on a regular basis\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027CHMM118325.local\u0027, ip: \u0027fe80:0:0:0:1437:e351:f322:759b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:882)\n\tat java.util.Optional.orElseThrow(Optional.java:290)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\n\tat com.horizon.utils.WaitUtils.visibilityOfElementLocated(WaitUtils.java:37)\n\tat com.horizon.base.CustomElementSelector.getElementWait(CustomElementSelector.java:76)\n\tat com.horizon.base.ElementIdentification.getElementByPropertyWait(ElementIdentification.java:99)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:115)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:93)\n\tat com.horizon.base.AssertValidation.assertElementPresentVerificationWait(AssertValidation.java:100)\n\tat com.horizon.stepDefinition.CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(CompassPageStepDefinition.java:1120)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:84)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.runTests(TestNGTestClassProcessor.java:134)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.stop(TestNGTestClassProcessor.java:88)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.stop(SuiteTestClassProcessor.java:61)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy1.stop(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.stop(TestWorker.java:123)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:146)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:128)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:46)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:55)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating  \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eBeauty Consultant Training and Engagement Check List - With Global Brands\" pdf link navigation for \"SM\" role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerpdflink"
    },
    {
      "name": "@HOAO-20221"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eBeauty Consultant Training and Engagement Check List - With Global Brands\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to view PDF containing text \"On-going activities to accomplish on a regular basis\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027CHMM118325.local\u0027, ip: \u0027fe80:0:0:0:1437:e351:f322:759b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.wag.horizon.android.mys..., appPackage: com.wag.horizon.android.mys..., autoGrantPermissions: true, autoWebView: true, automationName: Appium, browserName: Android, chromeAndroidProcess: com.wag.horizon.android.mys..., clearSystemFiles: true, databaseEnabled: false, debugLogSpacing: false, desired: {appActivity: com.wag.horizon.android.mys..., appPackage: com.wag.horizon.android.mys..., autoGrantPermissions: true, autoWebView: true, automationName: Appium, browserName: Android, chromeAndroidProcess: com.wag.horizon.android.mys..., clearSystemFiles: true, debugLogSpacing: false, deviceName: KQ62301018, disableAndroidWatchers: true, enablePerformanceLogging: true, ignoreUnimportantViews: true, javascriptEnabled: true, loggingPrefs: {performance: INFO}, platformName: android, platformVersion: 5.1.1, printPageSourceOnFindFailure: true, proxy: {httpProxy: 10.100.209.126:64703, proxyType: manual, sslProxy: 10.100.209.126:64703}, recreateChromeDriverSessions: true, resetKeyboard: true, unicodeKeyboard: true}, deviceManufacturer: Zebra Technologies, deviceModel: ET5X, deviceName: KQ70301009, deviceScreenSize: 1200x1920, deviceUDID: KQ70301009, disableAndroidWatchers: true, enablePerformanceLogging: true, ignoreUnimportantViews: true, javascriptEnabled: true, locationContextEnabled: false, loggingPrefs: org.openqa.selenium.logging..., networkConnectionEnabled: true, platform: LINUX, platformName: LINUX, platformVersion: 5.1.1, printPageSourceOnFindFailure: true, proxy: Proxy(manual, http\u003d10.100.2..., recreateChromeDriverSessions: true, resetKeyboard: true, takesScreenshot: true, unicodeKeyboard: true, warnings: {}, webStorageEnabled: false}\nSession ID: 52406cd5-263c-4df0-aee6-8ccca51024b5\n*** Element info: {Using\u003dxpath, value\u003d//android.widget.ImageButton[contains(@content-desc,\u0027Open\u0027)]}\n\tat sun.reflect.GeneratedConstructorAccessor35.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:89)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:140)\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat com.horizon.base.CustomElementSelector.getElement(CustomElementSelector.java:107)\n\tat com.horizon.base.ElementIdentification.getElementByProperty(ElementIdentification.java:24)\n\tat com.horizon.base.ElementPresent.isElementPresentVerifyClick(ElementPresent.java:283)\n\tat com.horizon.stepDefinition.HamburgerMenuStepDefinition.click_hamburger_menu(HamburgerMenuStepDefinition.java:55)\n\tat com.horizon.stepDefinition.HamburgerMenuStepDefinition.click_hamburger_menu(HamburgerMenuStepDefinition.java:14)\n\tat com.horizon.stepDefinition.HomeScreenStepDefinition.user_tap_on_vertical_dots(HomeScreenStepDefinition.java:858)\n\tat ✽.tab more option or hamburger menu(cache/cache/2.feature:252)\n",
  "status": "failed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating  \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eBeauty Consultant New Hire Onboarding\" pdf link navigation for \"SM\" role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerpdflink"
    },
    {
      "name": "@HOAO-20221"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBC Onboarding-\u003eBeauty Consultant New Hire Onboarding\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to view PDF containing text \"New Hire Onboarding: Step-by-Step Guide\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating  \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eTravel Expenses \u0026 Hotel: Charge to Store. See Travel Planning and Expense Site\" pdf link navigation for \"SM\" role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerpdflink"
    },
    {
      "name": "@HOAO-20221"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eTravel Expenses \u0026 Hotel: Charge to Store. See Travel Planning and Expense Site\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to view PDF containing text \"Travel Expenses\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //android.view.View[contains(normalize-space(@content-desc), \u0027Travel Expenses\u0027)] (tried for 60 second(s) with 500 MILLISECONDS interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\n\tat com.horizon.utils.WaitUtils.visibilityOfElementLocated(WaitUtils.java:37)\n\tat com.horizon.base.CustomElementSelector.getElementWait(CustomElementSelector.java:76)\n\tat com.horizon.base.ElementIdentification.getElementByPropertyWait(ElementIdentification.java:99)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:115)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:93)\n\tat com.horizon.base.AssertValidation.assertElementPresentVerificationWait(AssertValidation.java:100)\n\tat com.horizon.stepDefinition.CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(CompassPageStepDefinition.java:1120)\n\tat ✽.user should be able to view PDF containing text \"Travel Expenses\"(cache/cache/2.feature:250)\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //android.view.View[contains(normalize-space(@content-desc), \u0027Travel Expenses\u0027)]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027CHMM118325.local\u0027, ip: \u0027fe80:0:0:0:1437:e351:f322:759b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:882)\n\tat java.util.Optional.orElseThrow(Optional.java:290)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:881)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\n\tat com.horizon.utils.WaitUtils.visibilityOfElementLocated(WaitUtils.java:37)\n\tat com.horizon.base.CustomElementSelector.getElementWait(CustomElementSelector.java:76)\n\tat com.horizon.base.ElementIdentification.getElementByPropertyWait(ElementIdentification.java:99)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:115)\n\tat com.horizon.base.ElementPresent.isElementPresentVerificationWait(ElementPresent.java:93)\n\tat com.horizon.base.AssertValidation.assertElementPresentVerificationWait(AssertValidation.java:100)\n\tat com.horizon.stepDefinition.CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(CompassPageStepDefinition.java:1120)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:84)\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:22)\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\n\tat org.testng.TestRunner.run(TestRunner.java:602)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\n\tat org.testng.TestNG.run(TestNG.java:1115)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.runTests(TestNGTestClassProcessor.java:134)\n\tat org.gradle.api.internal.tasks.testing.testng.TestNGTestClassProcessor.stop(TestNGTestClassProcessor.java:88)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.stop(SuiteTestClassProcessor.java:61)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.internal.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy1.stop(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.stop(TestWorker.java:123)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.internal.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:146)\n\tat org.gradle.internal.remote.internal.hub.MessageHubBackedObjectConnection$DispatchWrapper.dispatch(MessageHubBackedObjectConnection.java:128)\n\tat org.gradle.internal.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:404)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:63)\n\tat org.gradle.internal.concurrent.ManagedExecutorImpl$1.run(ManagedExecutorImpl.java:46)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat org.gradle.internal.concurrent.ThreadFactoryImpl$ManagedThreadRunnable.run(ThreadFactoryImpl.java:55)\n\tat java.lang.Thread.run(Thread.java:748)\n",
  "status": "failed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating  \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eBeauty Promotional Monies Policy\" pdf link navigation for \"SM\" role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerpdflink"
    },
    {
      "name": "@HOAO-20221"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003ePolicies-\u003eBeauty Promotional Monies Policy\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to view PDF containing text \"Cosmetic PMs: Policy and Overview\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters. (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027CHMM118325.local\u0027, ip: \u0027fe80:0:0:0:1437:e351:f322:759b%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.3\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {appActivity: com.wag.horizon.android.mys..., appPackage: com.wag.horizon.android.mys..., autoGrantPermissions: true, autoWebView: true, automationName: Appium, browserName: Android, chromeAndroidProcess: com.wag.horizon.android.mys..., clearSystemFiles: true, databaseEnabled: false, debugLogSpacing: false, desired: {appActivity: com.wag.horizon.android.mys..., appPackage: com.wag.horizon.android.mys..., autoGrantPermissions: true, autoWebView: true, automationName: Appium, browserName: Android, chromeAndroidProcess: com.wag.horizon.android.mys..., clearSystemFiles: true, debugLogSpacing: false, deviceName: KQ62301018, disableAndroidWatchers: true, enablePerformanceLogging: true, ignoreUnimportantViews: true, javascriptEnabled: true, loggingPrefs: {performance: INFO}, platformName: android, platformVersion: 5.1.1, printPageSourceOnFindFailure: true, proxy: {httpProxy: 10.100.209.126:64703, proxyType: manual, sslProxy: 10.100.209.126:64703}, recreateChromeDriverSessions: true, resetKeyboard: true, unicodeKeyboard: true}, deviceManufacturer: Zebra Technologies, deviceModel: ET5X, deviceName: KQ70301009, deviceScreenSize: 1200x1920, deviceUDID: KQ70301009, disableAndroidWatchers: true, enablePerformanceLogging: true, ignoreUnimportantViews: true, javascriptEnabled: true, locationContextEnabled: false, loggingPrefs: org.openqa.selenium.logging..., networkConnectionEnabled: true, platform: LINUX, platformName: LINUX, platformVersion: 5.1.1, printPageSourceOnFindFailure: true, proxy: Proxy(manual, http\u003d10.100.2..., recreateChromeDriverSessions: true, resetKeyboard: true, takesScreenshot: true, unicodeKeyboard: true, warnings: {}, webStorageEnabled: false}\nSession ID: 52406cd5-263c-4df0-aee6-8ccca51024b5\n*** Element info: {Using\u003dxpath, value\u003d//android.widget.ImageButton[contains(@content-desc,\u0027Open\u0027)]}\n\tat sun.reflect.GeneratedConstructorAccessor35.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:89)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:140)\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\n\tat com.horizon.base.CustomElementSelector.getElement(CustomElementSelector.java:107)\n\tat com.horizon.base.ElementIdentification.getElementByProperty(ElementIdentification.java:24)\n\tat com.horizon.base.ElementPresent.isElementPresentVerifyClick(ElementPresent.java:283)\n\tat com.horizon.stepDefinition.HamburgerMenuStepDefinition.click_hamburger_menu(HamburgerMenuStepDefinition.java:55)\n\tat com.horizon.stepDefinition.HamburgerMenuStepDefinition.click_hamburger_menu(HamburgerMenuStepDefinition.java:14)\n\tat com.horizon.stepDefinition.HomeScreenStepDefinition.user_tap_on_vertical_dots(HomeScreenStepDefinition.java:858)\n\tat ✽.tab more option or hamburger menu(cache/cache/2.feature:252)\n",
  "status": "failed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating  \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBeauty Standards-\u003eBeauty Department Expense List\" pdf link navigation for \"SM\" role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerpdflink"
    },
    {
      "name": "@HOAO-20221"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBeauty Standards-\u003eBeauty Department Expense List\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to view PDF containing text \"Expense\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating  \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBeauty Standards-\u003eBeauty Differentiation Standards\" pdf link navigation for \"SM\" role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerpdflink"
    },
    {
      "name": "@HOAO-20221"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBeauty Standards-\u003eBeauty Differentiation Standards\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to view PDF containing text \"Retail Operations: Beauty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "app closes relaunch the application",
  "keyword": "When "
});
formatter.match({
  "location": "HomeScreenStepDefinition.appClosesRelaunchTheApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating  \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBeauty Standards-\u003eConsultation Station Planogram\" pdf link navigation for \"SM\" role from card navigation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeSuiteLatest"
    },
    {
      "name": "@Hambergerpdflink"
    },
    {
      "name": "@HOAO-20221"
    },
    {
      "name": "@SMLogin"
    }
  ]
});
formatter.step({
  "name": "user should be able to navigate to \"Training and Procedures-\u003eStore Operations \u0026 Maintenance-\u003eBeauty Differentiation Customer Care Materials-\u003eBeauty Standards-\u003eConsultation Station Planogram\" via card navigation",
  "keyword": "When "
});
formatter.match({
  "location": "CommonStepDefinition.user_should_be_able_to_navigate_to_via_card_navigation(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to view PDF containing text \"BEAUTY CONSULTATION DESK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CompassPageStepDefinition.user_should_be_able_to_view_pdf_containing_text(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "press back arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonStepDefinition.press_back_arrow()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "tab more option or hamburger menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomeScreenStepDefinition.user_tap_on_vertical_dots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user able to click home item",
  "keyword": "Then "
});
formatter.match({
  "location": "HamburgerMenuStepDefinition.click_home_hamburger_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});