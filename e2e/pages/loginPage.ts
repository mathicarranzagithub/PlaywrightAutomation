// loginPage.ts
import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get usernameInput() {
    return this.page.locator('[data-test=username]');
  }

  get passwordInput() {
    return this.page.locator('[data-test=password]');
  }

  get loginButton() {
    return this.page.locator('.btn_action');
  }

  get loginErrorMessage() {
    return this.page.locator('[data-test=error]'); // .textContent() if we want to extract the text
  }

  get forgotPasswordLink() {
    return this.page.locator('a[data-test=forgot-password-link]');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
