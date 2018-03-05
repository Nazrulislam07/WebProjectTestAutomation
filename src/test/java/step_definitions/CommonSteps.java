package step_definitions;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;


import cucumber.api.java.en.Given;
import helper_classes.SetDriver;

public class CommonSteps {
//	static Logger log;
	private static WebDriver driver;

	public CommonSteps() {
		driver = SetDriver.webDriver;
//		new GooglePage(driver);
	}

	@Given("^I launch the given web app$")
	public void i_launch_the_XMobile_web_app() throws Exception {
//		ExtentReporter.reportStep("BDD Step: Given I launch the XMobile web app", "INFO");
	/////
		
	}


	@Given("^I scroll down to the end of the page$")
	public void i_scroll_down_to_the_end_of_the_page() throws Throwable {
		((JavascriptExecutor) driver).executeScript("window.scrollTo(0,document.body.scrollHeight)");
		Thread.sleep(2000);   // temporary wait
	}

	

}
