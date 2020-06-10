$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Resources/features/AccountActivityNavigation.feature");
formatter.feature({
  "name": "Navigating to specific accounts in Accounts Activity",
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
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.zerobank.Step_Definitions.AccountActivityStepDef.the_Account_Activity_page_should_be_displayed(AccountActivityStepDef.java:38)\r\n\tat ✽.the Account Activity page should be displayed(file:///C:/Users/HP/IdeaProjects/fromgit/zerobankautomation/src/test/Resources/features/AccountActivityNavigation.feature:22)\r\n",
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
formatter.scenarioOutline({
  "name": "Type",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.step({
  "name": "results table should show at least one result under \"\u003cDeposit\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "results table should show at least one result under \"\u003cWithdrawal\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects type “\u003cDeposit\u003e”",
  "keyword": "When "
});
formatter.step({
  "name": "results table should show at least one result under \"\u003cDeposit\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "results table should show no result under \"\u003cWithdrawal\u003e\"",
  "keyword": "But "
});
formatter.step({
  "name": "user selects type “\u003cWithdrawal\u003e”",
  "keyword": "When "
});
formatter.step({
  "name": "results table should show at least one result under \"\u003cWithdrawal\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "results table should show no result under \"\u003cDeposit\u003e\"",
  "keyword": "But "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Deposit",
        "Withdrawal"
      ]
    },
    {
      "cells": [
        "Deposit",
        "Withdrawal"
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
  "name": "Type",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@transactions"
    }
  ]
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
  "name": "results table should show at least one result under \"Deposit\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.results_table_should_show_at_least_one_result_under(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show at least one result under \"Withdrawal\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.results_table_should_show_at_least_one_result_under(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects type “Deposit”",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.user_selects_type_Deposit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show at least one result under \"Deposit\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.results_table_should_show_at_least_one_result_under(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results table should show no result under \"Withdrawal\"",
  "keyword": "But "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.results_table_should_show_no_result_under(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d83.0.4103.61)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-HLEND38\u0027, ip: \u0027192.168.43.223\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.61, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:61159}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b9cd0da7db4deb0d7de48fce3042a9ab\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:166)\r\n\tat com.zerobank.Pages.AccountActivityPage.WithdrawalListString(AccountActivityPage.java:56)\r\n\tat com.zerobank.Step_Definitions.FindTransactionsStepDef.results_table_should_show_no_result_under(FindTransactionsStepDef.java:135)\r\n\tat ✽.results table should show no result under \"Withdrawal\"(file:///C:/Users/HP/IdeaProjects/fromgit/zerobankautomation/src/test/Resources/features/FindTransactions.feature:47)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user selects type “Withdrawal”",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.user_selects_type_Withdrawal()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should show at least one result under \"Withdrawal\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.results_table_should_show_at_least_one_result_under(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should show no result under \"Deposit\"",
  "keyword": "But "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.results_table_should_show_no_result_under(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", "screenshot");
formatter.after({
  "status": "passed"
});
});