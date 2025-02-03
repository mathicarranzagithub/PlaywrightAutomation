import { Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from './homePage';

export class PageManager {
  private readonly page: Page;
  private readonly loginPage: LoginPage;
  private readonly homePage: HomePage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.homePage = new HomePage(this.page);
  }

  loginPageInstance() {
    return this.loginPage;
  }

  homePageInstance() {
    return this.homePage;
  }
}
