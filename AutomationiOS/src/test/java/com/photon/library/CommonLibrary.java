
package com.photon.library;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.TimeUnit;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.configuration.Configuration;
import org.apache.commons.configuration.ConfigurationException;
import org.apache.commons.configuration.ConfigurationFactory;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.Point;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.interactions.touch.TouchActions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import com.photon.userConfig.UserConfig;

import cucumber.api.DataTable;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileBy.ByAccessibilityId;
import io.appium.java_client.MobileElement;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.ios.IOSDriver;
import io.appium.java_client.remote.MobileCapabilityType;
import io.appium.java_client.remote.MobilePlatform;
import io.appium.java_client.touch.WaitOptions;
import io.appium.java_client.touch.offset.PointOption;
import net.lightbody.bmp.BrowserMobProxy;
import net.lightbody.bmp.BrowserMobProxyServer;
import net.lightbody.bmp.core.har.Har;

public class CommonLibrary {

	public static AppiumDriver<WebElement> driver1 = null;
	public static AndroidDriver<MobileElement> driver2 = null;
	public static IOSDriver<MobileElement> driver = null;
	public static WebElement element = null;
	public static WebElement element1 = null;
	public static WebElement element2 = null;
	static WebDriverWait browserWithElementWait = null;
	static long t1 = 0;
	static long t2 = 0;
	static long timeTaken = 0;
	String actual = null;
	public static String expecte = null;
	public static String Y = null;
	static Integer Ycoordinate = null;
	static Integer Xcoordinate = null;
	static Integer img_Width = null;
	static Integer img_Height = null;
	static String imgLocation;
	static String imgSize;
	public static Configuration config = null;
	static String destDir;
	static DateFormat dateFormat;
	static Dimension size;
	public static String driverpath = System.getProperty("user.dir");
	public static String Latesprojectpath = driverpath.replaceAll("\\\\", "\\\\\\\\");
	public static String chromepathLatest = Latesprojectpath + File.separator + "\\Killdriver" + File.separator
			+ "\\Killchrome1.bat";
	public static FileWriter reportFile = null;
	static long pageStartTime = -1;
	static BrowserMobProxy proxy = new BrowserMobProxyServer();
	public static String Authuser = null;
	public static String Authpass = null;
	public static String cmd = "adb shell pm list packages olivegarden";

	public CommonLibrary() throws ConfigurationException, IOException {
		ConfigurationFactory factory = new ConfigurationFactory("config/config.xml");
		config = factory.getConfiguration();
	}

	/*
	 * 
	 * Method to Quit application
	 * 
	 */

	public static void closeApplication() throws InterruptedException {
		System.out.println("Stopping the proxy...sdfsds");
		
		driver.closeApp();

		proxy.stop();
		proxy.abort();

	}

	public static void initReportFile() throws IOException {
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("dd-M-yyyy-hh-mm-ss");
			Date date = new Date();

			String reportFileFullPath = UserConfig.reportDir + UserConfig.reportFile + "_" + sdf.format(date) + ".csv";
			System.out.println(reportFileFullPath);
			File file = new File(reportFileFullPath);
			file.createNewFile();
			System.out.println(reportFileFullPath);
			reportFile = new FileWriter(reportFileFullPath, true);
			reportFile.append("timeStamp,elapsed,label,responseCode,responseMessage,threadName,"
					+ "dataType,success,failureMessage,bytes,grpThreads,allThreads,Latency,IdleTime");
			reportFile.append("\n");

			reportFile.flush();

		} catch (Exception e) {
			e.printStackTrace();
			throw new IOException(e);
		}
	}

	public static void logPerfMetrics(ReportObject ro1) throws IOException {
		// reportFile=new FileWriter("Report");

		reportFile.append(ro1.toString());
		reportFile.append("\n");
		reportFile.flush();
	}

	public static void takeScreenShot() {
		// Set folder name to store screenshots.
		destDir = "Screenshots";
		// Capture screenshot.
		File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		// Set date format to set It as screenshot file name.
		// dateFormat = new SimpleDateFormat("dd-MMM-yyyy__hh_mm_ssaa");

		// Create folder under project with name "screenshots" provided to
		// destDir.
		new File(destDir).mkdirs();
		// Set file name using current date time.
		String destFile = dateFormat.format(new Date()) + ".png";

		try {
			// Copy paste file at destination folder location
			FileUtils.copyFile(scrFile, new File(destDir + "/" + destFile));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static void dynamicDataValidation_regExpression(String pattern, String objectProperty) {

		element = getElementByProperty(objectProperty, driver);
		String actualText = element.getText();
		try {
			Pattern r = Pattern.compile(pattern);

			// Now create matcher object.
			Matcher m = r.matcher(actualText);
			if (m.find()) {
				System.out.println("The format of value is as expected " + m.group(0));

			} else {

				throw new Exception("NO MATCHING DATA FOUND");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public static void Assert(boolean Method, String Result) throws Exception {
		Thread.sleep(1000);
		boolean e1 = Method;

		if (e1 == true) {
			System.out.println(Result);
		} else {

			// CommonLibrary.closeApplication();
			throw new Exception(Result + ": False");

		}
	}

	public static void Soft_Assertion(boolean Method, String Result) {
		SoftAssert s_assert = new SoftAssert();
		s_assert.assertEquals(true, Method, Result);
	}

	public static void Hard_Assertion(boolean Method, String Result) {

		Assert.assertEquals(true, Method, Result);
	}

	/*
	 * 
	 * Method to Launch Application
	 * 
	 */

	public static void App_Launch() throws Exception {

		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setCapability("platformName", "iOS");
		capabilities.setCapability("platformVersion", "14.4");
		capabilities.setCapability("deviceName", "Photon iPhone Xs");
		capabilities.setCapability("udid", "00008020-000A516E3679002E");
		capabilities.setCapability("app","/Users/imaduddin_a/Documents/TESTPRET/PretLAB1.16.2/Pret.ipa");
		capabilities.setCapability("no-reset", true);
		capabilities.setCapability("appWaitDuration", 20000);
		capabilities.setCapability("newCommandTimeout", 60);
		driver = new IOSDriver<MobileElement>(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
		initReportFile();

	}

	public static void PageLoadEvaluation(String pageName, long aTimeStamp, long aElapsed) throws Throwable {
		try {

			CommonLibrary.switchWebview();
			// driver.context("WEBVIEW_com.wba.horizon.android.storeops");
			JavascriptExecutor js = (JavascriptExecutor) driver;
			// Get the Load Event End
			long loadEventEnd = (Long) js.executeScript("return window.performance.timing.loadEventEnd;");
			// Get the Navigation Event Start
			long navigationStart = (Long) js.executeScript("return window.performance.timing.navigationStart;");
			long pageLoadTime = loadEventEnd - navigationStart;
			System.out.println("Total time taken on Page :" + pageLoadTime + "ms");

			long timeStamp;
			long elapsed;
			if (navigationStart != pageStartTime) {
				timeStamp = navigationStart;
				elapsed = pageLoadTime;
			} else {
				timeStamp = aTimeStamp;
				elapsed = aElapsed;
			}
			pageStartTime = navigationStart;
			ReportObject ro = new ReportObject(timeStamp, elapsed, pageName, "Horizon Regression Suite", 0, 0);

			System.out.println(
					"@@@@@@" + pageStartTime + "@@@@@@@" + timeStamp + "@@@@@@@@@@" + elapsed + "@@@@@@@" + pageName);

			logPerfMetrics(ro);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			// driver.context("NATIVE_APP");
			CommonLibrary.switchNativeview();

		}
	}

	public static void PageLoadEvaluationNative(String pageName, long TimeStamp, long Elapsed) throws Throwable {
		try {
			// element = getElementByProperty(Horizon_HomeConstants.app_header,
			// driver);
			// String currpagename=element.getText();

			ReportObject ro = new ReportObject(TimeStamp, Elapsed, pageName , "Olive Garden", 0,
					0);

			//System.out.println(
			//		"@@@@@@" + pageStartTime + "@@@@@@@" + TimeStamp + "@@@@@@@@@@" + Elapsed + "@@@@@@@" + pageName);
			
			//System.out.println(pageName +" - "+ Elapsed);
			
			logPerfMetrics(ro);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			// driver.context("NATIVE_APP");
			//CommonLibrary.switchNativeview();
		}
	}

	public static boolean isElementPresentVerifyClick(String objectProperty, String pageName) throws Throwable {
		boolean isVerifiedAndClicked = false;
		browserWithElementWait = new WebDriverWait(driver, 50);

		try {
			element = getElementByProperty(objectProperty, driver);
			browserWithElementWait.until(ExpectedConditions.elementToBeClickable(element));
			if (element != null) {
				// JavascriptExecutor executor = (JavascriptExecutor)driver;
				// executor.executeScript("arguments[0].click(true);", element);
				proxy.newHar("pageName");
				long startTime = System.currentTimeMillis();
				element.click();
				long endTime = System.currentTimeMillis();
				long timeTaken = (endTime - startTime);
				System.out.println("Total time taken on " + pageName + " :" + timeTaken + "ms");
				Har har = proxy.endHar();
				System.out.println("***********************************");
				String harFileName = System.getProperty("user.dir") + File.separator + "har" + File.separator + pageName
						+ ".har";
				File file = new File(harFileName);
				System.out.println(har.toString());
				har.writeTo(file);
				System.out.println("***********************************");
				PageLoadEvaluation(pageName, startTime, timeTaken);
				Thread.sleep(1000);
				isVerifiedAndClicked = true;
			} else {
				throw new Exception("Object Couldn't be retrieved and clicked");
			}
		} catch (Exception e) {
			element = null;
			e.printStackTrace();
		}
		return isVerifiedAndClicked;
	}

	public static boolean isElementPresentVerifyClick(String objectProperty1, String objectproperty2, String pageName)
			throws Throwable {
		boolean isVerifiedAndClicked = false;
		browserWithElementWait = new WebDriverWait(driver, 50);

		try {
			element = getElementByProperty(objectProperty1, driver);
			browserWithElementWait.until(ExpectedConditions.elementToBeClickable(element));
			if (element != null) {
				// JavascriptExecutor executor = (JavascriptExecutor)driver;
				// executor.executeScript("arguments[0].click(true);", element);
				proxy.newHar("pageName");
				long startTime = System.currentTimeMillis();
				element.click();
				long endTime = System.currentTimeMillis();
				long timeTaken = (endTime - startTime);
				System.out.println("Total time taken on " + pageName + " :" + timeTaken + "ms");
				Har har = proxy.endHar();
				System.out.println("***********************************");
				String harFileName = System.getProperty("user.dir") + File.separator + "har" + File.separator + pageName
						+ ".har";
				File file = new File(harFileName);
				System.out.println(har.toString());
				har.writeTo(file);
				System.out.println("***********************************");
				PageLoadEvaluation(pageName, startTime, timeTaken);
				Thread.sleep(1000);
				isVerifiedAndClicked = true;
			} else {
				throw new Exception("Object Couldn't be retrieved and clicked");
			}
		} catch (Exception e) {
			element = null;
			e.printStackTrace();
		}
		return isVerifiedAndClicked;
	}

	public static boolean isElementPresentVerifyClickNative(String objectProperty,String objectProperty2, String pageName) throws Throwable {

		boolean isVerifiedAndClicked = false;
		//browserWithElementWait = new WebDriverWait(driver, 10);
		String propertyType = null;
		long endTime = 0;
		try {
			element = getElementByProperty(objectProperty, driver);
			propertyType = StringUtils.substringAfter(objectProperty, "~");
			objectProperty = StringUtils.substringBefore(objectProperty, "~");
		/*	if (propertyType.equalsIgnoreCase("ACCESS")) {
				element = browserWithElementWait
						.until(ExpectedConditions.elementToBeClickable(driver.findElement(ByAccessibilityId.AccessibilityId(objectProperty))));
			}  else if (propertyType.equalsIgnoreCase("ID")) {
					element = browserWithElementWait
							.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.id(objectProperty))));
				}else  {
					element = browserWithElementWait
							.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.xpath(objectProperty))));
				}*/
			
			//browserWithElementWait.until(ExpectedConditions.elementToBeClickable(element));
			if (element != null) {
				// JavascriptExecutor executor = (JavascriptExecutor)driver;
				// executor.executeScript("arguments[0].click(true);", element);
				proxy.newHar("pageName");
				
				element.click();
				long startTime = System.currentTimeMillis();
				isElementPresentVerification(objectProperty2);
					endTime = System.currentTimeMillis();
					
				long timeTaken = (endTime - startTime);
				System.out.println("TOTAL TIME TAKEN ON " + pageName + " :" + timeTaken + "ms");
				Har har = proxy.endHar();
				System.out.println("***********************************");
				String harFileName = System.getProperty("user.dir") + File.separator + "har" + File.separator + pageName
						+ ".har";
				File file = new File(harFileName);
				//System.out.println(har.toString());
				har.writeTo(file);
				//System.out.println("***********************************");
				PageLoadEvaluationNative(pageName, startTime, timeTaken);
				Thread.sleep(1000);
				isVerifiedAndClicked = true;

			} else {
				throw new Exception("Object Couldn't be retrieved and clicked");
			}
		} catch (Exception e) {
			element = null;
			e.printStackTrace();
		}
		return isVerifiedAndClicked;
	}
	
	

	public static boolean isElementPresentVerifyClickNative1(String objectProperty, String pageName, String Text)
			throws Throwable {

		boolean isVerifiedAndClicked = false;
		browserWithElementWait = new WebDriverWait(driver, 50);

		try {
			element = getElementByProperty(objectProperty, driver);
			element2 = getElementByProperty(objectProperty, driver);
			browserWithElementWait.until(ExpectedConditions.elementToBeClickable(element));
			if (element != null) {
				// JavascriptExecutor executor = (JavascriptExecutor)driver;
				// executor.executeScript("arguments[0].click(true);", element);
				proxy.newHar("pageName");
				long startTime = System.currentTimeMillis();
				element.click();
				// isElementPresentVerification(com.photon.UIconstants.HomeConstants.APP_HEADER);

				isElementPresentVerification("//android.widget.TextView[@text='" + Text + "']");

				long endTime = System.currentTimeMillis();
				long timeTaken = (endTime - startTime);
				System.out.println("Total time taken on " + pageName + " :" + timeTaken + "ms");
				Har har = proxy.endHar();
				System.out.println("***********************************");
				String harFileName = System.getProperty("user.dir") + File.separator + "har" + File.separator + pageName
						+ ".har";
				File file = new File(harFileName);
				System.out.println(har.toString());
				har.writeTo(file);
				System.out.println("***********************************");
				PageLoadEvaluationNative(pageName, startTime, timeTaken);
				Thread.sleep(1000);
				isVerifiedAndClicked = true;

			} else {
				throw new Exception("Object Couldn't be retrieved and clicked");
			}
		} catch (Exception e) {
			element = null;
			e.printStackTrace();
		}
		return isVerifiedAndClicked;
	}

	public static boolean isElementPresentVerifyClickHome(String objectProperty, String pageName, String Text)
			throws Throwable {

		boolean isVerifiedAndClicked = false;
		browserWithElementWait = new WebDriverWait(driver, 50);

		try {
			element = getElementByProperty(objectProperty, driver);
			element2 = getElementByProperty(objectProperty, driver);
			browserWithElementWait.until(ExpectedConditions.elementToBeClickable(element));
			if (element != null) {
				// JavascriptExecutor executor = (JavascriptExecutor)driver;
				// executor.executeScript("arguments[0].click(true);", element);
				proxy.newHar("pageName");
				long startTime = System.currentTimeMillis();
				element.click();
				// isElementPresentVerification(com.photon.UIconstants.HomeConstants.APP_HEADER);

				isElementPresentVerification("//android.widget.TextView[@text='" + Text + "']");
				// isElementPresentVerification("//android.widget.TextView[@text='MOBILE
				// PAY']");
				long endTime = System.currentTimeMillis();
				long timeTaken = (endTime - startTime);
				System.out.println("Total time taken on " + pageName + " :" + timeTaken + "ms");
				Har har = proxy.endHar();
				System.out.println("***********************************");
				String harFileName = System.getProperty("user.dir") + File.separator + "har" + File.separator + pageName
						+ ".har";
				File file = new File(harFileName);
				System.out.println(har.toString());
				har.writeTo(file);
				System.out.println("***********************************");
				PageLoadEvaluationNative(pageName, startTime, timeTaken);
				Thread.sleep(1000);
				isVerifiedAndClicked = true;

			} else {
				throw new Exception("Object Couldn't be retrieved and clicked");
			}
		} catch (Exception e) {
			element = null;
			e.printStackTrace();
		}
		return isVerifiedAndClicked;
	}

	public static void closeReportFile() throws IOException {
		reportFile.flush();
		reportFile.close();
	}

	public static boolean isElementPresentVerifyClickAuthentication(String objectProperty, String pageName)
			throws Throwable {

		boolean isVerifiedAndClicked = false;
		browserWithElementWait = new WebDriverWait(driver, 50);

		try {
			element = getElementByProperty(objectProperty, driver);
			browserWithElementWait.until(ExpectedConditions.elementToBeClickable(element));
			if (element != null) {
				// JavascriptExecutor executor = (JavascriptExecutor)driver;
				// executor.executeScript("arguments[0].click(true);", element);
				proxy.newHar("pageName");
				long startTime = System.currentTimeMillis();
				element.click();
				// isElementPresentVerification(com.photon.UIconstants.Horizon_HomeConstants.app_header);
				long endTime = System.currentTimeMillis();
				long timeTaken = (endTime - startTime);
				System.out.println("Total time taken on " + pageName + " :" + timeTaken + "ms");
				Har har = proxy.endHar();
				System.out.println("***********************************");
				String harFileName = System.getProperty("user.dir") + File.separator + "har" + File.separator + pageName
						+ ".har";
				File file = new File(harFileName);
				System.out.println(har.toString());
				har.writeTo(file);
				System.out.println("***********************************");
				// PageLoadEvaluationAuthentication(pageName, startTime,
				// timeTaken);
				Thread.sleep(1000);
				isVerifiedAndClicked = true;
			} else {
				throw new Exception("Object Couldn't be retrieved and clicked");
			}
		} catch (Exception e) {
			element = null;
			e.printStackTrace();
		}
		return isVerifiedAndClicked;
	}

	public static void PageLoadEvaluationAuthentication(String pageName, long TimeStamp, long Elapsed)
			throws Throwable {
		try {

			// element =
			// getElementByProperty(com.photon.UIconstants.Horizon_HomeConstants.Authenticator_logo,
			// driver);

			// MobileElement header =
			// driver.findElementByXPath(com.photon.UIconstants.Horizon_HomeConstants.Authenticator_logo);
			// String currpagename=header.getAttribute("name");
			String currpagename = pageName;
			ReportObject ro = new ReportObject(TimeStamp, Elapsed, currpagename, "Horizon Regression Suite", 0, 0);

			logPerfMetrics(ro);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			// driver.context("NATIVE_APP");
			// CommonLibrary.switchNativeview();
		}
	}

	public static boolean isElementPresentVerifyClickHybrid(String objectProperty, String pageName) throws Throwable {

		boolean isVerifiedAndClicked = false;
		browserWithElementWait = new WebDriverWait(driver, 50);

		try {

			element = getElementByProperty(objectProperty, driver);
			browserWithElementWait.until(ExpectedConditions.elementToBeClickable(element));
			if (element != null) {
				// JavascriptExecutor executor = (JavascriptExecutor)driver;
				// executor.executeScript("arguments[0].click(true);", element);
				proxy.newHar("pageName");
				long startTime = System.currentTimeMillis();
				element.click();

			

				long endTime = System.currentTimeMillis();
				long timeTaken = (endTime - startTime);
				System.out.println("Total time taken on " + pageName + " :" + timeTaken + "ms");
				Har har = proxy.endHar();
				System.out.println("***********************************");
				String harFileName = System.getProperty("user.dir") + File.separator + "har" + File.separator + pageName
						+ ".har";
				File file = new File(harFileName);
				System.out.println(har.toString());
				har.writeTo(file);
				System.out.println("***********************************");

				PageLoadEvaluationHybrid(pageName, startTime, timeTaken);
				Thread.sleep(1000);
				isVerifiedAndClicked = true;
			} else {
				throw new Exception("Object Couldn't be retrieved and clicked");
			}
		} catch (Exception e) {
			element = null;
			e.printStackTrace();
		}
		return isVerifiedAndClicked;
	}

	public static void PageLoadEvaluationHybrid(String pageName, long TimeStamp, long Elapsed) throws Throwable {
		try {
			// CommonLibrary.switchWebview();
			String currpagename = pageName;
			ReportObject ro = new ReportObject(TimeStamp, Elapsed, currpagename, "Horizon Regression Suite", 0, 0);

			System.out.println(
					"@@@@@@" + pageStartTime + "@@@@@@@" + TimeStamp + "@@@@@@@@@@" + Elapsed + "@@@@@@@" + pageName);
			logPerfMetrics(ro);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			// driver.context("NATIVE_APP");
			CommonLibrary.switchNativeview();
		}

	}




	// Switch to views

	public static void switchWebview() throws Throwable {
		// killChromeSession();

		Set<String> contextNames = driver.getContextHandles();
		for (String contextName : contextNames) {
			System.out.println(contextName);
			if (contextName.contains("WEBVIEW_com.wag.horizon.android.mystore")) {
				String WebContext = contextName;
				driver.context(WebContext);
			}
		}

		// driver.context("WEBVIEW_com.wag.horizon.android.mystore");
		System.out.println("Now user switch to " + driver.getContext());

	}

	public static void switchNativeview() throws Throwable {
		driver.context("NATIVE_APP");
		System.out.println("Now user switch to " + driver.getContext());
		killChromeSession();
	}

	public static void killChromeSession() throws Throwable {
		String os = System.getProperty("os.name");
		if (os != null && os.contains("Mac")) {
			String target = "Killdriver/Killchrome2.sh";
			Runtime rt = Runtime.getRuntime();
			Process proc = rt.exec(target);
			proc.waitFor();
			StringBuffer output = new StringBuffer();
			BufferedReader reader = new BufferedReader(new InputStreamReader(proc.getInputStream()));
			String line = "";
			while ((line = reader.readLine()) != null) {
				output.append(line + "\t");
				System.out.println("#" + output);
			}
		} else if (os != null && os.contains("Window")) {

			Runtime.getRuntime().exec("cmd /c start " + chromepathLatest);
		} else {
			System.out.println("OS is not supported to kill Chrome session");
		}
	}

	/*
	 * Method for Text validation
	 */

	public static boolean text_Validation(String objectProperty, String expectedText) {
		boolean Textvalidation = false;
		try {
			element = getElementByProperty(objectProperty, driver);
			String actualText = element.getText();
			if (actualText.equalsIgnoreCase(expectedText)) {
				Textvalidation = true;
				System.out.println(" Text expected and actual text are Same:" + actualText);
			} else {
				System.out.println(" Text expected and actual text are not Same:");
				System.out.println(" Text - Actual : " + actualText);
				System.out.println(" Text -Expected : " + expectedText);

			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
		}
		return Textvalidation;
	}

	// Added temporarily
	public static boolean text_ValidationUsingContains(String objectProperty, String expectedText) {
		boolean Textvalidation = false;
		try {
			element = getElementByProperty(objectProperty, driver);
			String actualText = element.getText();
			if (actualText.contains(expectedText)) {
				Textvalidation = true;
				System.out.println(" Text expected and actual text are Same:" + actualText);
			} else {
				System.out.println(" Text expected and actual text are not Same:");
				System.out.println(" Text - Actual : " + actualText);
				System.out.println(" Text -Expected : " + expectedText);

			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
		}
		return Textvalidation;
	}

	/*
	 * Method for Image Accessibility
	 */

	public static void accessibilityValidation(String objectProperty, String Text, String imgName) {
		try {
			element = getElementByProperty(objectProperty, driver);
			String alt = element.getAttribute("alt");
			if (alt.equalsIgnoreCase(Text)) {
				System.out.println(imgName + " Image accessibility expected and actual name are Same");
			} else {
				System.out.println(imgName + " Image accessibility expected and actual name are not Same");
				System.out.println("Accessibility-Actual : " + alt);
				System.out.println("Accessibility-Expected : " + Text);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
		}
	}

	/*
	 * Method for Link Text Validation
	 */

	public static void linkText_Validation(String objectProperty, String Text) {
		try {
			element = getElementByProperty(objectProperty, driver);
			String linkText = element.getText();

			if (linkText.equalsIgnoreCase(Text)) {
				System.out.println("Link Text expected and actual text are Same");
			} else {
				System.out.println("Link Text expected and actual text are not Same");
				System.out.println("Link Text - Actual : " + linkText);
				System.out.println("Link Text -Expected : " + Text);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
		}
	}

	/*
	 * Method for performance validation
	 */

	public static void performanceValidation(long t1, long t2, String perf_Expected)
			throws Exception, IOException, InterruptedException {
		try {
			timeTaken = (t2 - t1) / 1000;
			long expected = Long.parseLong(perf_Expected);
			if (timeTaken <= expected) {
			} else {
				System.out.println(" Page Load Time is High while Navigating to ::" + driver.getTitle());
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
		}
	}

	/*
	 * Method for identifying Web-element by ID/CLASS/NAME/XPATH
	 */

	public static WebElement getElementByProperty(String objectProperty, IOSDriver<MobileElement> webDriver) {
		element = null;

		String propertyType = null;
		WebDriverWait browserWithElementWait = null;
		try {
			if (browserWithElementWait == null) {
				//browserWithElementWait = new WebDriverWait(webDriver, 80);
			}
			browserWithElementWait = new WebDriverWait(webDriver, 10);
			propertyType = StringUtils.substringAfter(objectProperty, "~");
			objectProperty = StringUtils.substringBefore(objectProperty, "~");
			if (propertyType.equalsIgnoreCase("ACCESS")) {
				element = browserWithElementWait
						.until(ExpectedConditions.visibilityOfElementLocated((ByAccessibilityId.AccessibilityId(objectProperty))));
				highlightElement(element, webDriver);
			} else if (propertyType.equalsIgnoreCase("CSS")) {
					element = browserWithElementWait
							.until(ExpectedConditions.visibilityOf(driver.findElement(By.cssSelector(objectProperty))));
					highlightElement(element, webDriver);
				} else if (propertyType.equalsIgnoreCase("ID")) {
					element = browserWithElementWait
							.until(ExpectedConditions.visibilityOfElementLocated((By.id(objectProperty))));
					// highlightElement(webElement, browser);
				} else if (propertyType.equalsIgnoreCase("NAME")) {
					element = browserWithElementWait
							.until(ExpectedConditions.visibilityOf(driver.findElement(By.name(objectProperty))));
					highlightElement(element, webDriver);
				} else if (propertyType.equalsIgnoreCase("LINKTEXT")) {
					element = browserWithElementWait
							.until(ExpectedConditions.visibilityOf(driver.findElement(By.linkText(objectProperty))));
					highlightElement(element, webDriver);
				} else if (propertyType.equalsIgnoreCase("CLASS")) {
					element = browserWithElementWait
							.until(ExpectedConditions.visibilityOf(driver.findElement(By.className(objectProperty))));
					highlightElement(element, webDriver);
				} else {
					element = browserWithElementWait
							.until(ExpectedConditions.visibilityOf(driver.findElement(By.xpath(objectProperty))));
					// highlightElement(webElement, browser); //to avoid overlapping
					// of elements commented the following line of code
					// -Angeline-03AUG2015
				}
		} catch (Exception e) {

		}

		return element;
	}

	public static void clickWebElement(String objectProperty) {
		String driverPath = System.getProperty("user.dir") + "/drivers" + File.separator + "chromedriver.exe";
		System.setProperty("webdriver.chrome.driver", driverPath);

		WebDriver webDriver = new ChromeDriver();

		String propertyType = null;
		WebDriverWait browserWithElementWait = null;
		try {
			if (browserWithElementWait == null) {
				browserWithElementWait = new WebDriverWait(webDriver, 5);
			}
			propertyType = StringUtils.substringAfter(objectProperty, "~");
			objectProperty = StringUtils.substringBefore(objectProperty, "~");
			if (propertyType.equalsIgnoreCase("CSS")) {
				driver.findElement(By.cssSelector(objectProperty)).click();
			} else if (propertyType.equalsIgnoreCase("ID")) {

				driver.findElement(By.id(objectProperty)).click();

			} else if (propertyType.equalsIgnoreCase("NAME")) {
				driver.findElement(By.name(objectProperty)).click();
			} else if (propertyType.equalsIgnoreCase("LINKTEXT")) {
				driver.findElement(By.linkText(objectProperty)).click();
			} else if (propertyType.equalsIgnoreCase("CLASS")) {
				driver.findElement(By.className(objectProperty)).click();
			} else {
				driver.findElement(By.id(objectProperty)).click();
			}
		} catch (Exception e) {

		}

	}

	/*
	 * Common Methods for Element Verification
	 */

	public static boolean isElementPresentVerification(String objectProperty) throws Exception {
		boolean isElementPresent = false;

		try {
			element = getElementByProperty(objectProperty, driver);
			 //browserWithElementWait.until(ExpectedConditions.visibilityOf(element));
			if (element != null) {
				isElementPresent = true;
				// t2=System.currentTimeMillis();
			} else {
				 throw new Exception("Object Couldn't be retrieved and verified");
			}
			// Thread.sleep(1000);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return isElementPresent;
	}

	public static boolean isElementNotPresentVerification(String objectProperty) throws Exception {
		boolean isElementPresent = true;

		try {
			element = getElementByProperty(objectProperty, driver);
			// browserWithElementWait.until(ExpectedConditions.visibilityOf(element));
			if (element != null) {
				isElementPresent = false;
				// t2=System.currentTimeMillis();
			} else {
				// throw new Exception("Object Couldn't be retrieved and
				// verified");
			}
			// Thread.sleep(1000);
		} catch (Exception e) {
			e.printStackTrace();

		}
		return isElementPresent;
	}

	public static boolean isElementSelected(String objectProperty) throws Exception {
		boolean isElementSelected = false;
		try {
			element = getElementByProperty(objectProperty, driver);
			// browserWithElementWait.until(ExpectedConditions.visibilityOf(element));
			if (element.isSelected()) {
				isElementSelected = true;
				// t2=System.currentTimeMillis();
			} else {
				throw new Exception("Given Element not selected");
			}
			// Thread.sleep(1000);
		} catch (Exception e) {
			e.printStackTrace();

		}

		return isElementSelected;

	}

	public static boolean isElementDisplayed(String objectProperty) throws Exception {
		boolean isElementDisplayed = false;
		try {
			element = getElementByProperty(objectProperty, driver);
			browserWithElementWait.until(ExpectedConditions.visibilityOf(element));
			if (element.isEnabled()) {
				isElementDisplayed = true;
				t2 = System.currentTimeMillis();
			} else {
				throw new Exception("Given Element is avilable");
			}
			// Thread.sleep(1000);
		} catch (Exception e) {
			e.printStackTrace();

		}

		return isElementDisplayed;

	}

	// To check the Element is Enable and disabled

	public static boolean isElementEnabled(String objectProperty, String elementState) throws Exception {
		boolean isElementEnable = false;
		try {
			element = getElementByProperty(objectProperty, driver);
			String att = element.getAttribute("enabled");
			if (elementState.equals("enabled")) {
				if (att.equals("true")) {
					isElementEnable = true;
					System.out.println("Element is :" + elementState);
				} else {
					throw new Exception("Given Element is avilable");
				}
			}

			if (elementState.equals("disabled")) {
				if (att.equals("false")) {
					isElementEnable = true;
					System.out.println("Element is :" + elementState);
					// t2=System.currentTimeMillis();
				} else {
					throw new Exception("Given Element is avilable");
				}
			}
			// Thread.sleep(1000);
		} catch (Exception e) {
			e.printStackTrace();

		}

		return isElementEnable;

	}

	/*
	 * Created this method to verify if an element is not clickable and this in
	 * turn verify that the element is also not editable
	 * 
	 */
	public static boolean isElementNotClickable(String objectProperty, String elementState) throws Exception {
		boolean isElementclickable = false;
		try {
			element = getElementByProperty(objectProperty, driver);
			String att = element.getAttribute("clickable");
			if (elementState.equals("clickable")) {
				if (att.equals("false")) {
					isElementclickable = true;
					System.out.println("Element is Not: " + elementState);
				} else {
					throw new Exception("Given Element clickable");
				}
			}

		} catch (Exception e) {
			e.printStackTrace();

		}

		return isElementclickable;

	}

	/*
	 * Method for Entering text in to a field
	 */

	public static boolean clearAndEnterText(String objectProperty, String Text) throws IOException {
		boolean isTextEnteredResult = false;
		// String search_keyword
		// =getXLSTestData(dataMap.get("InputFileName").get(0),
		// dataMap.get("SheetName").get(0), dataMap.get("RowId").get(0),
		// "SearchValue");

		try {
			if ("-".equals(Text)) {
				// ignore this field
				isTextEnteredResult = true;
			} else {
				WebElement textBox = getElementByProperty(objectProperty, driver);
				textBox.clear();
				Thread.sleep(1000);

				/*
				 * Actions action=new Actions(driver);
				 * action.sendKeys(Text).sendKeys(Keys.ENTER).build().perform();
				 */
				textBox.sendKeys(Text);
				Thread.sleep(1000);

				isTextEnteredResult = true;

			}
		} catch (Exception e) {
			e.printStackTrace();
			;
		}
		return isTextEnteredResult;
	}

	/*
	 * Method for Highlight the Elements
	 */
	public static void highlightElement(WebElement element, WebDriver webDriver) {
		for (int i = 0; i < 1; i++) {
			JavascriptExecutor js = (JavascriptExecutor) webDriver;
			js.executeScript("arguments[0].setAttribute('style', arguments[1]);", element,
					"color: black; border: 3px solid black;");
		}
	}


	/*
	 * Method for Click Element if available
	 */

	public static boolean isElementPresentVerifyClick(String objectProperty) {
		boolean isVerifiedAndClicked = false;
		browserWithElementWait = new WebDriverWait(driver, 30);
		try {
			element = getElementByProperty(objectProperty, driver);

			browserWithElementWait.until(ExpectedConditions.elementToBeClickable(element));
			if (element != null) {
				// JavascriptExecutor executor = (JavascriptExecutor)driver;
				// executor.executeScript("arguments[0].click(true);", element);
				element.click();
				isVerifiedAndClicked = true;

				// browserWithElementWait = new WebDriverWait(driver,1);
				// Thread.sleep(5000);
			} else {
				throw new Exception("Object Couldn't be retrieved and clicked");
			}
		} catch (Exception e) {
			element = null;
		}
		return isVerifiedAndClicked;
	}

	public static boolean ClickSearch(String pageName) {

		boolean isVerifiedAndClicked = false;
		browserWithElementWait = new WebDriverWait(driver, 50);

		try {
			//CommonLibrary.driver.tap(2, 720, 560, 4000);
			// JavascriptExecutor executor = (JavascriptExecutor)driver;
			// executor.executeScript("arguments[0].click(true);", element);
			proxy.newHar("pageName");
			long startTime = System.currentTimeMillis();

			//CommonLibrary.driver.tap(2, 720, 560, 4000);
			// isElementPresentVerification(com.photon.UIconstants.HomeConstants.APP_HEADER);

			long endTime = System.currentTimeMillis();
			long timeTaken = (endTime - startTime);
			System.out.println("Total time taken on " + pageName + " :" + timeTaken + "ms");
			Har har = proxy.endHar();
			System.out.println("***********************************");
			String harFileName = System.getProperty("user.dir") + File.separator + "har" + File.separator + pageName
					+ ".har";
			File file = new File(harFileName);
			System.out.println(har.toString());
			har.writeTo(file);
			System.out.println("***********************************");
			PageLoadEvaluationNative(pageName, startTime, timeTaken);
			Thread.sleep(1000);
			isVerifiedAndClicked = true;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (Throwable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return isVerifiedAndClicked;

	}

	/*
	 * Methods for
	 */

	public static void scrollTo(String objectProperty) {
		/*
		 * ((JavascriptExecutor) driver).executeScript(
		 * "arguments[0].scrollIntoView();", element);
		 */

		element = getElementByProperty(objectProperty, driver);
		Point Location = element.getLocation();
		System.out.println(Location);
		Actions actions = new Actions(driver);
		actions.moveToElement(element, 455, 5555);
		// actions.click();
		actions.perform();

	}

	/*
	 * Methods for
	 */

	public static Map<String, List<String>> getHorizontalData(DataTable dataTable) {
		Map<String, List<String>> dataMap = null;
		try {
			dataMap = new HashMap<String, List<String>>();
			List<String> headingRow = dataTable.raw().get(0);
			
			int dataTableRowsCount = dataTable.getGherkinRows().size() - 1;
			ArrayList<String> totalRowCount = new ArrayList<String>();
			totalRowCount.add(Integer.toString(dataTableRowsCount));
			dataMap.put("totalRowCount", totalRowCount);
			for (int i = 0; i < headingRow.size(); i++) {
				List<String> dataList = new ArrayList<String>();
				dataMap.put(headingRow.get(i), dataList);
				for (int j = 1; j <= dataTableRowsCount; j++) {
					List<String> dataRow = dataTable.raw().get(j);
					dataList.add(dataRow.get(i));

					

				}
			}
		} catch (Exception e) {

		}
		return dataMap;
	}

	/*
	 * Methods for
	 */

	public static Map<String, List<String>> getVerticalData(DataTable dataTable) {
		Map<String, List<String>> dataMap = null;
		try {
			int dataTableRowsCount = dataTable.getGherkinRows().size();
			dataMap = new HashMap<String, List<String>>();
			for (int k = 0; k < dataTableRowsCount; k++) {
				List<String> dataRow = dataTable.raw().get(k);
				String key = dataRow.get(0);
				dataRow.remove(0);
				dataMap.put(key, dataRow);
			}
		} catch (Exception e) {

		}
		return dataMap;
	}

	/*
	 * Methods for
	 */

	public static String getXLSTestData(String FileName, String SheetName, String RowId, String column)
			throws IOException {
		config.getString("ItemCode");
		String col1 = null;
		DataFormatter df = new DataFormatter();
		FileInputStream file = new FileInputStream(
				new File(System.getProperty("user.dir") + "/InputData" + File.separator + FileName + ".xls"));
		HSSFWorkbook book = new HSSFWorkbook(file);
		HSSFSheet sheet = book.getSheet(SheetName);
		int rowCount = sheet.getLastRowNum() - sheet.getFirstRowNum();
		for (int rowIterator = 1; rowIterator <= rowCount; rowIterator++) {
			String row = sheet.getRow(rowIterator).getCell(0).getStringCellValue();
			if (row.equalsIgnoreCase(RowId)) {
				for (int colIterator = 1; colIterator < sheet.getRow(rowIterator).getLastCellNum(); colIterator++) {
					String col = sheet.getRow(0).getCell(colIterator).getStringCellValue();
					if (col.equalsIgnoreCase(column)) {
						Cell cellvalue = sheet.getRow(rowIterator).getCell(colIterator);
						col1 = df.formatCellValue(cellvalue);
						break;
					}
				}
			}
		}
		return col1;
	}

	// Swipe the screen towards UP

	public static void swipeup(String objectProperty) throws Exception {
		//try {

			int z = 0;
			if (isElementPresentVerification(objectProperty) == false) {
				// Get the size of screen.
				size = driver.manage().window().getSize();

				// Find starty point which is at bottom side of screen.
				int starty = (int) (size.height * 0.80);

				// Find endy point which is at top side of screen.
				int endy = (int) (size.height * 0.20);

				// Find horizontal point where you wants to swipe. It is in
				// middle of
				// screen width.
				int startx = size.width / 2;

				// Swipe till given element is located

				while (isElementPresentVerification(objectProperty) == false) {
					z = z + 1;
					if (z < 5) {
						//driver.swipe(startx, starty, startx, endy, 300);

					} else {
						throw new Exception("Requested Element not present in the page");
					}

				}
			}
	//	} catch (Exception e) {
		//	throw new Exception("Unable to Swipe Up");
		//}
	}

	public static void swipedown(String objectProperty) throws Exception {
		// Get the size of screen.
		int z = 0;
		size = driver.manage().window().getSize();

		// Find starty point which is at bottom side of screen.
		int starty = (int) (size.height * 0.20);

		// Find endy point which is at top side of screen.
		int endy = (int) (size.height * 0.80);

		// Find horizontal point where you wants to swipe. It is in middle of
		// screen width.
		int startx = size.width / 2;

		// Swipe till given element is located

		while (isElementPresentVerification(objectProperty) == false) {
			z = z + 1;
			if (z < 5) {
				//driver.swipe(startx, endy, startx, starty, 3000);

			} else {
				//closeApplication();
				throw new Exception("Requested Element not present in the page");

			}

		}
	}

	public static void swipeLeft(String objectProperty,Double x) throws Exception {
		Thread.sleep(1000);
		int z=0;
		if (isElementPresentVerification(objectProperty) == false) {
			// Get the size of screen.
			size = driver.manage().window().getSize();

			
			
			// Find starty point which is at bottom side of screen.
			int startx = (int) (size.width * 0.80);

			// Find endy point which is at top side of screen.
			int endx = (int) (size.width * 0.20);

			// Find horizontal point where you wants to swipe. It is in middle
			// of
			// screen width.
			int starty = (int) ( size.height / x);
			int endy = (int) ( size.height / x);
			// Swipe till given element is located

			while (isElementPresentVerification(objectProperty) == false) {
				z = z + 1;
				if (z < 5) {
					//driver.swipe(startx, starty, endx, endy, 700);
				} else {
					//closeApplication();
					throw new Exception("Requested Element not present in the page");

				}

			}
		}
	}

	// Swipe left for Mobile

	/*
	 * public static void swipeLeftMobile(String objectProperty) throws
	 * Exception { if(isElementPresentVerification(objectProperty) == false) {
	 * // Get the size of screen. size = driver.manage().window().getSize();
	 * 
	 * // Find starty point which is at bottom side of screen. int startx =
	 * (int) (size.width * 0.80);
	 * 
	 * // Find endy point which is at top side of screen. int endx = (int)
	 * (size.width * 0.20);
	 * 
	 * // Find horizontal point where you wants to swipe. It is in middle of //
	 * screen width. int starty = size.height /2; int endy=size.height/2;
	 * 
	 * // Swipe till given element is located
	 * 
	 * while (isElementPresentVerification(objectProperty) == false) { z = z +
	 * 1; if (z < 9) {
	 * 
	 * driver.swipe(startx, starty, endx, endy, 3000); } else {
	 * closeApplication(); throw new Exception(
	 * "Requested Element not present in the page");
	 * 
	 * }
	 * 
	 * }} }
	 */

	/// Swipe to the Left


	public static void swipeRight(String objectProperty) throws Exception {

		if (isElementPresentVerification(objectProperty) == false) {
			int z = 0;
			size = driver.manage().window().getSize();

			// Find starty point which is at bottom side of screen.
			int startx = (int) (size.width * 0.20);

			// Find endy point which is at top side of screen.
			int endx = (int) (size.width * 0.80);

			// Find horizontal point where you wants to swipe. It is in middle
			// of
			// screen width.
			int starty = size.width / 3;
			int endy = size.width / 3;

			// Swipe till given element is located

			while (isElementPresentVerification(objectProperty) == false) {
				z = z + 1;
				if (z < 5) {

					//driver.swipe(startx, starty, endx, starty, 3000);
				} else {
					closeApplication();
					throw new Exception("Requested Element not present in the page");

				}

			}

		}
	}

	public static void minimizeApp(int seconds) throws Exception {

		try {

			//driver.runAppInBackground(seconds);

		} catch (Exception e) {
			throw new Exception("Unable to minimize the app");
		}
	}

	public static void BrowserClick(String objectProperty, String pageName) throws Throwable {
		// boolean isVerifiedAndClicked = false;
		// WebDriver driver3 = null;
		// browserWithElementWait = new WebDriverWait(driver3,50);

		try {
			// WebElement element1 =
			// driver.findElement(By.xpath(objectProperty));
			// browserWithElementWait.until(ExpectedConditions.elementToBeClickable(element));
			// if (element != null) {

			WebElement element1 = driver.findElement(By.xpath(objectProperty));
			JavascriptExecutor js = (JavascriptExecutor) driver;
			// Get the Load Event End

			proxy.newHar(pageName);
			long startTime = System.currentTimeMillis();

			element1.click();

			long loadEventEnd = (Long) js.executeScript("return window.performance.timing.loadEventEnd;");
			// Get the Navigation Event Start
			long navigationStart = (Long) js.executeScript("return window.performance.timing.navigationStart;");
			long pageLoadTime = loadEventEnd - navigationStart;
			System.out.println("Total time taken on Page :" + pageLoadTime + "ms");
			System.out.println(pageName + " --- " + driver.getCurrentUrl());

			long endTime = System.currentTimeMillis();
			long timeTaken = (endTime - startTime);
			System.out.println("Total time taken on " + pageName + " :" + timeTaken + "ms");

			Har har = proxy.endHar();

			long timeStamp;
			long elapsed = pageLoadTime;
			if (navigationStart != pageStartTime) {
				timeStamp = navigationStart;
				elapsed = pageLoadTime;
			} else {
				timeStamp = startTime;
				elapsed = timeTaken;
			}
			pageStartTime = navigationStart;

			System.out.println("@@@@@@" + pageStartTime + "@@@@@@@" + navigationStart + "@@@@@@@@@@" + elapsed
					+ "@@@@@@@" + pageName);
			String harFileName = System.getProperty("user.dir") + File.separator + "har" + File.separator + pageName
					+ ".har";

			File file = new File(harFileName);
			System.out.println(har.toString());
			har.writeTo(file);

			ReportObject ro = new ReportObject(timeStamp, elapsed, pageName, "Horizon Regression Suite", 0, 0);

			System.out.println(
					"@@@@@@" + pageStartTime + "@@@@@@@" + timeStamp + "@@@@@@@@@@" + elapsed + "@@@@@@@" + pageName);

			logPerfMetrics(ro);

		} catch (Exception e) {
			e.printStackTrace();
		} finally {

			System.out.println("page is loaded");
			// driver.close();

		}

	}

	

	public static String XpathContentDesc(String arg) {

		return "//android.view.View[contains(@content-desc,'" + arg + "')]";
	}

	public static boolean isElementNotSelected(String objectProperty) throws Exception {
		boolean isElementNotSelected = false;
		try {
			element = getElementByProperty(objectProperty, driver);
			// browserWithElementWait.until(ExpectedConditions.visibilityOf(element));
			if (!element.isSelected()) {
				isElementNotSelected = true;
				// t2=System.currentTimeMillis();
			} else {
				throw new Exception("Given Element is selected");
			}
			// Thread.sleep(1000);
		} catch (Exception e) {
			e.printStackTrace();

		}

		return isElementNotSelected;

	}

	public static void swipeUpMobile() throws InterruptedException {
		// Get the size of screen.
		size = driver.manage().window().getSize();
		// System.out.println(size);

		// Find swipe start and end point from screen's with and height.
		// Find starty point which is at bottom side of screen.
		int starty = (int) (size.height * 0.80);
		// Find endy point which is at top side of screen.
		int endy = (int) (size.height * 0.20);
		// Find horizontal point where you wants to swipe. It is in middle of
		// screen width.
		int startx = size.width / 2;
		// System.out.println("starty = " + starty + " ,endy = " + endy + " ,
		// startx = " + startx);

		// Swipe from Bottom to Top.
		//driver.swipe(startx, starty, startx, endy, 3000);
		Thread.sleep(2000);
	}

	

public static String getValueFromProperty(String key) {
	Properties prop = new Properties();
	InputStream input = null;
	String value = null;

	try {

		input = new FileInputStream(System.getProperty("user.dir")+"/config/config.properties");

		// load a properties file
		prop.load(input);

		// get the property value and print it out
		 value = prop.getProperty(key);
		

	} catch (IOException ex) {
		ex.printStackTrace();
	}
	
	
	return value;
	}

public static boolean elementVerifyDoubleTap(String objectProperty) {
	boolean isVerifiedAndClicked = false;
	browserWithElementWait = new WebDriverWait(driver, 30);
	try {
		element = getElementByProperty(objectProperty, driver);

		browserWithElementWait.until(ExpectedConditions.elementToBeClickable(element));
		if (element != null) {
			TouchActions action = new TouchActions(driver);
			action.doubleTap(element);
			action.perform();

			isVerifiedAndClicked = true;
			

			// browserWithElementWait = new WebDriverWait(driver,1);
			// Thread.sleep(5000);
		} else {
			throw new Exception("Object Couldn't be retrieved and clicked");
		}
	} catch (Exception e) {
		element = null;
	}
	return isVerifiedAndClicked;
}

	//Method Wait Time
	public static void longTime() throws Exception {
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	}
	
	public static void mediumTime() throws Exception {
		driver.manage().timeouts().implicitlyWait(7, TimeUnit.SECONDS);
	}
	
	public static void shortTime() throws Exception {
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
	}
	
	public static String getUniqueId() {
        return String.format("%s_%s", UUID.randomUUID().toString().substring(0, 5), System.currentTimeMillis() / 1000);
    }


     public static String generateMailinatorEmail() {
            return String.format("pret-cypress-test-automation-%s@%s", getUniqueId(), "mailinator.com");
     }
	
	// Scroll Down
		public static void scrollDown()  {
		    //The viewing size of the device
		    Dimension size = driver.manage().window().getSize();
		    //x position set to mid-screen horizontally
		    int width = size.width / 2;
		    //Starting y location set to 80% of the height (near bottom)
		    int startPoint = (int) (size.getHeight() * 0.80);
		    //Ending y location set to 20% of the height (near top)
		    int endPoint = (int) (size.getHeight() * 0.20);
		    
		    TouchAction touchAction = new TouchAction(driver).press(PointOption.point(width, startPoint));
		    WaitOptions waitOptions = WaitOptions.waitOptions(Duration.ofMillis(2000));
		    PointOption pointOption =  PointOption.point(width, endPoint);
		    touchAction.waitAction(waitOptions).moveTo(pointOption).release().perform();
		}
		
		// Scroll Up
		public static void scrollUp()  {
		    //The viewing size of the device
		    Dimension size = driver.manage().window().getSize();
		    //x position set to mid-screen horizontally
		    int width = size.width / 2;
		    //Starting y location set to 80% of the height (near bottom)
		    int startPoint = (int) (size.getHeight() * 0.20);
		    //Ending y location set to 20% of the height (near top)
		    int endPoint = (int) (size.getHeight() * 0.80);
		    
		    TouchAction touchAction = new TouchAction(driver).press(PointOption.point(width, startPoint));
		    WaitOptions waitOptions = WaitOptions.waitOptions(Duration.ofMillis(2000));
		    PointOption pointOption =  PointOption.point(width, endPoint);
		    touchAction.waitAction(waitOptions).moveTo(pointOption).release().perform();
		}
		
		// Scroll find text
		public static void scrollFindText(String textElement) {
//			driver.findElementByAndroidUIAutomator(scrollTextElement(textElement));
		}
		
		// Method Swipe Left to Right
		public static void swipeLeftToRight(int startX, int startY, int endX, int endY) {
			TouchAction touchAction = new TouchAction(driver);
			touchAction.longPress(PointOption.point(startX, startY)).moveTo(PointOption.point(endX, endY)).release().perform();
		}
		
		// Method Swipe Right to Left
		public static void swipeRightToLeft(int startX, int startY, int endX, int endY) {
			TouchAction touchAction = new TouchAction(driver);
			touchAction.longPress(PointOption.point(startX, startY)).moveTo(PointOption.point(endX, endY)).release().perform();
		}
		
		// Method Swipe Down to Up
		public static void swipeDownToUp(int startX, int startY, int endX, int endY) {
			TouchAction touchAction = new TouchAction(driver);
			touchAction.longPress(PointOption.point(startX, startY)).moveTo(PointOption.point(endX, endY)).release().perform();
		}
			
		// Method Swipe Down to Up
		public static void swipeUpToDown(int startX, int startY, int endX, int endY) {
			TouchAction touchAction = new TouchAction(driver);
			touchAction.longPress(PointOption.point(startX, startY)).moveTo(PointOption.point(endX, endY)).release().perform();
		}
		
		// Tapping on Screen Coordinate
		public static void screenTapping(int x,int y) throws Exception {
			Thread.sleep(2000);
			try {
				TouchAction touchAction = new TouchAction(driver);
				touchAction.tap(PointOption.point(x, y)).perform();
			//	driver.tap(1, x, y, 300);
				System.out.println("user tapped On Screen successfully");

			} catch (Exception e) {
				throw new Exception("Unable to tap on the Screen");
			}
			Thread.sleep(1000);
		}
		
		public static void tapOutsideElement(String elementAddress) throws Exception {
			WebElement element = driver.findElement(By.xpath(elementAddress));
			Point elementLocation = element.getLocation();
			int a = elementLocation.getX() + 2;
			int b = elementLocation.getY() - 2;
			screenTapping(a,b);
		}
		
		public static void textClick(String textElement) {
	        driver.findElement(By.xpath("//XCUIElementTypeOther[@name='"+textElement+"']")).click();
	    }
		
		public static void explicitWait(String ObjectPath) {
			WebDriverWait wait = new WebDriverWait(driver,30);
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(ObjectPath)));
			
		}

}