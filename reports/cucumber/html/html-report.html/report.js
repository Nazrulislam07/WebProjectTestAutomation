$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/GoogleFooterLinkTests.feature");
formatter.feature({
  "line": 2,
  "name": "Google Footer links Checkup",
  "description": "As a Google Lover,\r\nI want to learn about the legal policies and terms of service of Google and Gmail.",
  "id": "google-footer-links-checkup",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@GoogleFooterLinks"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 5725273597,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I launch the Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I scroll down to the end of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_launch_the_Google_home_page()"
});
formatter.result({
  "duration": 3908439928,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_scroll_down_to_the_end_of_the_page()"
});
formatter.result({
  "duration": 2015902659,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Terms Link test",
  "description": "",
  "id": "google-footer-links-checkup;terms-link-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I click on the Terms link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I see the Terms page",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleFooterLinkTests.i_click_on_the_Terms_link()"
});
formatter.result({
  "duration": 2416006602,
  "status": "passed"
});
formatter.match({
  "location": "GoogleFooterLinkTests.i_see_the_Terms_page()"
});
formatter.result({
  "duration": 2064545099,
  "status": "passed"
});
formatter.after({
  "duration": 1182708663,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Selecting different footer links and checking the corresponding page",
  "description": "",
  "id": "google-footer-links-checkup;selecting-different-footer-links-and-checking-the-corresponding-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I select \"\u003cfooterLink_text\u003e\" link in the Google footer",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I verified the selected Google page by the existence of the \"\u003clinkedPage_text\u003e\" text",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "google-footer-links-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;",
  "rows": [
    {
      "cells": [
        "footerLink_text",
        "linkedPage_text"
      ],
      "line": 24,
      "id": "google-footer-links-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;;1"
    },
    {
      "cells": [
        "Privacy",
        "Welcome to the Google Privacy Policy"
      ],
      "line": 25,
      "id": "google-footer-links-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;;2"
    },
    {
      "cells": [
        "Terms",
        "Google Terms of Service"
      ],
      "line": 26,
      "id": "google-footer-links-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3044628869,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I launch the Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I scroll down to the end of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_launch_the_Google_home_page()"
});
formatter.result({
  "duration": 3229956641,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_scroll_down_to_the_end_of_the_page()"
});
formatter.result({
  "duration": 2007031562,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Selecting different footer links and checking the corresponding page",
  "description": "",
  "id": "google-footer-links-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GoogleFooterLinks"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I select \"Privacy\" link in the Google footer",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I verified the selected Google page by the existence of the \"Welcome to the Google Privacy Policy\" text",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Privacy",
      "offset": 10
    }
  ],
  "location": "GoogleFooterLinkTests.i_select_link_in_the_Google_footer(String)"
});
formatter.result({
  "duration": 2436145368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to the Google Privacy Policy",
      "offset": 61
    }
  ],
  "location": "GoogleFooterLinkTests.i_verified_the_selected_Google_page_by_the_existence_of_the_text(String)"
});
formatter.result({
  "duration": 2080976805,
  "status": "passed"
});
formatter.after({
  "duration": 1012524971,
  "status": "passed"
});
formatter.before({
  "duration": 4202866556,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I launch the Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I scroll down to the end of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_launch_the_Google_home_page()"
});
formatter.result({
  "duration": 4015786960,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_scroll_down_to_the_end_of_the_page()"
});
formatter.result({
  "duration": 2018939779,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Selecting different footer links and checking the corresponding page",
  "description": "",
  "id": "google-footer-links-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GoogleFooterLinks"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I select \"Terms\" link in the Google footer",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I verified the selected Google page by the existence of the \"Google Terms of Service\" text",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Terms",
      "offset": 10
    }
  ],
  "location": "GoogleFooterLinkTests.i_select_link_in_the_Google_footer(String)"
});
formatter.result({
  "duration": 2550754428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google Terms of Service",
      "offset": 61
    }
  ],
  "location": "GoogleFooterLinkTests.i_verified_the_selected_Google_page_by_the_existence_of_the_text(String)"
});
formatter.result({
  "duration": 2037892155,
  "status": "passed"
});
formatter.after({
  "duration": 909251226,
  "status": "passed"
});
formatter.uri("features/GoogleGmailSignin.feature");
formatter.feature({
  "line": 2,
  "name": "Gmail Account Sign in activity test",
  "description": "As a Gmail user,\r\nI want to Sign in and manage Gmail Account.",
  "id": "gmail-account-sign-in-activity-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@GoogleGmailSignin"
    },
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 2772429668,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "Launch the Google web application",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I launch the Google home page",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.i_launch_the_Google_home_page()"
});
formatter.result({
  "duration": 6818854684,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Checking Google\u0027s Gmail Sign In activities",
  "description": "",
  "id": "gmail-account-sign-in-activity-test;checking-google\u0027s-gmail-sign-in-activities",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I clicked on the Sign in button on the upper-right corner",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I provided my gmail username and password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I signed into my Gmail account successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailAccountSigninTest.i_clicked_on_the_Sign_in_button_on_the_upper_right_corner()"
});
formatter.result({
  "duration": 7058031387,
  "status": "passed"
});
formatter.match({
  "location": "GmailAccountSigninTest.i_provided_my_gmail_username_and_password()"
});
formatter.result({
  "duration": 18800672086,
  "status": "passed"
});
formatter.match({
  "location": "GmailAccountSigninTest.i_signed_into_my_Gmail_account_successfully()"
});
formatter.result({
  "duration": 2193401098,
  "status": "passed"
});
formatter.after({
  "duration": 866411039,
  "status": "passed"
});
});