import { Page } from '@playwright/test';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get signInLink() {
    return this.page.locator('[data-test="nav-sign-in"]');
  }

  async clickSignInLink() {
    await this.signInLink.click();
  }
}
