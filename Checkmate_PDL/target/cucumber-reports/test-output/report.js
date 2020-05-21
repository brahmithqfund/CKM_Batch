$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Checkmate Scenarios for CA State",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state",
  "keyword": "Feature"
});
formatter.before({
  "duration": 131800,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 85,
      "value": "#Then History"
    }
  ],
  "line": 88,
  "name": "Advance \u003d\u003ePartial Payment with 2 tender types as CCK with diff numbers \u003d\u003eTransaction should not be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003epartial-payment-with-2-tender-types-as-cck-with-diff-numbers-\u003d\u003etransaction-should-not-be-processed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 87,
      "name": "@current1"
    }
  ]
});
formatter.step({
  "line": 89,
  "name": "CA_PDL_055",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "Get the Loan Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Age the store to \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "Partial Payment Diff No",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_055()"
});
formatter.result({
  "duration": 468792200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 5785217100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 38831377300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 70565709000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.get_the_Loan_Date_from_History()"
});
formatter.result({
  "duration": 22234244200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "duration": 747074300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.partial_Payment_diff_no()"
});
formatter.result({
  "duration": 57298809000,
  "status": "passed"
});
formatter.after({
  "duration": 63200,
  "status": "passed"
});
formatter.before({
  "duration": 59800,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 96,
      "value": "#Then History"
    }
  ],
  "line": 99,
  "name": "Advance \u003d\u003ePartial Payment with 2 tender types as CCK and MO \u003d\u003eTransaction should be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003epartial-payment-with-2-tender-types-as-cck-and-mo-\u003d\u003etransaction-should-be-processed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 98,
      "name": "@current1"
    }
  ]
});
formatter.step({
  "line": 100,
  "name": "CA_PDL_056",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 104,
  "name": "Get the Loan Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "Age the store to \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "Partial Payment Diff No",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_056()"
});
formatter.result({
  "duration": 86715700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1567336300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 40390885000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 15557093500,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with xpath \u003d\u003d //*[@id\u003d\u0027910000\u0027]/a (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-167-PC\u0027, ip: \u0027192.168.0.167\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:18974/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 0e8e6480-8d7e-4400-b19b-ce46b5fb5b2f\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027910000\u0027]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.new_Loan_taken_for_the_user.new_Loan_taken_for_the_user(new_Loan_taken_for_the_user.java:120)\r\n\tat stepDefinitions.StepDefinations.new_Loan_taken_for_the_user(StepDefinations.java:954)\r\n\tat ✽.Then New Loan taken for the user(login.feature:103)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.get_the_Loan_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.partial_Payment_diff_no()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 92800,
  "status": "passed"
});
formatter.before({
  "duration": 104400,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 107,
      "value": "#Then History"
    }
  ],
  "line": 110,
  "name": "Advance \u003d\u003ePartial Payment with 2 tender types as Cash \u003d\u003eTransaction should not be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003epartial-payment-with-2-tender-types-as-cash-\u003d\u003etransaction-should-not-be-processed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 109,
      "name": "@current1"
    }
  ]
});
formatter.step({
  "line": 111,
  "name": "CA_PDL_057",
  "keyword": "Given "
});
formatter.step({
  "line": 112,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 114,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "Get the Loan Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "Age the store to \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "Partial Payment Diff No",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_057()"
});
formatter.result({
  "duration": 47551400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1594268500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 35410196200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 67327108000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.get_the_Loan_Date_from_History()"
});
formatter.result({
  "duration": 12557662800,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with xpath \u003d\u003d //*[@id\u003d\u0027910000\u0027]/a (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-167-PC\u0027, ip: \u0027192.168.0.167\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:18974/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 0e8e6480-8d7e-4400-b19b-ce46b5fb5b2f\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027910000\u0027]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.get_the_Loan_Date_from_History.get_the_Loan_Date_from_History(get_the_Loan_Date_from_History.java:27)\r\n\tat stepDefinitions.StepDefinations.get_the_Loan_Date_from_History(StepDefinations.java:977)\r\n\tat ✽.And Get the Loan Date from History(login.feature:115)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.partial_Payment_diff_no()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 86000,
  "status": "passed"
});
formatter.before({
  "duration": 65100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 118,
      "value": "#Then History"
    }
  ],
  "line": 121,
  "name": "Advance \u003d\u003ePartial Payment with tender types as Cash  \u003d\u003eTransaction should be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003epartial-payment-with-tender-types-as-cash--\u003d\u003etransaction-should-be-processed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 120,
      "name": "@current1"
    }
  ]
});
formatter.step({
  "line": 122,
  "name": "CA_PDL_058",
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "Get the Loan Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "Age the store to \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "Partial Payment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_058()"
});
formatter.result({
  "duration": 43036100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1585880000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 35172142000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 15456059400,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with xpath \u003d\u003d //*[@id\u003d\u0027910000\u0027]/a (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-167-PC\u0027, ip: \u0027192.168.0.167\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:18974/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 0e8e6480-8d7e-4400-b19b-ce46b5fb5b2f\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027910000\u0027]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.new_Loan_taken_for_the_user.new_Loan_taken_for_the_user(new_Loan_taken_for_the_user.java:120)\r\n\tat stepDefinitions.StepDefinations.new_Loan_taken_for_the_user(StepDefinations.java:954)\r\n\tat ✽.Then New Loan taken for the user(login.feature:125)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.get_the_Loan_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.partial_Payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 36100,
  "status": "passed"
});
formatter.before({
  "duration": 33100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 129,
      "value": "#Then History"
    }
  ],
  "line": 132,
  "name": "Advance \u003d\u003ePartial Payment with tender types as CCK  \u003d\u003eTransaction should be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003epartial-payment-with-tender-types-as-cck--\u003d\u003etransaction-should-be-processed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 131,
      "name": "@current1"
    }
  ]
});
formatter.step({
  "line": 133,
  "name": "CA_PDL_059",
  "keyword": "Given "
});
formatter.step({
  "line": 134,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 136,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "Get the Loan Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "Age the store to \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "Partial Payment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_059()"
});
formatter.result({
  "duration": 38507600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1634949300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 35187912300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 69029667300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.get_the_Loan_Date_from_History()"
});
formatter.result({
  "duration": 21899127900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "duration": 55949500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.partial_Payment()"
});
formatter.result({
  "duration": 32794812400,
  "status": "passed"
});
formatter.after({
  "duration": 45400,
  "status": "passed"
});
formatter.before({
  "duration": 35300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 140,
      "value": "#Then History"
    }
  ],
  "line": 143,
  "name": "Advance \u003d\u003ePartial Payment with tender types as CK  \u003d\u003eTransaction should be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003epartial-payment-with-tender-types-as-ck--\u003d\u003etransaction-should-be-processed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 142,
      "name": "@current1"
    }
  ]
});
formatter.step({
  "line": 144,
  "name": "CA_PDL_060",
  "keyword": "Given "
});
formatter.step({
  "line": 145,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 147,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "Get the Loan Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "Age the store to \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 150,
  "name": "Partial Payment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_060()"
});
formatter.result({
  "duration": 33371100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1573897600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 36444760700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 70170407300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.get_the_Loan_Date_from_History()"
});
formatter.result({
  "duration": 22157318200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "duration": 49353200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.partial_Payment()"
});
formatter.result({
  "duration": 32937707200,
  "status": "passed"
});
formatter.after({
  "duration": 90300,
  "status": "passed"
});
formatter.before({
  "duration": 85100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 151,
      "value": "#Then History"
    }
  ],
  "line": 154,
  "name": "Advance \u003d\u003ePartial Payment with tender types as MO  \u003d\u003eTransaction should be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003epartial-payment-with-tender-types-as-mo--\u003d\u003etransaction-should-be-processed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 153,
      "name": "@current1"
    }
  ]
});
formatter.step({
  "line": 155,
  "name": "CA_PDL_061",
  "keyword": "Given "
});
formatter.step({
  "line": 156,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 158,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 159,
  "name": "Get the Loan Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "Age the store to \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 161,
  "name": "Partial Payment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_061()"
});
formatter.result({
  "duration": 34483200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1598636300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 35290303100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 62097964100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.get_the_Loan_Date_from_History()"
});
formatter.result({
  "duration": 21919779900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "duration": 57183500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.partial_Payment()"
});
formatter.result({
  "duration": 12528599600,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with xpath \u003d\u003d //*[@id\u003d\u0027910000\u0027]/a (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-167-PC\u0027, ip: \u0027192.168.0.167\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:18974/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 0e8e6480-8d7e-4400-b19b-ce46b5fb5b2f\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027910000\u0027]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.partial_payment.partial_payment(partial_payment.java:34)\r\n\tat stepDefinitions.StepDefinations.partial_Payment(StepDefinations.java:998)\r\n\tat ✽.Then Partial Payment(login.feature:161)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 33600,
  "status": "passed"
});
formatter.before({
  "duration": 22900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 263,
      "value": "#Then History"
    }
  ],
  "line": 266,
  "name": "Loan with ACH --\u003e Safe deposit on Due date → Payoff amount should display in Safe deposit",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-with-ach---\u003e-safe-deposit-on-due-date-→-payoff-amount-should-display-in-safe-deposit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 265,
      "name": "@current1"
    }
  ]
});
formatter.step({
  "line": 267,
  "name": "CA_PDL_083",
  "keyword": "Given "
});
formatter.step({
  "line": 268,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 270,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 271,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 273,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_083()"
});
formatter.result({
  "duration": 28812600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1554230900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 34994840000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 63738319000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "duration": 23559930200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "duration": 63593400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "duration": 105948220600,
  "status": "passed"
});
formatter.after({
  "duration": 45800,
  "status": "passed"
});
formatter.before({
  "duration": 39500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 274,
      "value": "#Then History"
    }
  ],
  "line": 277,
  "name": "Loan with ACH --\u003e Partial Payment --\u003e Safe deposit on Due date → pending amount should display in Safe deposit",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-with-ach---\u003e-partial-payment---\u003e-safe-deposit-on-due-date-→-pending-amount-should-display-in-safe-deposit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 276,
      "name": "@current1"
    }
  ]
});
formatter.step({
  "line": 278,
  "name": "CA_PDL_084",
  "keyword": "Given "
});
formatter.step({
  "line": 279,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 280,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 281,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 282,
  "name": "Partial Payment",
  "keyword": "Then "
});
formatter.step({
  "line": 283,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 285,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_084()"
});
formatter.result({
  "duration": 22718600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1756459700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 42274144600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 47785236300,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with xpath \u003d\u003d //*[@id\u003d\u0027riskViewBdy\u0027]/table[3]/tbody/tr[1]/td/table/tbody/tr[3]/td/table/tbody/tr[5]/td[4]/table/tbody/tr[1]/td[2] (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-167-PC\u0027, ip: \u0027192.168.0.167\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:18974/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 0e8e6480-8d7e-4400-b19b-ce46b5fb5b2f\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027riskViewBdy\u0027]/table[3]/tbody/tr[1]/td/table/tbody/tr[3]/td/table/tbody/tr[5]/td[4]/table/tbody/tr[1]/td[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.new_Loan_taken_for_the_user.PDL(new_Loan_taken_for_the_user.java:372)\r\n\tat stepDefinitions.new_Loan_taken_for_the_user.new_Loan_taken_for_the_user(new_Loan_taken_for_the_user.java:161)\r\n\tat stepDefinitions.StepDefinations.new_Loan_taken_for_the_user(StepDefinations.java:954)\r\n\tat ✽.Then New Loan taken for the user(login.feature:281)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.partial_Payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 84900,
  "status": "passed"
});
formatter.before({
  "duration": 78900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 286,
      "value": "#Then History"
    }
  ],
  "line": 289,
  "name": "Loan Loan with ACH --\u003e Check edit from admin → Should display as Manual in Safe deposit on Due date",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-loan-with-ach---\u003e-check-edit-from-admin-→-should-display-as-manual-in-safe-deposit-on-due-date",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 288,
      "name": "@current1"
    }
  ]
});
formatter.step({
  "line": 290,
  "name": "CA_PDL_085",
  "keyword": "Given "
});
formatter.step({
  "line": 291,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 292,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 293,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 294,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 295,
  "name": "Check edit from admin",
  "keyword": "Then "
});
formatter.step({
  "line": 296,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 297,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 298,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_085()"
});
formatter.result({
  "duration": 30886800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1787309600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 41918647700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 5681531100,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: Element is no longer valid (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-167-PC\u0027, ip: \u0027192.168.0.167\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:18974/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 0e8e6480-8d7e-4400-b19b-ce46b5fb5b2f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat stepDefinitions.new_Loan_taken_for_the_user.new_Loan_taken_for_the_user(new_Loan_taken_for_the_user.java:120)\r\n\tat stepDefinitions.StepDefinations.new_Loan_taken_for_the_user(StepDefinations.java:954)\r\n\tat ✽.Then New Loan taken for the user(login.feature:293)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.check_edit_from_admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 45000,
  "status": "passed"
});
formatter.before({
  "duration": 38500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 299,
      "value": "#Then History"
    }
  ],
  "line": 302,
  "name": "Loan Loan with ACH → mark Revoke from admin → Process Safe deposit on Due date",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-loan-with-ach-→-mark-revoke-from-admin-→-process-safe-deposit-on-due-date",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 301,
      "name": "@current1"
    }
  ]
});
formatter.step({
  "line": 303,
  "name": "CA_PDL_087",
  "keyword": "Given "
});
formatter.step({
  "line": 304,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 305,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 306,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 307,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 308,
  "name": "Revoke from admin",
  "keyword": "Then "
});
formatter.step({
  "line": 309,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 310,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 311,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_087()"
});
formatter.result({
  "duration": 28061300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1819314200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 41745707600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 63399282500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "duration": 12719752300,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with xpath \u003d\u003d //*[@id\u003d\u0027910000\u0027]/a (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-167-PC\u0027, ip: \u0027192.168.0.167\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:18974/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 0e8e6480-8d7e-4400-b19b-ce46b5fb5b2f\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027910000\u0027]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.get_the_Due_Date_from_History.get_the_Due_Date_from_History(get_the_Due_Date_from_History.java:41)\r\n\tat stepDefinitions.StepDefinations.get_the_Due_Date_from_History(StepDefinations.java:961)\r\n\tat ✽.And Get the Due Date from History(login.feature:307)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.revoke_from_admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 85700,
  "status": "passed"
});
formatter.before({
  "duration": 38400,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 312,
      "value": "#Then History"
    }
  ],
  "line": 315,
  "name": "Loan with RCPO --\u003e Safe deposit on Due date → Payoff amount should display in Safe deposit",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-with-rcpo---\u003e-safe-deposit-on-due-date-→-payoff-amount-should-display-in-safe-deposit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 314,
      "name": "@current1"
    }
  ]
});
formatter.step({
  "line": 316,
  "name": "CA_PDL_088",
  "keyword": "Given "
});
formatter.step({
  "line": 317,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 318,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 319,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 320,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 321,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 322,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_088()"
});
formatter.result({
  "duration": 16475700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1866572300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 44525923600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 63076146000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "duration": 2598776200,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: Element is no longer valid (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-167-PC\u0027, ip: \u0027192.168.0.167\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:18974/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 0e8e6480-8d7e-4400-b19b-ce46b5fb5b2f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat stepDefinitions.get_the_Due_Date_from_History.get_the_Due_Date_from_History(get_the_Due_Date_from_History.java:41)\r\n\tat stepDefinitions.StepDefinations.get_the_Due_Date_from_History(StepDefinations.java:961)\r\n\tat ✽.And Get the Due Date from History(login.feature:320)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 44100,
  "status": "passed"
});
formatter.before({
  "duration": 35700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 323,
      "value": "#Then History"
    }
  ],
  "line": 326,
  "name": "Loan with RCPO --\u003e Partial Payment --\u003e Safe deposit on Due date → pending amount should display in Safe deposit",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-with-rcpo---\u003e-partial-payment---\u003e-safe-deposit-on-due-date-→-pending-amount-should-display-in-safe-deposit",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 325,
      "name": "@current1"
    }
  ]
});
formatter.step({
  "line": 327,
  "name": "CA_PDL_089",
  "keyword": "Given "
});
formatter.step({
  "line": 328,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 330,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 331,
  "name": "Partial Payment",
  "keyword": "Then "
});
formatter.step({
  "line": 332,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 333,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 334,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_089()"
});
formatter.result({
  "duration": 17227900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1834010400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 42166726100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 63365067000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.partial_Payment()"
});
formatter.result({
  "duration": 34530067800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "duration": 12654893100,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with xpath \u003d\u003d //*[@id\u003d\u0027910000\u0027]/a (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-167-PC\u0027, ip: \u0027192.168.0.167\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:18974/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 0e8e6480-8d7e-4400-b19b-ce46b5fb5b2f\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027910000\u0027]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.get_the_Due_Date_from_History.get_the_Due_Date_from_History(get_the_Due_Date_from_History.java:41)\r\n\tat stepDefinitions.StepDefinations.get_the_Due_Date_from_History(StepDefinations.java:961)\r\n\tat ✽.And Get the Due Date from History(login.feature:332)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 75400,
  "status": "passed"
});
formatter.before({
  "duration": 51600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 335,
      "value": "#Then History"
    }
  ],
  "line": 338,
  "name": "Loan Loan with RCPO --\u003e Check edit from admin → Should display as Manual in Safe deposit on Due date",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-loan-with-rcpo---\u003e-check-edit-from-admin-→-should-display-as-manual-in-safe-deposit-on-due-date",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 337,
      "name": "@current1"
    }
  ]
});
formatter.step({
  "line": 339,
  "name": "CA_PDL_090",
  "keyword": "Given "
});
formatter.step({
  "line": 340,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 341,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 342,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 343,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 344,
  "name": "Check edit from admin",
  "keyword": "Then "
});
formatter.step({
  "line": 345,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 346,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 347,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_090()"
});
formatter.result({
  "duration": 41761200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1901077200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 41716234300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 63257120000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "duration": 23334095300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.check_edit_from_admin()"
});
formatter.result({
  "duration": 20939549900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "duration": 22742543700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "duration": 170138200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "duration": 83770704900,
  "status": "passed"
});
formatter.after({
  "duration": 46200,
  "status": "passed"
});
formatter.before({
  "duration": 30600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 348,
      "value": "#Then History"
    }
  ],
  "line": 351,
  "name": "Loan Loan with RCPO → mark Revoke from admin → Process Safe deposit on Due date",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-loan-with-rcpo-→-mark-revoke-from-admin-→-process-safe-deposit-on-due-date",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 350,
      "name": "@current1"
    }
  ]
});
formatter.step({
  "line": 352,
  "name": "CA_PDL_092",
  "keyword": "Given "
});
formatter.step({
  "line": 353,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 355,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 356,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 357,
  "name": "Revoke from admin",
  "keyword": "Then "
});
formatter.step({
  "line": 358,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 359,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 360,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_092()"
});
formatter.result({
  "duration": 30905700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1787762700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 41163653200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 63258080900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "duration": 2649614300,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: Element is no longer valid (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-167-PC\u0027, ip: \u0027192.168.0.167\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:18974/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 0e8e6480-8d7e-4400-b19b-ce46b5fb5b2f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat stepDefinitions.get_the_Due_Date_from_History.get_the_Due_Date_from_History(get_the_Due_Date_from_History.java:41)\r\n\tat stepDefinitions.StepDefinations.get_the_Due_Date_from_History(StepDefinations.java:961)\r\n\tat ✽.And Get the Due Date from History(login.feature:356)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.revoke_from_admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 34900,
  "status": "passed"
});
});