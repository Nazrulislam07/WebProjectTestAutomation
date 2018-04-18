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
