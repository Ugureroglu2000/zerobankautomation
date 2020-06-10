package com.zerobank.Pages;

import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.List;

public class AccountActivityPage extends BasePage {

    public AccountActivityPage() {  PageFactory.initElements(Driver.get(), this);    }

    @FindBy(xpath = "//*[@name='accountId']")
    public WebElement accountDropdown;
    @FindBy(xpath = "//*[contains(text(),'Find Transactions')]")
    public WebElement FindTransactions;
    @FindBy(id = "aa_fromDate")
    public WebElement DateFrom;
    @FindBy(id = "aa_toDate")
    public WebElement DateTo;
    @FindBy(id = "aa_description")
    public WebElement DescriptionInbox;



    @FindBy(xpath = "//button[@type='submit']")
    public WebElement FindButton;
    @FindBy(xpath = "//select[@id='aa_type']")
    public WebElement typeTransaction;

    @FindBy(xpath = "//div[@id='filtered_transactions_for_account']//tbody/tr/td[1]")
    public List<WebElement> DateList;

    @FindBy(xpath = "//div[@id='filtered_transactions_for_account']//tbody/tr/td[2]")
    public List<WebElement> DescriptionList;
    @FindBy(xpath = "//div[@id='filtered_transactions_for_account']//tbody/tr/td[3]")
    public List<WebElement> DepositList;

    @FindBy(xpath = "//div[@id='filtered_transactions_for_account']//tbody/tr/td[4]")
    public List<WebElement> WithdrawalList;

    public List<String> DepositListString() {
        List<String> Deposits = new ArrayList<>();
        for (WebElement a:DepositList ) {
            Deposits.add(a.getText());    }
        return Deposits;
    }
    public List<String> WithdrawalListString() {
        List<String> Withdrawals = new ArrayList<>();
        for (WebElement a:WithdrawalList ) {
            Withdrawals.add(a.getText());    }
        return Withdrawals;
    }
    public List<String> DescriptionListString() {
    //BrowserUtils.getElementsText()
        List<String> Descriptions = new ArrayList<>();
        for (WebElement a:DescriptionList ) {
           // BrowserUtils.waitForStaleElement(a);
            Descriptions.add(a.getText());    }
        return Descriptions;
    }

        public List<Integer> DateListInteger(){
        List<Integer> Dates=new ArrayList<>();
        for (WebElement a:DateList) {
            String date=a.getText().substring(0,4)+a.getText().substring(5,7)+a.getText().substring(8);
            int dates=Integer.parseInt(date);
            Dates.add(dates);
        }
        return Dates;
    }


    public Select accountDropdownSelect(){
        Select sel=new Select(accountDropdown);
        return sel;
    }



}
