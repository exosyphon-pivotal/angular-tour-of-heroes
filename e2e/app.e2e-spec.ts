import { AngularTourOfHeroesPage } from './app.po';
import { HeroDetailsPage } from "./hero-details.po";
import { element, by } from "protractor";

describe('angular-tour-of-heroes App', () => {
  let page: AngularTourOfHeroesPage;
  let heroDetailsPage: HeroDetailsPage;

  beforeEach(() => {
    page = new AngularTourOfHeroesPage();
    heroDetailsPage = new HeroDetailsPage();
  });

  it('should display Heroes title', () => {
    page.navigateTo();
    expect(page.getH1Text()).toEqual('Tour of Heroes');
  });

  it('should display Top Heroes', () => {
    page.navigateTo();
    expect(page.getTopHeroesText()).toContain('Top Heroes');
    expect(page.getTopHeroesText()).toContain('Mr. Nice');
    expect(page.getTopHeroesText()).toContain('Narco');
    expect(page.getTopHeroesText()).toContain('Mr. Nice');
    expect(page.getTopHeroesText()).toContain('Celeritas');
  });

  it('should navigate to details page for a hero', () => {
    page.navigateTo();
    page.getHeroLink('Narco').click();
    expect(heroDetailsPage.getHeaderText()).toEqual('Narco details!');
  });

  it('should allow searching for hero details', () => {
    page.navigateTo();
    const searchBox = page.getSearchBox();
    searchBox.sendKeys('Celeritas');
    element(by.css('.search-result')).click();
    expect(heroDetailsPage.getHeaderText()).toEqual('Celeritas details!');
  });
});
