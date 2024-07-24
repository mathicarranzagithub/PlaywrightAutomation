// login.spec.ts
import { test, expect } from '@playwright/test';
import { PageManager } from '../pages/pageManager';
import { UserInfo } from '../test-data/users';

test.describe('Login Page Tests', () => {
  let pm: PageManager;

  test.beforeEach(async ({ page }) => {
    await page.goto('/auth/login');
    pm = new PageManager(page);
  });

  // test('should allow user to login with valid credentials', async ({ page }) => {
  //   await pm.loginPageInstance().login(UserInfo.validUser.email, UserInfo.validUser.password);
  //   await page.waitForNavigation();
  //   expect(page.url()).toContain('account');
  // });

  test('should allow user to login with invalid credentials', async () => {
    await pm.loginPageInstance().login(UserInfo.validUser.email, 'invalid');
  });
});
