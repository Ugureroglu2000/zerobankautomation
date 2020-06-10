package com.zerobank.Pages;

import com.zerobank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;

public class ZeroPage extends BasePage {
    public ZeroPage() {  PageFactory.initElements(Driver.get(), this);    }

    @FindBy(xpath = "//*[.='Savings']")
    public WebElement Savings;
    @FindBy(xpath = "//*[.='Brokerage']")
    public WebElement Brokerage;
    @FindBy(xpath = "//*[.='Checking']")
    public WebElement Checking;
    @FindBy(xpath = "//*[.='Credit card']")
    public WebElement CreditCard;
    @FindBy(xpath = "//*[.='Loan']")
    public WebElement Loan;
    public void clickWebelement(WebElement element){
        element.click();
    }




}
