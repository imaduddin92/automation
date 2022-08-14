package com.photon.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(features = "Feature",glue ={"stepDefinition"}
,tags = {"@Horizon_Splash"},
plugin = { "html:target/cucumber-htmlreport", "json:target/cucumber-report.json","usage:target/cucumber-usage.json" })

public class Runner extends AbstractTestNGCucumberTests {
	
}
	