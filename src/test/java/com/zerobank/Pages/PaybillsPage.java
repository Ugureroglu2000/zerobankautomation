package com.zerobank.Pages;

import com.zerobank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.List;

public class PaybillsPage extends BasePage{

    public PaybillsPage() {  PageFactory.initElements(Driver.get(), this);    }

    @FindBy(xpath = "//*[.='Purchase Foreign Currency']")
    public WebElement PurchaseForeignCurrencyTab;

    @FindBy(xpath = "//*[.='Add New Payee']")
    public WebElement AddNewPayeeTab;
    @FindBy(xpath = "//*[.='Who are you paying?']")
    public WebElement AddNewPayeeTabSubheader;
    @FindBy(xpath = "//input[@id='np_new_payee_name']")
    public WebElement PayeeNameinput;
    @FindBy(xpath = "//textarea[@id='np_new_payee_address']")
    public WebElement PayeeAddressinput;
    @FindBy(xpath = "//input[@id='np_new_payee_account']")
    public WebElement PayeeAccountinput;
    @FindBy(xpath = "//input[@id='np_new_payee_details']")
    public WebElement Payeedetailsinput;
    @FindBy(xpath = "//input[@id='add_new_payee']")
    public WebElement AddButton;
    @FindBy(xpath = "//div[@id='alert_content']")
    public WebElement AlertMessage;


    @FindBy(xpath = "(//*[@class='board-header'])[2]")
    public WebElement PurchaseForeignCurrencyTabSubHeader;

    @FindBy(css = "select[id='pc_currency']")
            public WebElement curr;
    public List<String> getListSelect(WebElement curr) {
        Select currency = new Select(curr);
        List<String> getListSelect=new ArrayList<>();
        List<WebElement> currencyElementsList = currency.getOptions();
        for (WebElement a:currencyElementsList) {
            getListSelect.add(a.getText());
        }
        return  getListSelect;
    }

    @FindBy(xpath = "//input[@id='pc_amount']")
    public WebElement AmountInput;
    @FindBy(id = "pc_inDollars_false")
    public WebElement SelectedCurrencyRadiobutton;
    @FindBy(id ="pc_inDollars_true")
    public WebElement DollarRadioButton;
    @FindBy(id = "pc_calculate_costs")
    public WebElement CalculateCostButton;


}
