$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Resources/features/FindTransactions.feature");
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(),\u0027Account Activity\u0027)]\"}\n  (Session info: chrome\u003d89.0.4389.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-HLEND38\u0027, ip: \u0027192.168.43.223\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:53432}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 261814b83c91c4e1e2d25925d3b0bebd\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Account Activity\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.zerobank.Step_Definitions.FindTransactionsStepDef.the_user_accesses_the_Find_Transactions_tab(FindTransactionsStepDef.java:29)\r\n\tat ✽.the user accesses the Find Transactions tab(file:///C:/Users/HP/IdeaProjects/fromgit/zerobankautomation/src/test/Resources/features/FindTransactions.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Search date range",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@transactions"
    },
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "the user enters date range from \"2012-09-01\" to \"2012-09-06\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.the_user_enters_date_range_from_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.clicks_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should only show transactions dates between \"2012-09-01\" to  \"2012-09-06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.results_table_should_only_show_transactions_dates_between_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the results should be sorted by most recent date",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.the_results_should_be_sorted_by_most_recent_date()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters date range from \"2012-09-02\" to \"2012-09-06\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.the_user_enters_date_range_from_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks search",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.clicks_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should only show transactions dates between \"2012-09-02\" to  \"2012-09-06\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.results_table_should_only_show_transactions_dates_between_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the results table should only not contain transactions dated \"2012-09-01\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.FindTransactionsStepDef.the_results_table_should_only_not_contain_transactions_dated(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
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
  "name": "user can login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@canlogin"
    }
  ]
});
formatter.step({
  "name": "user gives \"user\" credentials",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.loginStepDef.user_gives_credentials(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can log in",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.loginStepDef.user_can_log_in()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.zerobank.Step_Definitions.loginStepDef.user_can_log_in(loginStepDef.java:33)\r\n\tat ✽.user can log in(file:///C:/Users/HP/IdeaProjects/fromgit/zerobankautomation/src/test/Resources/features/login.feature:8)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
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
  "name": "user can not login with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@wipp"
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
  "name": "user can not login with invalid credentials",
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
  "name": "user can not login with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user gives wrong password",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.loginStepDef.user_gives_wrong_password()"
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
  "name": "user can not login with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user gives wrong username",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.Step_Definitions.loginStepDef.user_gives_wrong_username()"
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