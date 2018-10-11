@GoogleFooterLinks @regression
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
      | footerLink_text | linkedPage_text           |
      | Privacy         | When you use our services |
      | Terms           | Google Terms of Service   |

  Scenario Outline: Selecting different sublinks on the Google Privacy footer link
    Given I select the Privacy link in the Google footer
    When I click on the Privacy Policy tab
    And I click on a specific Privacy Policy "<privacy_policy>"
    Then I verify the selected "<policy_detail>" Privacy Policy detail

    Examples: 
      | privacy_policy                                         | policy_detail                                                           |
      | Information we collect                                 | We collect information                                                  |
      | How we use information we collect                      | We use the information we collect                                       |
      | Transparency and choice                                | People have different privacy concerns                                  |
      | Information you share                                  | Many of our services let you share information with others              |
      | Accessing and updating your personal information       | We aim to maintain our services in a manner that protects information   |
      | Information we share                                   | We do not share personal information with companies                     |
      | Information security                                   | We work hard to protect Google and our users                            |
      | When this Privacy Policy applies                       | Our Privacy Policy applies to all of the services offered by Google LLC |
      | Compliance and cooperation with regulatory authorities | We regularly review our compliance with our Privacy Policy              |
      | Changes                                                | Our Privacy Policy may change from time to time                         |
      | Specific product practices                             | The following notices explain specific privacy practices                |
      | Other useful privacy and security related materials    | Further useful privacy and security related materials can be found      |
      # 	|Self Regulatory Frameworks|Self Regulatory Frameworks|
      | Key terms                                              | An affiliate is an entity that belongs                                  |
      | Partners                                               | How Google uses data when you use our partners                          |
      | Updates                                                | We want to be as transparent as possible about the changes              |

  Scenario Outline: Selecting different sublinks on the Google Terms footer link
    Given I select the Terms link in the Google footer
    When I click on the Technologies and Principles tab
    And I click on a specific Technology "<Technology>"
    Then I verify the selected "<Technology_detail>" Technology detail

    Examples: 
      | Technology                                 | Technology_detail                                                                     |
      | Advertising                                | Advertising keeps Google and many of the websites and services you use free of charge |
      | How Google uses cookies                    | A cookie is a small piece of text sent to your browser by a website you visit         |
      | How Google uses pattern recognition        | How Google uses pattern recognition to make sense of images                           |
      | Types of location data used by Google      | Different types of location information may be used                                   |
      | How Google Wallet uses credit card numbers | Google uses the credit card and debit card numbers                                    |
      | How Google Voice works                     | Google Voice stores, processes and maintains your call history                        |
      | Google Product Privacy Guide               | Welcome! The articles in this guide will give you more information                    |
