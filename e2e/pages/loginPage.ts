// loginPage.ts
import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get emailInput() {
    return this.page.locator('#email');
  }

  get passwordInput() {
    return this.page.locator('#password');
  }

  get loginButton() {
    return this.page.locator('.btnSubmit');
  }

  get loginErrorMessage() {
    return this.page.locator('[class="help-block"]'); // .textContent() if we want to extract the text
  }

  get forgotPasswordLink() {
    return this.page.locator('.ForgetPwd');
  }
  get registerAccountLink() {
    return this.page.locator('[data-test="register-link"]');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
