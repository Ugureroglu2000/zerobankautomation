package com.zerobank.Step_Definitions;

import com.zerobank.Pages.AccountActivityPage;
import com.zerobank.Pages.LoginPage;
import com.zerobank.Pages.ZeroPage;
import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class AccountActivityStepDef {
    AccountActivityPage accountActivityPage = new AccountActivityPage();
    LoginPage loginPage = new LoginPage();
 //   AccountSummaryPage accountSummaryPage = new AccountSummaryPage();
 //   DashboardMenuPagePage dashboardMenuPagePage = new DashboardMenuPagePage();


    @Given("the user is logged in")
    public void the_user_is_logged_in() {
        Driver.get().get(ConfigurationReader.get("url"));
//        LoginPage loginPage=new LoginPage();
        loginPage.signinButton.click();
        String user=ConfigurationReader.get("user_username");
        String pass=ConfigurationReader.get("user_password");
        loginPage.login(user,pass);
    }

    @When("the user clicks on {string} link on the Account Summary page")
    public void the_user_clicks_on_link_on_the_Account_Summary_page(String string) {
  //      AccountActivityPage accountActivityPage=new AccountActivityPage();
        accountActivityPage.navigateToTab("Account Summary");
        String path="//*[.='"+string+"']";
        Driver.get().findElement(By.xpath(path)).click();
    }
    @Then("the Account Activity page should be displayed")
    public void the_Account_Activity_page_should_be_displayed() {
    accountActivityPage.waitUntilLoaderScreenDisappear();
    //  BrowserUtils.waitFor(3);
        String ActTitle=Driver.get().getTitle();
        System.out.println(ActTitle);
        Assert.assertTrue(ActTitle.contains("Account Activity"));

    }
    @Then("Account drop down should have {string} selected")
    public void account_drop_down_should_have_selected(String string) {
        //BrowserUtils.waitForClickablility(new AccountActivityPage().accountDropdownSelect().getFirstSelectedOption(),15);
        accountActivityPage.waitUntilLoaderScreenDisappear();
        String Act=new AccountActivityPage().accountDropdownSelect().getFirstSelectedOption().getText();
        System.out.println(Act);
        Assert.assertEquals(string,Act);
    }

    @When("the user clicks on Brokerage link on the Account Summary page")
    public void the_user_clicks_on_Brokerage_link_on_the_Account_Summary_page() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Then("Account drop down should have Brokerage selected")
    public void account_drop_down_should_have_Brokerage_selected() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("the user clicks on Checking link on the Account Summary page")
    public void the_user_clicks_on_Checking_link_on_the_Account_Summary_page() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("Account drop down should have Checking selected")
    public void account_drop_down_should_have_Checking_selected() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @When("the user clicks on Credit card link on the Account Summary page")
    public void the_user_clicks_on_Credit_card_link_on_the_Account_Summary_page() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Then("Account drop down should have Credit Card selected")
    public void account_drop_down_should_have_Credit_Card_selected() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

     @When("the user clicks on Loan link on the Account Summary page")
    public void the_user_clicks_on_Loan_link_on_the_Account_Summary_page() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
    @Then("Account drop down should have Loan selected")
    public void account_drop_down_should_have_Loan_selected() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }



}
