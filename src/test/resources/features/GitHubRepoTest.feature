@GitHubRepoTest
Feature: GitHub Repo Test
As a GitHub Lover,
I want to check my friends GitHub repositories.

Background:
    Given I launch the GitHub home page url

Scenario Outline: Selecting different github_usernames and checking a specific repository there
    When I login to my github account with "ictergurutest" and "Dh@k@1000" as my username and password
    When I goto my friends' github accounts using their "<github_usernames>"
	  Then I select the available repositories
    Then I verify the existance of the "<expected_repository>" in the github account 

    Examples:
    |github_usernames|expected_repository|
		|icterguru|WebAutomation1001|
		|icterguru|WebAutomation1004|
		|icterguru|WebAutomation1005|
		
 