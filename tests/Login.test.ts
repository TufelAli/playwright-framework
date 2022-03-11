import test from '../lib/BaseTest';

test(`Login to Salesforce.`, async ({ loginPage }) => {
    await loginPage.navigateToURL();
    await loginPage.loginToApplication();
});