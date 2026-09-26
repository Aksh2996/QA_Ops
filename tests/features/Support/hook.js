const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

console.log('===== HOOK FILE LOADED =====');

Before(async function () {
    console.log('===== BEFORE START =====');

    this.browser = await chromium.launch({
        headless: false
    });

    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    console.log('===== PAGE CREATED =====');
});

After(async function () {
    console.log('===== AFTER =====');

    if (this.browser) {
        await this.browser.close();
    }
});