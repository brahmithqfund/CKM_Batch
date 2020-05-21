package runner;


import cucumber.api.CucumberOptions;


//@RunWith(Cucumber.class)
@CucumberOptions(
		
		features= {"C:\\AA_Batch_Cucumber\\Manual\\src\\main\\java\\feature\\Sceanrios.feature"},
		glue= {"StepDefinationa"}, 
		format= {"pretty", "html:test-output"}, 
		dryRun=true,
		monochrome=true, 
		strict=true
		//tags= {"@SmokeTest" , "~@RegressionTest", "~@PDLTest(enabled=true)"}
		
		)


public class Runner {

}
