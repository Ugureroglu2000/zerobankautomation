@transactions
Feature: Find Transactions in Account Activity

  Background:
    Given the user accesses the Find Transactions tab
@login
  Scenario: Search date range
    When the user enters date range from "2012-09-01" to "2012-09-06"
    And clicks search
    Then results table should only show transactions dates between "2012-09-01" to  "2012-09-06"
    And the results should be sorted by most recent date
    When the user enters date range from "2012-09-02" to "2012-09-06"
    And clicks search
    Then results table should only show transactions dates between "2012-09-02" to  "2012-09-06"
    And the results table should only not contain transactions dated "2012-09-01"

  Scenario Outline: Search description
    When the user enters description "<item>"
    And clicks search
    Then results table should only show descriptions containing "<desc1>"
    When the user enters description "<item2>"
    And clicks search
    Then results table should only show descriptions containing "<desc2>"
    But results table should not show descriptions containing "<desc3>"
    Examples: L
      | item   | desc1  | item2  | desc2  | desc3  |
      | ONLINE | ONLINE | OFFICE | OFFICE | ONLINE |


  Scenario Outline: Search description case insensitive
    When the user enters description "<item>"
    And clicks search
    Then results table should only show descriptions containing "<desc>"
    When the user enters description "<item2>"
    And clicks search
    Then results table should only show descriptions containing "<desc2>"
    Examples:
      | item   | desc   | item2  | desc2  |
      | ONLINE | ONLINE | online | ONLINE |
  @wip
  Scenario Outline: Type
    And clicks search
    Then results table should show at least one result under "<Deposit>"
    Then results table should show at least one result under "<Withdrawal>"
    When user selects type “<Deposit>”
    Then results table should show at least one result under "<Deposit>"
    But results table should show no result under "<Withdrawal>"
    When user selects type “<Withdrawal>”
    Then results table should show at least one result under "<Withdrawal>"
    But results table should show no result under "<Deposit>"
  Examples:
    |Deposit|Withdrawal|
    |Deposit|Withdrawal|