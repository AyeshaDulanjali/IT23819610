import { test, expect } from '@playwright/test';

test('Pos_UI_0001 – Display warning when Sinhala characters are entered', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Listen for alert dialog
  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toContain(
      'Sinhala characters are not allowed in Singlish input'
    );
    await dialog.accept(); // Click OK
  });

  // Singlish input field
  const inputField = page.getByRole('textbox', {
    name: /input your singlish text here/i
  });

  await expect(inputField).toBeVisible();

  // Enter Sinhala text
  await inputField.fill('Bank එකට USD 500 වැටිලා තිබුනා.');
});

