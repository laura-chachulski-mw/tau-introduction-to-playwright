import { test, expect } from '@playwright/test';

//AAA Pattern

// [Arrange]
// [Act]
// [Assert]

const password = process.env.PASSWORD;

test.beforeAll(async ({ playwright }) => {
    test.skip(
      !!process.env.PROD,
      'Test intentionally skipped in production due to data dependency.'
    );
    // start a server
    // create a db connection
    // reuse a sign in state
});


// Example beforeAll
/*
test.beforeAll(async ({ playwright }) => {
    test.skip(
      !!process.env.PROD,
      'Test intentionally skipped in production due to data dependency.'
    );

    // Example: Start a server
    server = await startServer();

    // Example: Create a db connection
    dbConnection = await createDbConnection();

    // Example: Reuse a sign in state
    const context = await playwright.request.newContext();
    await context.post('/login', {
        data: {
            username: 'testuser',
            password: 'password123'
        }
    });
    const storageState = await context.storageState();
    browserContext = await playwright.chromium.launchPersistentContext('', { storageState });
});
*/
  
test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    // open a URL
    // clean up the DB
    // create a page object
    // dismiss a modal
    // load params
});

// Example beforeEach

/*const { test } = require('@playwright/test');

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);

  // Open a URL
  await page.goto('https://example.com');

  // Clean up the DB
  await page.evaluate(() => {
    return fetch('https://example.com/api/cleanup', { method: 'POST' });
  });

  // Create a page object
  const loginPage = new LoginPage(page);

  // Dismiss a modal
  if (await page.isVisible('div.modal')) {
    await page.click('button.close-modal');
  }

  // Load params
  const testParams = await loadTestParams();
});*/

test.afterAll(async ({ page }, testInfo) => {
    console.log('Test file completed.');
    // close a DB connection
});

test.afterEach( async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

    if (testInfo.status !== testInfo.expectedStatus)
        console.log(`Did not run as expected, ended up at ${page.url()}`);
    // clean up all the data we created for this test through API calls
});

// test.describe('Test Case', () => {
// test.describe.only('Test Case', () => {
test.describe.skip('Test Case', () => {
    test('Test Scenario One', async ({ page }) => {
        await test.step('Step One', async () => {
            // ...
        });

        await test.step('Step Two', async () => {
            // ...
        });

        // ...
    });
  
    test('Test Scenario Two', async ({ page }) => {
        // Arrange
        // Act
        // Assert
    });
/**
    test.only('Test Scenario Three', async ({ page }) => {
        // Arrange
        // Act
        // Assert
    });
 */  
/**
    test.skip('Test Scenario Four', async ({ page }) => {
        // Arrange
        // Act
        // Assert
    });
 */


// Login Test Example

/*const { test, expect } = require('@playwright/test');

test('User can log in successfully', async ({ page }) => {
  // Arrange: Set up the initial state
  const loginUrl = 'https://example.com/login';
  const dashboardUrl = 'https://example.com/dashboard';
  const username = 'testuser';
  const password = 'password123';
  
  // Navigate to the login page
  await page.goto(loginUrl);

  // Act: Perform the action that's being tested
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);
  await page.click('button[type="submit"]');

  // Assert: Verify the expected outcome
  await page.waitForNavigation();
  expect(await page.url()).toBe(dashboardUrl);

  // Additional assertions (optional)
  await expect(page.locator('h1')).toHaveText('Welcome to your dashboard, testuser!');
});*/

});
  