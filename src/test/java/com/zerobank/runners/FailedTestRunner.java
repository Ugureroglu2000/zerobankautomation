package com.zerobank.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/default-html-reports",
        "rerun:target/rerun.txt"},
        features = "@Target/rerun.txt",
        glue="com/zerobank/Step_Definitions"
)

public class FailedTestRunner {
}
