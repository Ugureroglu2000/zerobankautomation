package com.zerobank.Step_Definitions;

import com.zerobank.Pages.LoginPage;
import com.zerobank.Pages.PaybillsPage;
import com.zerobank.utilities.ConfigurationReader;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

import java.util.Map;

public class payeeStepDef {



    @Given("Add New Payee tab")
    public void add_New_Payee_tab() {
        LoginPage loginPage=new LoginPage();
        String user= ConfigurationReader.get("user_username");
        String pass= ConfigurationReader.get("user_password");
        loginPage.signinButton.click();
        loginPage.login(user,pass);
        PaybillsPage paybillsPage=new PaybillsPage();
        paybillsPage.navigateToTab("Pay Bills");
        paybillsPage.navigateToTab("Add New Payee");
        String ActsubHead=paybillsPage.AddNewPayeeTabSubheader.getText();
        String Exp="Who are you paying?";
        Assert.assertEquals(ActsubHead,Exp);
    }


    @Given("creates new payee using following information")
    public void creates_new_payee_using_following_information(Map<String,String> payeeinf) {
    PaybillsPage paybillsPage=new PaybillsPage();
    paybillsPage.PayeeNameinput.sendKeys(payeeinf.get("Payee Name"));
    paybillsPage.PayeeAddressinput.sendKeys(payeeinf.get("Payee Address"));
    paybillsPage.PayeeAccountinput.sendKeys(payeeinf.get("Account"));
    paybillsPage.Payeedetailsinput.sendKeys(payeeinf.get("Payee details"));
    paybillsPage.AddButton.click();

    }
    @Then("message {string} should be displayed")
    public void message_should_be_displayed(String string) {
      String exp=" was successfully created.";
      String Act=new PaybillsPage().AlertMessage.getText();
        System.out.println(Act+ " " +exp);
        Assert.assertTrue(Act.contains(exp));

    }


}
