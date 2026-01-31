**IT23819610 -ITPM Assignment 01 (IT3040)** 

This assignment evaluates a real-world web-based language transliteration system using automated testing with Playwright. The objective is to verify the accuracy, robustness, and UI behavior of the application when converting Singlish to Sinhala.

The test suite includes positive functional tests, negative functional tests, UI tests,covering different sentence structures, input lengths, mixed-language inputs, and formatting variations. All test cases were automated using Playwright and executed in a structured manner aligned with IT3040 – ITPM module requirements.

**Install Dependencies**
npm install
npx playwright install

**Run Test Suites (Headed Mode)**
# Negative Functional Tests
npx playwright test tests/negative-spec --headed

# UI Tests
npx playwright test tests/ui-spec --headed

# Positive Functional Tests
npx playwright test tests/positive-spec --headed

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

**Viewing the HTML Test Report**
After test execution, view the Playwright HTML report using:
   npx playwright show-report
   
Alternatively, open the report manually:
   playwright-report/index.html

**Test Structure**
- tests/positive.spec.js – Positive functional and UI test cases
- tests/negative.spec.js – Negative functional and UI test cases
- playwright.config.js – Playwright configuration file


