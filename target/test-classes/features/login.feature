@login
  Feature: Login
  Background:
    Given user is in login page
        @canlogin
        Scenario:user can login with valid credentials
          When user gives "user" credentials
          Then user can log in
        @wip
        Scenario: user can not login with unvalid credentials
          When user gives blank username
          Then user can not log in

        Scenario: user can not login with unvalid credentials
          When user gives blank password
          Then user can not log in

        Scenario: user can not login with unvalid credentials
          When user gives wrong password
          Then user can not log in

        Scenario: user can not login with unvalid credentials
          When user gives wrong username
          Then user can not log in
