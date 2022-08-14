package com.photon.UIconstants;

public class CreateAccountScreen {
	public static final String GettingToKnowYouText = "//XCUIElementTypeStaticText[@name=\"Getting to know you\"]";
	public static final String FirstNameTextField = "//XCUIElementTypeOther[@name=\"main\"]/XCUIElementTypeOther[4]/XCUIElementTypeTextField";
	public static final String LastNameTextField = "//XCUIElementTypeOther[@name=\"main\"]/XCUIElementTypeOther[6]/XCUIElementTypeTextField";
	public static final String PhoneNumberDropdown = "//XCUIElementTypeOther[@name=\"Country code\"]";
	public static final String USCountryCode = "//XCUIElementTypeButton[@name=\"United States of America (+1)\"]";
	public static final String FranceCountryCode = "/XCUIElementTypePickerWheel[`value == \"France (+33)\"`]/XCUIElementTypeOther[4]";
	public static final String PhoneTextField = "//XCUIElementTypeOther[@name=\"main\"]/XCUIElementTypeTextField";
	public static final String EmailTextField = "//XCUIElementTypeOther[@name=\"main\"]/XCUIElementTypeOther[11]/XCUIElementTypeTextField";
	public static final String PasswordTextField = "//XCUIElementTypeOther[@name=\"main\"]/XCUIElementTypeOther[13]/XCUIElementTypeSecureTextField";
	public static final String ChooseLocationDropdown = "//XCUIElementTypeOther[@name=\"Where do you live?\"]/XCUIElementTypeOther[4]/XCUIElementTypeOther";
	public static final String UKLocation = "//XCUIElementTypeButton[@name=\"United Kingdom\"]";
	public static final String USALocation = "//XCUIElementTypeButton[@name=\"USA\"]";
	public static final String FranceLocation = "//XCUIElementTypeButton[@name=\"France\"]";
	public static final String EmailCheckbox = "//XCUIElementTypeOther[@name=\"Marketing messages\"]/XCUIElementTypeOther[4]";
	public static final String CreateAccountButton = "(//XCUIElementTypeButton[@name=\"Create account\"])[2]";
	public static final String SigninButton = "//XCUIElementTypeStaticText[@name=\"here\"]";
	public static final String DoneButton ="//XCUIElementTypeButton[@label=\"Done\"]";
}
