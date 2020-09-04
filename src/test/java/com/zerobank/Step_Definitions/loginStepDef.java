package com.zerobank.Step_Definitions;

import com.zerobank.Pages.LoginPage;
import com.zerobank.Pages.ZeroPage;
import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class loginStepDef {

    @Given("user is in login page")
    public void user_is_in_login_page() {
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @When("user gives {string} credentials")
    public void user_gives_credentials(String string) {
        new LoginPage().signinButton.click();
     String username=ConfigurationReader.get(string+"_username");
     String password=ConfigurationReader.get(string+"_password");
     new LoginPage().login(username,password);
        //System.out.println("When");

    }
    @Then("user can log in")
    public void user_can_log_in() {
        //ZeroPage zeroPage=new ZeroPage();
       // System.out.println(Driver.get().getTitle());
             Assert.assertTrue(Driver.get().getTitle().contains("Zero"));
    }

    @When("user gives blank username")
    public void user_gives_blank_username() {
        new LoginPage().signinButton.click();
        String username="";
        String password=ConfigurationReader.get("user"+"_password");
        new LoginPage().login(username,password);

    }
    @Then("user can not log in")
    public void user_can_not_log_in() {
        LoginPage loginPage=new LoginPage();
        String Act=loginPage.failedMessage.getText();
        Assert.assertEquals("Login and/or password are wrong.",Act);
    }

    @When("user gives blank password")
    public void user_gives_blank_password() {
        new LoginPage().signinButton.click();
        String username=ConfigurationReader.get("user"+"_username");
        String password="";
        new LoginPage().login(username,password);

    }


    @When("user gives wrong password")
    public void user_gives_wrong_password() {
        new LoginPage().signinButton.click();
        String username=ConfigurationReader.get("user"+"_username");
        String password="wrong";
        new LoginPage().login(username,password);

    }


    @When("user gives wrong username")
    public void user_gives_wrong_username() {
        new LoginPage().signinButton.click();
        String username="wrong";
        String password=ConfigurationReader.get("user"+"_password");
        new LoginPage().login(username,password);

    }






}
