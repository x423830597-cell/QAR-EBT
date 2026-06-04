const { chromium } = require("playwright");
const { pathToFileURL } = require("node:url");

const htmlPath = "/Users/xin/Documents/figma/pilot_ui_assets/pilot-report-qar-ebt-two-blocks.html";
const outPath = "/Users/xin/Desktop/飞行员技术能力分析报告_QAR_EBT_UI.png";

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const page = await browser.newPage({ viewport: { width: 1000, height: 2200 }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
  await page.screenshot({ path: outPath, fullPage: true });
  await browser.close();
  console.log(outPath);
})();
