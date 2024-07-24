// loginPage.ts
import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get emailInput() {
    return this.page.locator('input[data-test=email]');
  }

  get passwordInput() {
    return this.page.locator('input[data-test=password]');
  }

  get loginButton() {
    return this.page.locator('input[data-test=login-submit]');
  }

  get registerLink() {
    return this.page.locator('a[data-test=register-link]');
  }

  get forgotPasswordLink() {
    return this.page.locator('a[data-test=forgot-password-link]');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
