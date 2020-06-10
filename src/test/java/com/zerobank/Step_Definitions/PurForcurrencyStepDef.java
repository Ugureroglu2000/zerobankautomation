package com.zerobank.Step_Definitions;

import com.zerobank.Pages.LoginPage;
import com.zerobank.Pages.PaybillsPage;
import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Alert;

import java.util.List;

public class PurForcurrencyStepDef {


    @Given("the user accesses the Purchase foreign currency cash tab")
    public void the_user_accesses_the_Purchase_foreign_currency_cash_tab() {
        LoginPage loginPage=new LoginPage();
        String user= ConfigurationReader.get("user_username");
        String pass= ConfigurationReader.get("user_password");
        loginPage.signinButton.click();
        loginPage.login(user,pass);
        PaybillsPage paybillsPage=new PaybillsPage();
        paybillsPage.navigateToTab("Pay Bills");
        paybillsPage.navigateToTab("Purchase Foreign Currency");
        String subheader=paybillsPage.PurchaseForeignCurrencyTabSubHeader.getText();
        Assert.assertEquals(subheader,"Purchase foreign currency cash");

    }


    @Then("following currencies should be available")
    public void following_currencies_should_be_available(List<String> ExpList) {
        PaybillsPage paybillsPage=new PaybillsPage();
        List<String> ActList=paybillsPage.getListSelect(paybillsPage.curr);
        System.out.println("                 "+ExpList);
        System.out.println(ActList);
        for (String str:ExpList  ) {
            Assert.assertTrue(ActList.contains(str));
        }
        

    }

    @When("user tries to calculate cost without selecting a currency")
    public void user_tries_to_calculate_cost_without_selecting_a_currency() {
        PaybillsPage paybillsPage=new PaybillsPage();
        paybillsPage.AmountInput.sendKeys("200");
        paybillsPage.CalculateCostButton.click();

    }
    @Then("error message should be displayed")
    public void error_message_should_be_displayed() {
        String Exp="Please, ensure that you have filled all the required fields with valid values.";
        Alert alert= Driver.get().switchTo().alert();
        String Act=alert.getText();
        Assert.assertEquals(Act,Exp);

    }

    @When("user tries to calculate cost without entering a value")
    public void user_tries_to_calculate_cost_without_entering_a_value() {
       PaybillsPage paybillsPage=new PaybillsPage();
       paybillsPage.SelectedCurrencyRadiobutton.click();
       paybillsPage.CalculateCostButton.click();

    }



}
