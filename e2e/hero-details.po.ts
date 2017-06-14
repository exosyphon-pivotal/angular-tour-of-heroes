import { by, element } from "protractor";

export class HeroDetailsPage {
  getHeaderText() {
    return element(by.css('h2')).getText();
  }
}
