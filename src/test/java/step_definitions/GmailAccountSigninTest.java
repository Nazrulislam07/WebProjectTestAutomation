package step_definitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helper_classes.SetDriver;
//import helper_classes.TestHooks;
import page_objects.GooglePage;

public class GmailAccountSigninTest {//extends GooglePage{ // Needed for Page Object Model
	private static WebDriver driver;
	//	private WebDriverWait wait;
	//	private static Logger log = Logger.getLogger(GmailAccountLoginTest.class);

	public GmailAccountSigninTest() {
//		super(driver);   // Needed for Page Object Model
		driver = SetDriver.webDriver;
//		new GooglePage(driver);
		//		wait = new WebDriverWait(driver, 20);
	}


	@When("^I clicked on the Sign in button on the upper-right corner$")
	public void i_clicked_on_the_Sign_in_button_on_the_upper_right_corner() throws Throwable {
		try {
//			ExtentReporter.reportStep(driver, "Sign in button is  displayed", "PASS", 1);
			driver.findElement(GooglePage.SIGNINID).click();
			Thread.sleep(5000);
		} catch (Exception e) {
//			ExtentReporter.reportStep(driver, "Sign in button is not displayed", "FAIL", 1);
			e.printStackTrace();
		}

	}


	@When("^I provided my gmail username and password$")
	public void i_provided_my_gmail_username_and_password() throws Throwable {


	}

	@Then("^I signed into my Gmail account successfully$")
	public void i_signed_into_my_Gmail_account_successfully() throws Throwable {


	}



	@Given("^I launch the Google home page url$")
	public void i_launch_the_Google_home_page_url() throws Throwable {
		System.out.println("Launching the Google home page . . . .  . . . ");
//				BaseClass.launchWebApp();
		driver.get("https://www.google.com");
		Assert.assertEquals(true, driver.getPageSource().contains("Google"));
		Thread.sleep(2000);
	}

	@When("^I saw the Google home page$")
	public void i_saw_the_Google_home_page() throws Throwable {
		Assert.assertEquals(true, driver.getPageSource().contains("Google"));
		System.out.println("I saw the Google home page  ...................");
	}

	@Then("^I saw the Gmail Sign in page$")
	public void i_saw_the_Gmail_Sign_in_page() throws Throwable {
		System.out.println("I saw the Gmail sign in page..............");
		Assert.assertEquals(true, driver.getPageSource().contains("Google"));
	}

	
	@When("^I clicked on the Sign in button$")
	public void i_clicked_on_the_Sign_in_button() throws Throwable {
		driver.findElement(By.id("gb_70")).click();
		System.out.println("I clicked on the Sign in button ..............");
		Thread.sleep(1000);
	}
	 
	@Then("^I saw Gmail Sign in page$")
	public void i_saw_Gmail_Sign_in_page() throws Throwable {
		Assert.assertEquals(true, driver.getPageSource().contains("Google"));
		System.out.println("I saw Gmail Sign in page  ................");
	}


	@When("^I completed the Sign in steps with a vaild credential$")
	public void i_completed_the_Sign_in_steps_with_a_vaild_credential() throws Throwable {

		driver.findElement(By.id("identifierId")).sendKeys("MHSigninTest@gmail.com");
		Thread.sleep(2000);
		driver.findElement(By.id("identifierNext")).click();
		//		driver.findElement(By.cssSelector(".RveJvd.snByac")).click();
		System.out.println("I clicked on the Next button..............");
		Thread.sleep(2000);
		driver.findElement(By.cssSelector(".whsOnd.zHQkBf")).sendKeys                              ("Dh@k@1000");
		Thread.sleep(2000);
		driver.findElement(By.id("passwordNext")).click();
		System.out.println("I clicked on the Next button..............");
		Thread.sleep(12000);
	}

	@Then("^I clicked on the Gmail link$")
	public void i_clicked_on_the_Gmail_link() throws Throwable {
		driver.findElement(By.linkText("Gmail")).click();
		System.out.println("I clicked on the Gmail link ..............");
		Thread.sleep(10000);
	}

	@Then("^I signed in my Gmail account$")
	public void i_signed_in_my_Gmail_account() throws Throwable {
		Assert.assertEquals(true, driver.getPageSource().contains("Google"));
		System.out.println("I saw my Gmail account page  ................");
	}


	@Then("^I signed out from my Gmail account$")
	public void i_signed_out_from_my_Gmail_account() throws Throwable {
		driver.findElement(By.cssSelector(".gb_ab.gbii")).click();
		Thread.sleep(5000);
		driver.findElement(By.id("gb_71")).click();
		System.out.println("I signed out successfully ..............");
		Thread.sleep(2000);
	}

}

