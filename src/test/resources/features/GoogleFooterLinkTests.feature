@GoogleFooterLinks
@regression
Feature: Google Footer links Checkup
As a Google Lover,
I want to learn about the legal policies and terms of service of Google and Gmail.

Background:
    Given I launch the Google home page
    And I scroll down to the end of the page

Scenario: Terms Link test
	When I click on the Terms link
	Then I see the Terms page


Scenario Outline: Selecting different footer links and checking the corresponding page
    When I select "<footerLink_text>" link in the Google footer
    Then I verify the selected Google page by the existence of the "<linkedPage_text>" text

Examples:
  	|footerLink_text|linkedPage_text|
	  |Privacy|Welcome to the Google Privacy Policy|
	  |Terms|Google Terms of Service|


Scenario Outline: Selecting different sublinks on the Google Privacy footer link     
    Given I select the Privacy link in the Google footer    
    When  I click on the Privacy Policy tab   
    And I click on a specific Privacy Policy "<privacy_policy>"     
    Then I verify the selected "<policy_detail>" Privacy Policy detail 
 
Examples:     
 |privacy_policy|policy_detail| 
 |Introdiuction|range of services that help millions|
 |Information google collects|We collect information|  
 |Why google collects data|We use the information we collect|  
 |Your privacy controls|managing your privacy across our services|  
 |Sharing your information|Many of our services let you share information with others|
 |Keeping your information secure|All Google products are built with strong security features|
 |Exporting & deleting your information|To delete your information|
 |Compliance & cooperation with regulators| We regularly review this Privacy Policy|
 |About this policy|This Privacy Policy applies to all of the services offered by Google LLC |
 |Related privacy practices|The following privacy|
 |Key terms|An affiliate is an entity that belongs|
 |contact us|You have the controls to manage your privacy|
   
Scenario Outline: Selecting different sublinks on the Google Terms footer link     
  Given I select the Terms link in the Google footer     
  When  I click on the Technologies and Principles tab     
  And   I click on a specific Technology "<Technologies>"      
  Then  I verify the selected "<Technology_detail>" Technology detail 
 
Examples: 
  |Technologies|Technology_detail|
  |Advertising|Advertising keeps Google and many of the websites and services you use free of charge| 
  |How Google uses cookies|A cookie is a small piece of text sent to your browser by a website you visit|
  |How Google uses pattern recognition|How Google uses pattern recognition to make sense of images|
  |Types of location data used by Google|Different types of location information may be used |
  |How Google uses credit card numbers for payments|Google uses the credit card and debit card numbers|
  |How Google Voice works|Google Voice stores, processes and maintains your call history|
  |Google Product Privacy Guide|Welcome! The articles in this guide will give you more information|
  |How google retains data we collect|We collect data as you use Google services|
