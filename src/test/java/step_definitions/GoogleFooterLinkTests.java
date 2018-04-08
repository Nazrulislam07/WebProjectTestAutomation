package step_definitions;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helper_classes.SetDriver;
import page_objects.GooglePage;

public class GoogleFooterLinkTests extends GooglePage{

	private static WebDriver driver;

	public GoogleFooterLinkTests() {
		super(driver);
		driver = SetDriver.webDriver;

	System.out.println("This is the Nazrul constructor...");
		System.out.println("This is the GoogleFooterLinkTests constructor....");
	}


	@When("^I click on the Privacy link$")
	public void i_click_on_the_Privacy_link() throws Throwable {
		driver.findElement(GooglePage.Privacy_Link).click();
		Thread.sleep(2000);   // temporary wait
	}

	@Then("^I see the Privacy page$")
	public void i_see_the_Privacy_page() throws Throwable {
		Assert.assertEquals(true, driver.getPageSource().contains("Welcome to the Google Privacy Policy"));
		Thread.sleep(2000);   // temporary wait
	}

	@When("^I click on the Terms link$")
	public void i_click_on_the_Terms_link() throws Throwable {
		driver.findElement(GooglePage.Terms_Link).click();
		
		Thread.sleep(2000);   // temporary wait
	}

	@Then("^I see the Terms page$")
	public void i_see_the_Terms_page() throws Throwable {
		Assert.assertEquals(true, driver.getPageSource().contains("Google Terms of Service"));
		Thread.sleep(2000);   // temporary wait
	}
	
	@When("^I select \"(.*?)\" link in the Google footer$")
	public void i_select_link_in_the_Google_footer(String footerLink_text) throws Throwable {
		
		driver.findElement(By.linkText(footerLink_text)).click();
		
		Thread.sleep(2000);   // temporary wait
	}

	@Then("^I verified the selected Google page by the existence of the \"(.*?)\" text$")
	public void i_verified_the_selected_Google_page_by_the_existence_of_the_text(String linkedPage_text) throws Throwable {
		Assert.assertEquals(true, driver.getPageSource().contains(linkedPage_text));
		Thread.sleep(2000);   // temporary wait
	}

}
