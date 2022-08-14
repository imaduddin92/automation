package com.photon.runner;



import java.io.File;
import java.util.HashMap;
import java.util.Map;

import org.testng.annotations.BeforeClass;

import com.cucumber.listener.ExtentCucumberFormatter;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(features = {"Feature"},glue ={"stepDefinition"}
,tags = {"@automation"},
plugin = { "com.cucumber.listener.ExtentCucumberFormatter:output" })


public class ExtentReportRunner extends AbstractTestNGCucumberTests {
@BeforeClass
public static void setup() {
// Initiates the extent report and generates the output in the output/Run_<unique timestamp>/report.html file by default.
ExtentCucumberFormatter.initiateExtentCucumberFormatter();
// Loads the extent config xml to customize on the report.
ExtentCucumberFormatter.loadConfig(new File("src/test/java/extent-config.xml"));
// User can add the system information as follows // The details can be dynamically populated using appropriate java coding
//ExtentCucumberFormatter.addSystemInfo("Name", "95c055e08c709a0ffb204ffc418a3917488636eb");
ExtentCucumberFormatter.addSystemInfo("Browser", "Chrome");
// Also you can add system information using a hash map
Map<String,String> systemInfo = new HashMap<String,String>();

systemInfo.put("Cucumber version", "v1.2.4");
systemInfo.put("Extent Cucumber Reporter version", "v1.1.1");
ExtentCucumberFormatter.addSystemInfo(systemInfo);
}
}