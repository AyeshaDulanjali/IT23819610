import { test, expect } from '@playwright/test';

test.describe('Negative Functional Tests – Swift Translator', () => {

  // Helper function to get the first element with non-empty text after translation
  async function getTranslationOutput(page) {
    // Wait until at least one div/span/p has non-empty text
    await page.waitForFunction(() => {
      const candidates = Array.from(document.querySelectorAll('div, span, p'));
      return candidates.some(c => c.innerText.trim().length > 0);
    }, { timeout: 120000 });

    // Return the first element with visible text
    const allElements = page.locator('div, span, p');
    const count = await allElements.count();
    for (let i = 0; i < count; i++) {
      const el = allElements.nth(i);
      const text = (await el.innerText()).trim();
      if (text.length > 0) return el;
    }

    throw new Error('No translation output found!');
  }

  // Before each test: open site and wait for input box
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'load' });

    const inputBox = page.locator('textarea, input[type="text"]');
    await inputBox.first().waitFor({ state: 'visible', timeout: 20000 });
  });

  // After each test: pause so you can see the UI
  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(15000); // 3 seconds pause
  });

  test('Neg_Fun_007 – Convert negative sentences form', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'oyaa pirisidhu karanna hariyata dhanne naehae');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).not.toContainText('ඔයා පිරිසිදු කරන්න හරියට දන්නෙ නැහැ');
  });

  test('Neg_Fun_012 – Convert informal imperative sentence', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'eeka mehema karapan');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).not.toContainText('ඒක මෙහෙම කරපන්');
  });

  test('Neg_Fun_016 – Handle joined words without spacing', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'ammaabathkanavaa.');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).not.toContainText('අම්මාබත්කනවා.');
  });

  test('Neg_UI_017 – Convert repeated word expression', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'poddak poddak');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).not.toContainText('පොඩ්ඩක් පොඩ්ඩක්');
  });

  test('Neg_Fun_021 – Convert negative command sentence', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'mata class ekata yanna kiyanna epaa.');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).not.toContainText('මට class එකට යන්න කියන්න එපා.');
  });

  test('Neg_UI_026 – Convert technical mixed-language question', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'Zoom meeting ekee link eka Whatsapp karanna puLuvandha?');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).not.toContainText('Zoom meeting එකේ link එක Whatsapp කරන්න පුළුවන්ද?');
  });

  test('Neg_UI_029 – Convert sentence with currency and numbers', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'Bank ekata USD 500 vaetilaa thibunaa.');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).not.toContainText('Bank එකට USD 500 වැටිලා තිබුනා');
  });

  test('Neg_UI_030 – Convert sentence with time format', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'mata campus ivara venne 4.30 PM');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).not.toContainText('මට campus ඉවර වෙන්නෙ 4.30 PM');
  });

  test('Neg_UI_035 – Convert long paragraph-style input', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'thorathuru thaakShana viShaya siyaLuma paasal vala naviina thaakShaNaya sahithava aKaNdava kriyaathmaka kiriimata aDhYaapana amaathYAQQshayee anumaethiya laebuNi.');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).not.toContainText('තොරතුරු තාක්ෂන විෂය සියළුම පාසල් වල නවීන තාක්ෂණය  සහිතව අඛණ්ඩව ක්‍රියාත්මක කිරීමට අධ්‍යාපන අමාත්‍යංශයේ අනුමැතිය ලැබුණි.');
  });

  test('Neg_Fun_036 – Handle slang with punctuation', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'siraavatama,mata beheth bonna amathaka venavaa.');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).not.toContainText('සිරාවටම,මට බෙහෙත් බොන්න අමතක වෙනවා.');
  });

});

