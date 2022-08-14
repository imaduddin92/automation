package com.photon.UIconstants;

public class WalletScreenConstant {
	public static final String WalletScreen = "//XCUIElementTypeOther[@name='qr_view']";
	public static final String ScanAtText = "//XCUIElementTypeStaticText[@name=\"Scan at the till to collect stars and redeem perks.\"]";
	public static final String PretCoffeeSubsMonthText = "(//XCUIElementTypeButton[@name=\"subscribe_now_button\"])[1]";
	public static final String YourSubscriptionTitleText = "//XCUIElementTypeStaticText[@name=\"Your Subscription\"]";
	public static final String PremiumButton = "//XCUIElementTypeButton[@name=\"Premium Plan. $29.99 a month.\"]";
	public static final String ClassicButton = "//XCUIElementTypeButton[@name=\"Classic Plan. $19.99 a month.\"]";
	public static final String NewYorkRadioButton = "//XCUIElementTypeButton[@name=\"New York\"]";
	public static final String ContinueButtonSubs = "//XCUIElementTypeButton[@name=\"continue_to_bag\"]";
	public static final String CloseButtonYourSubsScreen ="//XCUIElementTypeButton[@name=\"closeButton\"]";
	
	public static final String LegalCopyText = "//XCUIElementTypeButton[@name=\"By continuing you confirm you are aged 18 or over and agree to the terms and conditions You understand that your subscription starts immediately and will automatically renew unless cancelled in accordance with the Terms.\"]";
	public static final String ChangeMethodButton = "//XCUIElementTypeButton[@name=\"pay_now_button\"]";
	public static final String YourOrderTitleText = "//XCUIElementTypeStaticText[@name=\"Your order\"]";
	public static final String BackButtonToYourSubsScreen = "//XCUIElementTypeButton[@name=\"Your Subscription\"]";
	
	public static final String OneCodeText = "//XCUIElementTypeStaticText[@name=\"One code for everything in your wallet\"]";
	
	//Credit Card overlay
	public static final String CreditCardNumberTextfield = "//XCUIElementTypeTextField[@name=\"Adyen.FormCardNumberContainerItem.numberItem.textField\"]";
	public static final String ExpiryDateTextfield = "//XCUIElementTypeTextField[@name=\"Adyen.CardComponent.expiryDateItem.textField\"]";
	public static final String CVVTextfield = "//XCUIElementTypeTextField[@name=\"Adyen.CardComponent.securityCodeItem.textField\"]";
	
	// Billing Address
	public static final String HouseNumberTextfield = "//XCUIElementTypeTextField[@name=\"Adyen.CardComponent.billingAddress.houseNumberOrName.textField\"]";
	public static final String StreetTextfield = "//XCUIElementTypeTextField[@name=\"Adyen.CardComponent.billingAddress.street.textField\"]";
	public static final String CityTextfield = "//XCUIElementTypeTextField[@name=\"Adyen.CardComponent.billingAddress.city.textField\"]";
	public static final String PostalCodeTextfield = "//XCUIElementTypeTextField[@name=\"Adyen.CardComponent.billingAddress.postalCode.textField\"]";
	public static final String NextBtn = "//XCUIElementTypeButton[@name='Next:']";
	
	public static final String PayButton = "//XCUIElementTypeButton[@name=\"Adyen.CardComponent.payButtonItem.button\"]";
	
	//Welcome overlay
	public static final String WelcomeYourNewCoffeeSubscription = "//XCUIElementTypeStaticText[@label='Welcome to your new Coffee Subscription']";
	public static final String WelcomeMessage = "//XCUIElementTypeStaticText[@name='Welcome to your new Coffee Subscription']";
	public static final String RenewSubscription = "//XCUIElementTypeStaticText[@name='Your subscription will renew on']";
	public static final String GetStartedButton = "//XCUIElementTypeButton[@name='get_started_button']";
	public static final String ActiveStatus = "//XCUIElementTypeOther[@name=\"mobile.wallet.subscription.accessibility.identifier.subscription.status\"]";
	
	public static final String ComparePlanButton = "//XCUIElementTypeButton[@name=\"Compare plans\"]";
	public static final String ComparePlanScreen = "//XCUIElementTypeStaticText[@name=\"How our plans compare:\"]";
	
	//Payment Method overlay
	public static final String PaymentMethodsOverlay = "//XCUIElementTypeStaticText[@name='Payment Methods']";
	public static final String CloseButton = "//XCUIElementTypeButton[@name='close']";
	public static final String CreditCardButton  = "//XCUIElementTypeStaticText[@value='Credit Card']";

	//French
	public static final String AbonnementCafeButton = "//XCUIElementTypeOther[@name=\"mobile.wallet.subscription.accessibility.identifier.subscription.status\"]";
	public static final String VotreAbonnementScreen = "//XCUIElementTypeNavigationBar[@name=\"Votre abonnement\"]";
	public static final String CommentCaMarche = "//XCUIElementTypeButton[@name=\"Comment ça marche ?\"]";
	public static final String LAbonnementCafe = "//XCUIElementTypeStaticText[@name=\"L'Abonnement Café Pret\"]";
	public static final String WalletQRCode = "//XCUIElementTypeOther[@name=\"qr_view\"]";
	
}
