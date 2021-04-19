package com.zerobank.runners;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/cucumber.json",
                "html:target/default-html-reports",
                "rerun:target/rerun.txt"},
        features="src/test/Resources/features",
        glue="com/zerobank/Step_Definitions",
        dryRun=false,
<<<<<<< HEAD
        tags="@payee"
=======
        tags="@login"
        // deneme ??git add

>>>>>>> e2803cd5f756dfdc6d1a8d75e6a37bd759a08374
)

public class cukes_Runner {
}
