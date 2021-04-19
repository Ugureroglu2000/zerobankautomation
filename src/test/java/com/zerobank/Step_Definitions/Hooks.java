package com.zerobank.Step_Definitions;

import com.zerobank.utilities.ConfigurationReader;
import com.zerobank.utilities.Driver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.util.concurrent.TimeUnit;

public class Hooks {

    @Before
    public void setUp(){
     Driver.get().get(ConfigurationReader.get("url"));
     Driver.get().manage().window().maximize();
        Driver.get().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        //   System.out.println("\t coming from Before");
    }

    @After
    public void tearDown(Scenario scenario){
        if (scenario.isFailed()){
            final byte[] screenshot = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
//            scenario.embed(screenshot,"image/png","screenshot");
            scenario.attach(screenshot,"image/png","screenshot");
        }
        Driver.closeDriver();
    }

    @Before("@db")
    public void setUpDB(){
        System.out.println("\t coming BEFORE from DB");
    }

    @After("@db")
    public void tearDownDB(){
        System.out.println("\tThis is AFTER coming from DBn");
    }


}
