Feature: End to end Ecommerce validation

    Validating a ecommerce app
    Scenario: Product ordering
    Given I open the landing page
    When I add items to cart
    And Validate the total prices
    Then Select the country and make the purchase ordering