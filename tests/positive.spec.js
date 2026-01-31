import { test, expect } from '@playwright/test';

test.describe('Positive Functional Tests – Swift Translator', () => {

  async function getTranslationOutput(page) {
    await page.waitForFunction(() => {
      const candidates = Array.from(document.querySelectorAll('div, span, p'));
      return candidates.some(c => c.innerText.trim().length > 0);
    }, { timeout: 120000 });

    const allElements = page.locator('div, span, p');
    const count = await allElements.count();
    for (let i = 0; i < count; i++) {
      const el = allElements.nth(i);
      const text = (await el.innerText()).trim();
      if (text.length > 0) return el;
    }

    throw new Error('No translation output found!');
    
  }

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'load' });
    const inputBox = page.locator('textarea, input[type="text"]');
    await inputBox.first().waitFor({ state: 'visible', timeout: 20000 });
  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(5000);
  });

  // ---------------- POSITIVE TESTS ----------------

  test('Pos_Fun_001 – Convert simple daily activity sentence', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'ammaa bath kanavaa');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('අම්මා බත් කනවා');
  });

  test('Pos_Fun_002 – Convert compound sentence with condition', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'akkaa pansal yanavaa, haebeyi  ammath aavama thamayi yannee');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('අක්කා පන්සල් යනවා, හැබෙයි අම්මත් ආවම තමයි යන්නේ');
  });

  test('Pos_Fun_003 – Convert complex sentence with cause', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'mata enna parakku vunee accident ekak nisaa');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('මට එන්න පරක්කු වුනේ accident එකක් නිසා');
  });

  test('Pos_Fun_004 – Convert interrogative future-related sentence', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'oyaa kavadhadha aayemath rata yanna hithaagena innee');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('ඔයා කවදද ආයෙමත් රට යන්න හිතාගෙන ඉන්නේ');
  });

  test('Pos_Fun_005 – Convert imperative command sentence', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'issaraha gate eka Lagata yanna.');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('ඉස්සරහ gate එක ළගට යන්න.');
  });

  test('Pos_Fun_006 – Convert instructional command sentence', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'oyaa ee kotasa hariyata paadam karalaa enna');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('ඔයා ඒ කොටස හරියට පාඩම් කරලා එන්න');
  });

  test('Pos_UI_008 – Convert greeting phrase', async ({ page }) => {
    await page.fill('textarea, input[type="text"]', 'suBha sanDhYaavak');
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('සුභ සන්ධ්‍යාවක්');
  });

  test('Pos_Fun_009 – Convert simple request sentence', async ({ page }) => {
    await page.fill(
      'textarea, input[type="text"]',
      'magee mee liyuma eyaata dhenna'
    );
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('මගේ මේ ලියුම එයාට දෙන්න');
  });

    test('Pos_Fun_010 – Convert positive assurance sentence', async ({ page }) => {
    await page.fill(
      'textarea, input[type="text"]',
      'eekata kamak naehae eeka karanna mata puLuvan'
    );
    const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('ඒකට කමක් නැහැ ඒක කරන්න මට පුළුවන්');
  });

    test('Pos_Fun_011 – Convert polite request question', async ({ page }) => {
    await page.fill(
      'textarea, input[type="text"]',
      'karuNaakaralaa mata meeka karanna udhavvak karanna puLuvandha?'
    );const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('කරුණාකරලා මට මේක කරන්න උදව්වක් කරන්න පුළුවන්ද?');
  });

    test('Pos_Fun_013 – Convert future tense meeting arrangement sentence', async ({ page }) => {
    await page.fill(
      'textarea, input[type="text"]',
      'api heta class ekeedhi hambavemu'
    );const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('අපි හෙට class එකේදි හම්බවෙමු');
  });

    test('Pos_Fun_014 – Convert informal request with future intent', async ({ page }) => {
    await page.fill(
      'textarea, input[type="text"]',
      'poddak inna mama gihin ennam.'
    );const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('පොඩ්ඩක් ඉන්න මම ගිහින් එන්නම්.');
  });
  
    test('Pos_Fun_015 – Convert sentence with place reference', async ({ page }) => {
    await page.fill(
      'textarea, input[type="text"]',
      'ammaa naendhalage gedhara yanavaa.'
    );const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('අම්මා නැන්දලගෙ ගෙදර යනවා.');
  });

      test('Pos_Fun_018 – Convert past tense sentence', async ({ page }) => {
    await page.fill(
      'textarea, input[type="text"]',
      'thaaththaa iiyee vaedata giyaa.'
    );const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('තාත්තා ඊයේ වැඩට ගියා.');
  });

      test('Pos_Fun_019 – Convert past tense sentence with time reference', async ({ page }) => {
    await page.fill(
      'textarea, input[type="text"]',
      'ayiyaa dhaen paarata giyaa.'
    );const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('අයියා දැන් පාරට ගියා.');
  });

      test('Pos_Fun_020 – Convert future tense religious activity sentence', async ({ page }) => {
    await page.fill(
      'textarea, input[type="text"]',
      'api iiLaGA pooyata sil gannavaa.'
    );const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('අපි ඊළඟ පෝයට සිල් ගන්නවා.');
  });

    test('Pos_Fun_022 – Convert sentence with place reference', async ({ page }) => {
    await page.fill(
      'textarea, input[type="text"]',
      'loku ammaa vandhanaave giyaa.'
    );const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('ලොකු අම්මා වන්දනාවෙ ගියා.');
  });

    test('Pos_Fun_023 – Convert plural pronoun question', async ({ page }) => {
    await page.fill(
      'textarea, input[type="text"]',
      'oyaala apee gamee enavadha?'
    );const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('ඔයාල අපේ ගමේ එනවද?');
  });

    test('Pos_Fun_024 – Convert polite request question', async ({ page }) => {
    await page.fill(
      'textarea, input[type="text"]',
      'karuNaakaralaa potha mata dhenavadha?'
    );const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('කරුණාකරලා පොත මට දෙනවද?');
  });

    test('Pos_Fun_025 – Convert mixed Singlish and English request', async ({ page }) => {
    await page.fill(
      'textarea, input[type="text"]',
      'mata oyaage WiFi password eka dhenna puLuvandha?'
    );const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('මට ඔයාගෙ WiFi password එක දෙන්න පුළුවන්ද?');
  });

    test('Pos_Fun_027 – Convert mixed-language polite request', async ({ page }) => {
    await page.fill(
      'textarea, input[type="text"]',
      'oyaage USB pen eka mata dhenna puLuvandha?'
    );const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('ඔයාගෙ USB pen එක මට දෙන්න පුළුවන්ද?');
  });

    test('Pos_Fun_028 – Convert greeting with punctuation', async ({ page }) => {
    await page.fill(
      'textarea, input[type="text"]',
      'obata suBha udhaeesanak veevaa!'
    );const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('ඔබට සුභ උදෑසනක් වේවා!');
  });

    test('Pos_Fun_031 – Convert sentence with date format', async ({ page }) => {
    await page.fill(
      'textarea, input[type="text"]',
      '12/02/2026 dhavasata mata karanna assessment ekak thiyenavaa.'
    );const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('12/02/2026 දවසට මට කරන්න assessment එකක් තියෙනවා.');
  });

      test('Pos_Fun_032 – Convert sentence with unit of measurement', async ({ page }) => {
    await page.fill(
      'textarea, input[type="text"]',
      'mama dhavasata 1000ml vathura bonavaa.'
    );const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('මම දවසට 1000ml වතුර බොනවා.');
  });

      test('Pos_Fun_033 – Convert daily need expression', async ({ page }) => {
    await page.fill(
      'textarea, input[type="text"]',
      'mata havasata coffee ekak bonna oonee.'
    );const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('මට හවසට coffee එකක් බොන්න ඕනේ.');
  });

      test('Pos_Fun_034 – Convert conditional compound sentence', async ({ page }) => {
    await page.fill(
      'textarea, input[type="text"]',
      'heta kamal office yanavanam , mee parcel eka jayanita dhenna.'
    );const outputBox = await getTranslationOutput(page);
    await expect(outputBox).toContainText('හෙට කමල් office යනවනම් , මේ parcel එක ජයනිට දෙන්න.');
  });


});
