@GoogleFooterLinks @regression
Feature: Google Footer links Checkup
As a Google Lover,
I want to learn about the legal policies and terms of service of Google and Gmail.

Background:
    Given I launch the Google home page
    And I scroll down to the end of the page

Scenario: Privacy Link test
	When I click on the Privacy link URL
	Then I see the Privacy page
 
Scenario: Terms Link test
	When I click on the Terms link
	Then I see the Terms page


Scenario Outline: Selecting different footer links and checking the corresponding page
    When I select "<footerLink_text>" link in the Google footer
    Then I verified the selected Google page by the existence of the "<linkedPage_text>" text

    Examples:
      	|footerLink_text|linkedPage_text|
		|Privacy|Welcome to the Google Privacy Policy|
		|Terms|Google Terms of Service|

#		|Privacy|Welcome to the Google Privacy Policy|
#		|Terms|Google Terms of Service|

