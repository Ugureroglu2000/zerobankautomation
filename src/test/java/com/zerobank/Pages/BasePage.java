package com.zerobank.Pages;


import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public abstract class BasePage {
     public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(xpath = "//ul[@class='nav nav-tabs']/li")
    public List<WebElement> menuOptions;

//    @FindBy(css = "div[class='loader-mask shown']")
//    @CacheLookup
//    protected WebElement loaderMask;

//    @FindBy(linkText = "/index.html")
//    public WebElement indexlink;

//    public String getindexlinkTitle() {
//        //ant time we are verifying page name, or page subtitle, loader mask appears
////        waitUntilLoaderScreenDisappear();
//        BrowserUtils.waitForStaleElement(indexlink);
//        return indexlink.getText();
//    }

    @FindBy(xpath = "(//*[@class='dropdown'])[2]")
    public WebElement userName;

    public String getUserName(){
        //    waitUntilLoaderScreenDisappear();
        BrowserUtils.waitForVisibility(userName, 5);
        return userName.getText();
    }

    @FindBy(id = "logout_link")
    public WebElement logOutLink;

    public void logOut(){
        BrowserUtils.waitFor(2);
        BrowserUtils.clickWithJS(userName);
        BrowserUtils.clickWithJS(logOutLink);
    }


    @FindBy(linkText = "My User")
    public WebElement myUser;

   


    /**
     * @return page name, for example: Dashboard
     */



    /**
     * Waits until loader screen present. If loader screen will not pop up at all,
     * NoSuchElementException will be handled  bu try/catch block
     * Thus, we can continue in any case.
     */
//    public void waitUntilLoaderScreenDisappear() {
//        try {
//            WebDriverWait wait = new WebDriverWait(Driver.get(), 5);
//            wait.until(ExpectedConditions.invisibilityOf(loaderMask));
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//
//    }


    @FindBy(xpath = "//*[contains(text(),'Account Summary')]")
    public WebElement AccountSummary;
    @FindBy(xpath = "//*[contains(text(),'Account Activity')]")
    public WebElement AccountActivity;
    @FindBy(xpath = "//*[contains(text(),'Transfer Funds')]")
    public WebElement TransferFunds;
    @FindBy(xpath = "//*[contains(text(),'Pay Bills')]")
    public WebElement PayBills;
    @FindBy(xpath = "//*[contains(text(),'My Money Map')]")
    public WebElement MyMoneyMap;
    @FindBy(xpath = "//*[contains(text(),'Online Statements')]")
    public WebElement OnlineStatements;





    public void goToMyUser(){
 //       waitUntilLoaderScreenDisappear();
        BrowserUtils.waitForClickablility(userName, 5).click();
        BrowserUtils.waitForClickablility(myUser, 5).click();

    }

    /**
     * This method will navigate user to the specific module in vytrack application.
     * For example: if tab is equals to Activities, and module equals to Calls,
     * Then method will navigate user to this page: http://qa2.vytrack.com/call/
     *
     * @param tab

     */
    public void navigateToTab(String tab) {
        String tabLocator = "//*[contains(text(),'"+tab+"')]";
         try {
            BrowserUtils.waitForClickablility(By.xpath(tabLocator), 5);
            WebElement tabElement = Driver.get().findElement(By.xpath(tabLocator));
            new Actions(Driver.get()).moveToElement(tabElement).pause(200).doubleClick(tabElement).build().perform();
        } catch (Exception e) {
            BrowserUtils.clickWithWait(By.xpath(tabLocator), 5);
        }

    }
    @FindBy(css = "div[class='loader-mask shown']")
    @CacheLookup
    protected WebElement loaderMask;

    public void waitUntilLoaderScreenDisappear() {
        try {
            WebDriverWait wait = new WebDriverWait(Driver.get(), 5);
            wait.until(ExpectedConditions.invisibilityOf(loaderMask));
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}
