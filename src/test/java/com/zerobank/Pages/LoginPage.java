package com.zerobank.Pages;

import com.zerobank.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends BasePage {

    public LoginPage() {  PageFactory.initElements(Driver.get(), this);    }

    @FindBy(css = ".signin.btn.btn-info")
    public WebElement signinButton;
    @FindBy(xpath = "//*[@name='user_login']")
    public WebElement username;
    @FindBy(xpath = "//*[@name='user_password']")
    public WebElement password;
    @FindBy (xpath = "//*[@name='submit']")
    public WebElement submitButton;
    @FindBy(css = ".alert.alert-error")
    public WebElement failedMessage;

    public void login(String user, String passw){
        username.sendKeys(user);
        password.sendKeys(passw);
        submitButton.click();
    }

}
