@GoogleGmailSignin @regression @smoke
Feature: Gmail Account Sign in activity test
	As a Gmail user,
	I want to Sign in and manage Gmail Account.

Background: Launch the Google web application
    Given I launch the Google home page


Scenario: Checking Google's Gmail Sign In activities
    When  I clicked on the Sign in button on the upper-right corner
	And   I provided my gmail username and password 
    Then  I signed into my Gmail account successfully


@signout
Scenario: Checking Google's Gmail Sign Out activities
    When  I clicked on the Sign in button on the upper-right corner
	And   I provided my gmail username and password with khans credential
    And   I cliked on the Sign out button 
    Then  I signed out from my Gmail account successfully

