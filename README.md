# Playwright Automation Project

This project automates 36 test cases for Singlish to Sinhala/Tamil text conversion.

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

1.  Clone the repository or download the source code.
2.  Open a terminal in the project root.
3.  Install dependencies:

```bash
npm install
```

## Configuration

1.  Open `tests/automation.spec.js`.
2.  Update `TARGET_URL` with the actual URL of the application to test.
3.  Open `tests/test_data.json`.
4.  Update the `expected_output` fields with the correct Sinhala/Tamil text.
5.  Update the selectors in `tests/automation.spec.js` (`inputLocator`, `outputLocator`) to match the HTML elements of the target website.

## Running Tests

To run all tests:

```bash
npx playwright test
```

To run a specific test file:

```bash
npx playwright test tests/automation.spec.js
```

To view the report:

```bash
npx playwright show-report
```
