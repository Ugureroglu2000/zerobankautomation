package com.zerobank.Step_Definitions;

import com.zerobank.Pages.AccountActivityPage;
import com.zerobank.Pages.LoginPage;
import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class FindTransactionsStepDef {


    @Given("the user accesses the Find Transactions tab")
    public void the_user_accesses_the_Find_Transactions_tab() {
        Driver.get().get(ConfigurationReader.get("url"));
        new LoginPage().signinButton.click();
        BrowserUtils.waitFor(2);
        String user=ConfigurationReader.get("user_username");
        String pass=ConfigurationReader.get("user_password");
        
        new LoginPage().login(user,pass);
        BrowserUtils.waitFor(3);
        new AccountActivityPage().AccountActivity.click();
        BrowserUtils.waitForClickablility(new AccountActivityPage().FindTransactions,10);
        new AccountActivityPage().FindTransactions.click();
    }

    @When("the user enters date range from {string} to {string}")
    public void the_user_enters_date_range_from_to(String string, String string2) {
   String from=string;
   String to=string2;
        System.out.println("1");
   AccountActivityPage accountActivityPage=new AccountActivityPage();
   accountActivityPage.DateFrom.sendKeys(from);
   accountActivityPage.DateTo.sendKeys(to);
        System.out.println("2");
     }
    @When("clicks search")
    public void clicks_search() {
        new AccountActivityPage().FindButton.click();
    }

    @Then("results table should only show transactions dates between {string} to  {string}")
    public void results_table_should_only_show_transactions_dates_between_to(String string, String string2) {
        System.out.println("3");
        int from=Integer.parseInt(string.substring(0,4)+string.substring(5,7)+string.substring(8));
        int to=Integer.parseInt(string2.substring(0,4)+string2.substring(5,7)+string2.substring(8));
        List<Integer> Dates=new AccountActivityPage().DateListInteger();
        boolean bool=true;
        System.out.println(Dates.toString());
        for (int i=0;i<Dates.size();i++) {
            if (Dates.get(i)<=from||Dates.get(i)>=to){bool=true;}else{bool=false;}
        }
        Assert.assertTrue(bool);
        System.out.println("4.6");
    }
    @Then("the results should be sorted by most recent date")
    public void the_results_should_be_sorted_by_most_recent_date() {
        List<Integer> Dates=new AccountActivityPage().DateListInteger();
                for (int i=0;i<Dates.size()-1;i++ ) {
            Assert.assertTrue(Dates.get(i)>=Dates.get(i+1));
        }
        System.out.println("5");
    }
    @Then("the results table should only not contain transactions dated {string}")
    public void the_results_table_should_only_not_contain_transactions_dated(String string) {
        int opt=Integer.parseInt(string.substring(0,4)+string.substring(5,7)+string.substring(8));
        System.out.println("5.5");
        List<Integer> Dates=new AccountActivityPage().DateListInteger();
        boolean bool=true;
        if (Dates.get(0)<opt||Dates.get(Dates.size()-1)>opt){ bool=false;}
        Assert.assertTrue(bool);
        System.out.println("6");
    }


    @When("the user enters description {string}")
    public void the_user_enters_description(String string) {
       AccountActivityPage accountActivityPage=new AccountActivityPage();
        accountActivityPage.DescriptionInbox.clear();
       accountActivityPage.DescriptionInbox.sendKeys(string);
       accountActivityPage.FindButton.click();

    }



    @Then("results table should only show descriptions containing {string}")
    public void results_table_should_only_show_descriptions_containing(String string) {
        String desc=Driver.get().findElement(By.xpath("//div[@id='filtered_transactions_for_account']//tbody/tr/td[2][1]")).getText();
     //   AccountActivityPage accountActivityPage=new AccountActivityPage();
       // accountActivityPage.FindButton.click();
     //   String desc=accountActivityPage.DescriptionList.get(0).getText();
    //String list=new AccountActivityPage().DescriptionListString().toString()  ; 
        System.out.println(desc);
        Assert.assertTrue(desc.contains(string));
    }

    @Then("results table should not show descriptions containing {string}")
    public void results_table_should_not_show_descriptions_containing(String string) {
        System.out.println(string+"not");
        if (!string.equals("ONLINE")){the_user_enters_description("ONLINE");
        Assert.assertFalse(new AccountActivityPage().DescriptionListString().contains(string));}
//        String key=string;
//        if (string.equals("ONLINE")){the_user_enters_description("ONLINE");
//            Assert.assertTrue(new AccountActivityPage().DescriptionListString().contains(string));}
    }

    @Then("results table should show at least one result under {string}")
    public void results_table_should_show_at_least_one_result_under(String string) {
        Assert.assertTrue(new AccountActivityPage().DepositListString().size()>0);
    }
    @Then("results table should show at least one result under Withdrawal")
    public void results_table_should_show_at_least_one_result_under_Withdrawal() {
        Assert.assertTrue(new AccountActivityPage().WithdrawalListString().size()>0);
    }
    @When("user selects type “Deposit”")
    public void user_selects_type_Deposit() {
        Select type=new Select(new AccountActivityPage().typeTransaction);
        type.selectByValue("DEPOSIT");
        new AccountActivityPage().FindButton.click();

    }
    @Then("results table should show no result under {string}")
    public void results_table_should_show_no_result_under(String string) {
       AccountActivityPage accountActivityPage=new AccountActivityPage();
       accountActivityPage.FindButton.click();
       BrowserUtils.waitForPageToLoad(5);
        Assert.assertEquals(new AccountActivityPage().WithdrawalListString().size(),0);
    }
    @When("user selects type “Withdrawal”")
    public void user_selects_type_Withdrawal() {
        Select type=new Select(new AccountActivityPage().typeTransaction);
        type.selectByValue("WITHDRAWAL");
        new AccountActivityPage().FindButton.click();
    }
    @Then("results table should show no result under Deposit")
    public void results_table_should_show_no_result_under_Deposit() {
        Assert.assertEquals(new AccountActivityPage().DepositListString().size(),0);}


}
