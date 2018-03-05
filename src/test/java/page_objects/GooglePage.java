package page_objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class GooglePage {// extends WebOperations{

	private static WebDriver driver;
	public static By SIGNINID =  By.id("gb_70");
	
	public static By USERID = By.id("identifierId");
	public By IDNEXT = By.id("identifierNext");
	public By PWDTEXT = By.cssSelector(".whsOnd.zHQkBf");
	public By PASSWORDNEXT = By.id("passwordNext");
	public By GMAIL = By.linkText("Gmail");

	public By SIGNIN_LINK = By.cssSelector(".gmail-nav__nav-link.gmail-nav__nav-link__sign-in");


	public static boolean isDisplayed(WebDriver driver, By xPath){
		return driver.findElement(xPath).isDisplayed();
	}


	public GooglePage(WebDriver driver) {
//		super(driver);
		//		this.driver = driver;
	}

	/*
	public GooglePage gotIt() {
//		driver.findElement(GOT_IT).click();
		return new GooglePage(driver);
	}
	 */

	public static String getStep(String methodName) {
		String name = "BDD Step: ";
		name = name + methodName;
		name = name.replace('_', ' ');
		return name;
	}

	public void loginAs(String username, String password) throws Exception {
//		customeWaitUntil(3000, driver, By.id("username"));
		driver.findElement(USERID).click();
		driver.findElement(USERID).clear();
		driver.findElement(USERID).sendKeys(username);
		driver.findElement(PWDTEXT).click();
		driver.findElement(PWDTEXT).clear();
		driver.findElement(PWDTEXT).sendKeys(password);
		Thread.sleep(2000);
		driver.findElement(GMAIL).click();
	}


}