**Playwright Automation – Swift Translator**
Registration Number: IT23819610

**Project Overview**
This repository contains automated test cases developed using Playwright to test the Swift Translator web application.
Both Positive and Negative Functional/UI test cases are implemented based on the provided test case template.

**Technologies Used**
- Node.js
- Playwright
- JavaScript
- VS Code

**Prerequisites**
Before running the tests, ensure the following are installed:
- Node.js (v18 or above)
- npm (comes with Node.js)
- Git

**Installation Instructions**
1. Clone the repository:
   git clone https://github.com/AyeshaDulanjali/IT23819610.git

2. Navigate to the project directory:
   cd IT23819610

3. Install project dependencies:
   npm install

4. Install Playwright browsers:
   npx playwright install

**Running the Tests**
To execute all automated test cases:
   npx playwright test

To run tests in headed mode:
   npx playwright test --headed

**Viewing the HTML Test Report**
After test execution, view the Playwright HTML report using:
   npx playwright show-report
   
**Run And open it Swift Translator**
use this code - npx playwright test negative.spec.js --headed
                npx playwright test positive.spec.js --headed

Alternatively, open the report manually:
   playwright-report/index.html

**Test Structure**
- tests/positive.spec.js – Positive functional and UI test cases
- tests/negative.spec.js – Negative functional and UI test cases
- playwright.config.js – Playwright configuration file


