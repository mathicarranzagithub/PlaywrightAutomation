// login.spec.ts
import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';
import { UserInfo } from '../test-data/users';
import { ErrorMessages } from '../test-data/errorMessages';
import { LoginPage } from '../pages/loginPage';

test.describe('Login Page Tests', () => {
  let pm: PageManager;

  test.beforeEach(async ({ page }) => {
    await page.goto('/v1/index.html');
    pm = new PageManager(page);
  });

  test('Login with valid credentials', async ({ page }) => {
    await pm.loginPageInstance().login(UserInfo.validUser.username, UserInfo.validUser.password);
    expect(page.url()).toContain('inventory');
  });

  test('Login with invalid username', async () => {
    await pm.loginPageInstance().login(UserInfo.invalidUser.username, UserInfo.invalidUser.password);
    expect(ErrorMessages.LoginErrorMessage).toBe(ErrorMessages.LoginErrorMessage);
  });
});
