import { browser, element, by } from 'protractor';

export class AngularTourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getH1Text() {
    return element(by.css('app-root h1')).getText();
  }

  getTopHeroesText() {
    return element(by.css('my-dashboard')).getText();
  }

  getHeroLink(name: string) {
    return element(by.cssContainingText('.hero', name));
  }

  getSearchBox() {
    return element(by.id('search-box'));
  }
}
