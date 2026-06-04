const { chromium } = require("playwright");
const { pathToFileURL } = require("node:url");

const htmlPath = "/Users/xin/Documents/figma/pilot_ui_assets/pilot-report-ui.html";
const outPath = "/Users/xin/Desktop/南航飞行员个人分析报告UI.png";

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 2380 }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
  await page.screenshot({ path: outPath, fullPage: true });
  await browser.close();
  console.log(outPath);
})();
