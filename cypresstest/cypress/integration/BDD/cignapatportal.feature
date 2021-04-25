Feature: End to end validation of login screens and profile section

    Validating the cigna patient portal sign in page and profiles
    Scenario: TC01-Invalid login credentials to patient portal
    Given I open Cigna patient portal
    When the user enters the invalid username
    And the user enters an invalid password
    And the user hits Login button
    Then the portal throws a error message

    Scenario: TC02-Forgot password page launch
    Given I open Cigna patient portal
    When the user clicks the forgot password link
    Then the user is taken to forgot password page
