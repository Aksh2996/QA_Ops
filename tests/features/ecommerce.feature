Feature: Login functionality
  @login
  Scenario Outline: Scenario Outline name: Successful login with valid credentials
    Given I am on the login page
    When I enter a valid username as "<username>"
    And I enter a valid password as "<password>"
    And I click the Login button
    Then I should be logged in successfully

    Examples:
        | username               | password     |
        | aprakash270@gmail.com  | Vihaan@1234  |

  Scenario: Successful login and adding products
    Given I am on the login page2
    When I enter a valid username and password2
    When I add the products2
    Then I should be able to see the products added successfully2