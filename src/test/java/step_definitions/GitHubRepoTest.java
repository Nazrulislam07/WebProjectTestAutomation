package step_definitions;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helper_classes.SetDriver;
import page_objects.GooglePage;


public class GitHubRepoTest {
	private static WebDriver driver;
	
/*	For no main()
 * 
 * private static WebDriver driver;*/
	
	public GitHubRepoTest() {
		//super(driver);   // Needed for Page Object Model
		driver = SetDriver.webDriver;
	}

		
		
		
		/*driver.findElement(By.linkText("Sign in")).click();
				
		driver.findElement(By.id("login_field")).sendKeys("ictergurutest@gmail.com");
		
		Thread.sleep(2000);
		
		driver.findElement(By.id("password")).                                                                 sendKeys("Dh@k@1000");
		
		Thread.sleep(2000);
		
		driver.findElement(By.cssSelector(".btn.btn-primary.btn-block")).click();
		
		Thread.sleep(2000);
		
		driver.findElement(By.cssSelector(".avatar.float-left.mr-1")).click();
		Thread.sleep(2000);
				
		Assert.assertEquals(driver.getPageSource().contains("WebProjectTestAutomation"), true);
		
				
		Thread.sleep(16000);
		
		
		
		
		driver.close();*/
		
	
	
	@Given("^I launch the GitHub home page url$")
	public void i_launch_the_GitHub_home_page_url() throws Throwable {
		driver.get("https://www.github.com");
	}

	@When("^I login to my github account with \"(.*?)\" and \"(.*?)\" as my username and password$")
	public void i_login_to_my_github_account_with_and_as_my_username_and_password(String arg1, String arg2) throws Throwable {
	}

	@When("^I goto my friends' github accounts using their \"(.*?)\"$")
	public void i_goto_my_friends_github_accounts_using_their(String arg1) throws Throwable {
		
	}

	@Then("^I select the available repositories$")
	public void i_select_the_available_repositories() throws Throwable {
	}

	@Then("^I verify the existance of the \"(.*?)\" in the github account$")
	public void i_verify_the_existance_of_the_in_the_github_account(String arg1) throws Throwable {
	}



}
