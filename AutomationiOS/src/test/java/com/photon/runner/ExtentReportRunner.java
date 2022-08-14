package com.photon.runner;



import java.io.File;
import java.util.HashMap;
import java.util.Map;

import org.testng.annotations.BeforeClass;

import com.cucumber.listener.ExtentCucumberFormatter;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(features = {"Feature"},glue ={"stepDefinition"}
,tags = {"@regression"},
plugin = { "html:target/cucumber-htmlreport", "json:target/cucumber-report.json","usage:target/cucumber-usage.json","rerun:target/rerun.txt","com.cucumber.listener.ExtentCucumberFormatter" })


public class ExtentReportRunner extends AbstractTestNGCucumberTests {
@BeforeClass
public static void setup() {
// Initiates the extent report and generates the output in the output/Run_<unique timestamp>/report.html file by default.
ExtentCucumberFormatter.initiateExtentCucumberFormatter();
// Loads the extent config xml to customize on the report.
ExtentCucumberFormatter.loadConfig(new File("src/test/java/extent-config.xml"));
// User can add the system information as follows // The deatils can be dynamically populated using appropriate java coding
ExtentCucumberFormatter.addSystemInfo("IOS Version", "12.1.4");
//ExtentCucumberFormatter.addSystemInfo("IOS Version", "11.2.6");
ExtentCucumberFormatter.addSystemInfo("Iphone UDID", "00008020-001104441A04002E");
//ExtentCucumberFormatter.addSystemInfo("Iphone UDID", "25d2619176549e28a123554bead2d30b74cf68fa");
ExtentCucumberFormatter.addSystemInfo("Mobile Brand", "Iphone X");
ExtentCucumberFormatter.addSystemInfo(" Model","MT942LL/A");
//ExtentCucumberFormatter.addSystemInfo(" Model","MQA52HN/A");
ExtentCucumberFormatter.addSystemInfo("Appium Server", "1.13");
// Also you can add system information using a hash map
Map<String,String> systemInfo = new HashMap<String,String>();

systemInfo.put("Cucumber version", "v1.2.4");
systemInfo.put("Extent Cucumber Reporter version", "v1.1.1");
ExtentCucumberFormatter.addSystemInfo(systemInfo);
}
}