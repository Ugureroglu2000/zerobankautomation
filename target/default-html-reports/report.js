$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Resources/features/AccountActivityNavigation.feature");
formatter.feature({
  "name": "Navigating to specific accounts in Accounts Summary",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AccountsActivity"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.AccountActivityStepDef.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Savings account redirect",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountsActivity"
    }
  ]
});
formatter.step({
  "name": "the user clicks on \"Savings\" link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.AccountActivityStepDef.the_user_clicks_on_link_on_the_Account_Summary_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.AccountActivityStepDef.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account drop down should have \"Savings\" selected",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.AccountActivityStepDef.account_drop_down_should_have_selected(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.AccountActivityStepDef.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Brokerage account redirect",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountsActivity"
    }
  ]
});
formatter.step({
  "name": "the user clicks on \"Brokerage\" link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.AccountActivityStepDef.the_user_clicks_on_link_on_the_Account_Summary_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.AccountActivityStepDef.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Account drop down should have \"Brokerage\" selected",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.AccountActivityStepDef.account_drop_down_should_have_selected(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.AccountActivityStepDef.the_user_is_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Credit Card account redirect",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AccountsActivity"
    }
  ]
});
formatter.step({
  "name": "the user clicks on \"Credit Card\" link on the Account Summary page",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.AccountActivityStepDef.the_user_clicks_on_link_on_the_Account_Summary_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the Account Activity page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.AccountActivityStepDef.the_Account_Activity_page_should_be_displayed()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.zerobank.Step_Definitions.AccountActivityStepDef.the_Account_Activity_page_should_be_displayed(AccountActivityStepDef.java:40)\r\n\tat ✽.the Account Activity page should be displayed(file:///C:/Users/HP/IdeaProjects/fromgit/zerobankautomation/src/test/Resources/features/AccountActivityNavigation.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Account drop down should have \"Credit Card\" selected",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.AccountActivityStepDef.account_drop_down_should_have_selected(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/Resources/features/FindTransactions.feature");
formatter.feature({
  "name": "Find Transactions in Account Activity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@transactions"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Search description",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user enters description \"\u003citem\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.step({
  "name": "results table should only show descriptions containing \"\u003cdesc1\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "the user enters description \"\u003citem2\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.step({
  "name": "results table should only show descriptions containing \"\u003cdesc2\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "results table should not show descriptions containing \"\u003cdesc3\u003e\"",
  "keyword": "But "
});
formatter.examples({
  "name": "L",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "item",
        "desc1",
        "item2",
        "desc2",
        "desc3"
      ]
    },
    {
      "cells": [
        "ONLINE",
        "ONLINE",
        "OFFICE",
        "OFFICE",
        "ONLINE"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user accesses the Find Transactions tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.the_user_accesses_the_Find_Transactions_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search description",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@transactions"
    }
  ]
});
formatter.step({
  "name": "the user enters description \"ONLINE\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.the_user_enters_description(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show descriptions containing \"ONLINE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.results_table_should_only_show_descriptions_containing(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters description \"OFFICE\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.the_user_enters_description(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.clicks_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should only show descriptions containing \"OFFICE\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.results_table_should_only_show_descriptions_containing(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.zerobank.Step_Definitions.FindTransactionsStepDef.results_table_should_only_show_descriptions_containing(FindTransactionsStepDef.java:102)\r\n\tat ✽.results table should only show descriptions containing \"OFFICE\"(file:///C:/Users/HP/IdeaProjects/fromgit/zerobankautomation/src/test/Resources/features/FindTransactions.feature:23)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "results table should not show descriptions containing \"ONLINE\"",
  "keyword": "But "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.results_table_should_not_show_descriptions_containing(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/Resources/features/login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.loginStepDef.user_is_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user can not login with unvalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user gives blank username",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.loginStepDef.user_gives_blank_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can not log in",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.loginStepDef.user_can_not_log_in()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.loginStepDef.user_is_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user can not login with unvalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user gives blank password",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.loginStepDef.user_gives_blank_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can not log in",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.loginStepDef.user_can_not_log_in()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});