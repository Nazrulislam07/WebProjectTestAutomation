@GoogleGmailSignin @regression @smoke
Feature: Gmail Account Sign in activity test
	As a Gmail user,
	I want to Sign in and manage Gmail Account.

Background: Launch the Google web application
    Given I launch the Google home page url


Scenario: Checking Google's Gmail Sign In activities
    When  I clicked on the Sign in button on the upper-right corner
	And   I provided my gmail username and password 
    Then  I signed into my Gmail account successfully


#Scenario: Viewing Google's Gmail Sign In and Sign Out activities
#    When  I saw the Google home page
#    And   I clicked on the Sign in button
#    Then  I saw Gmail Sign in page
#    And   I completed the Sign in steps with a vaild credential
#    Then  I clicked on the Gmail link
#    Then  I signed in my Gmail account
#    Then  I signed out from my Gmail account

#Scenario: Viewing non-authenticated Google's Gmail Sign in activity
#    When I attempt to login with a valid username but an invalid password
#    Then I saw the login failed message for the invalid password 
#
#Scenario: Viewing Sign out from my Gmail account
#	 When I first Sign in my Gmail account
#    When I attempt to Sign out from my Gmail account
#    Then I Signed out successfully from Gmail account
