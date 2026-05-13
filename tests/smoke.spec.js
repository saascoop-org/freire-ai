import { expect, test } from "@playwright/test";

const landingUrl = process.env.LANDING_URL || "https://hackathonbrteam.github.io/FreireAI-Literacy-Companion-Pilot/";
const demoUrl = process.env.DEMO_URL || "https://freireai-literacy-companion-pilot.onrender.com/demo";
const runGemmaSmoke = process.env.RUN_GEMMA_SMOKE === "1";

const languages = {
  "pt-BR": {
    appName: "FreireAI Companheiro de Alfabetiza\u00e7\u00e3o",
    title: "FreireAI Companheiro de Alfabetiza\u00e7\u00e3o",
    pitch: "szbLGf-msP8",
    project: "BJlh8anWzs8",
    screenshots: ["1", "3", "5", "7", "9"].map((index) => `screenshot-PT-BR-${index}.png`)
  },
  en: {
    appName: "FreireAI Literacy Companion",
    title: "FreireAI Literacy Companion",
    pitch: "ExffAZGN1IU",
    project: "8K2AAatNFN4",
    screenshots: ["1", "3", "5", "7", "9"].map((index) => `screenshot-EN-${index}.png`)
  },
  es: {
    appName: "FreireAI Compa\u00f1ero de Alfabetizaci\u00f3n",
    title: "FreireAI Compa\u00f1ero de Alfabetizaci\u00f3n",
    pitch: "JbOS4mjqnYE",
    project: "nR82GBn8dS0",
    screenshots: ["1", "3", "5", "7", "9"].map((index) => `screenshot-ES-${index}.png`)
  }
};

test.describe("landing smoke", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(landingUrl);
    await page.evaluate(() => localStorage.removeItem("freireai-landing-language"));
  });

  for (const [language, expected] of Object.entries(languages)) {
    test(`landing localizes name, videos, screenshots for ${language}`, async ({ page }) => {
      await page.goto(landingUrl);
      await page.locator("#landing-language").selectOption(language);

      await expect(page.locator("#hero-title")).toHaveText(expected.title);
      await expect(page.locator("[data-i18n='brandName']")).toHaveText(expected.appName);
      await expect(page).toHaveTitle(expected.title);

      await expect(page.locator(".demo-link").first()).toHaveAttribute("href", /freireai-literacy-companion-pilot\.onrender\.com\/demo/);
      await expect(page.locator("#pitch-video-link")).toHaveAttribute("href", new RegExp(expected.pitch));
      await expect(page.locator("#project-video-link")).toHaveAttribute("href", new RegExp(expected.project));

      const screenshotLocators = [
        page.locator("#screen-map-img"),
        page.locator("#screen-codify-img"),
        page.locator("#screen-question-img"),
        page.locator("#screen-listening-img"),
        page.locator("#screen-circle-img")
      ];

      for (const [index, locator] of screenshotLocators.entries()) {
        await expect(locator).toHaveAttribute("src", new RegExp(expected.screenshots[index]));
      }
    });
  }
});

test.describe("demo smoke", () => {
  test("demo completes five-step local workflow and exports Markdown", async ({ page }) => {
    await page.goto(demoUrl);
    await page.locator("#idioma").selectOption("en");

    await expect(page.locator("#mapa-title")).toHaveText("Listen before proposing");
    await page.locator("#modo-ia").selectOption("local");
    await page.locator("#analisar").click();
    await expect(page.locator("#palavras .chip").first()).toBeVisible();

    await page.locator("[data-view='codifica']").click();
    await expect(page.locator("#codifica-title")).toHaveText(/Turn a theme/);
    await page.locator("#gerar-codificacao").click();
    await expect(page.locator("#codificacao-texto")).not.toBeEmpty();

    await page.locator("[data-view='pergunta']").click();
    await expect(page.locator("#pergunta-title")).toHaveText("Answer by asking better");
    await page.locator("#responder").click();
    await expect(page.locator("#resposta-estudante")).not.toBeEmpty();
    await expect(page.locator("#nota-educador")).not.toBeEmpty();

    await page.locator("[data-view='escuta']").click();
    await expect(page.locator("#escuta-title")).toHaveText("Evidence for lesson planning");
    await expect(page.locator("#sintese-escuta")).not.toBeEmpty();

    await page.locator("[data-view='circulo']").click();
    await expect(page.locator("#circulo-title")).toHaveText("Learn in communion");
    await expect(page.locator("#prompt-circulo")).not.toBeEmpty();

    const downloadPromise = page.waitForEvent("download");
    await page.locator("#exportar").click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toMatch(/freireai-.*\.md$/);
  });

  test("demo exposes Gemma mode and optionally validates API response", async ({ page }) => {
    await page.goto(demoUrl);
    await page.locator("#idioma").selectOption("en");
    await page.locator("#modo-ia").selectOption("gemma");
    await expect(page.locator("#status-ia")).toContainText(/Gemma|API|configured|ready/i);

    if (!runGemmaSmoke) {
      test.info().annotations.push({
        type: "note",
        description: "Set RUN_GEMMA_SMOKE=1 to validate a live Gemma API generation."
      });
      return;
    }

    await page.locator("#analisar").click();
    await expect(page.locator("#status-analise")).toContainText(/updated|fallback|error|provider/i);
    await expect(page.locator("#palavras .chip").first()).toBeVisible();
  });
});
