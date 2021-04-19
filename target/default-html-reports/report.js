$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Resources/features/login.feature");
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
    },
    {
      "name": "@wip"
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
<<<<<<< HEAD
=======
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
>>>>>>> e2803cd5f756dfdc6d1a8d75e6a37bd759a08374
});