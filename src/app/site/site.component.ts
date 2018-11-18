import { Component, Inject } from '@angular/core';
import { Translation, TRANSLATION, WebsiteLanguage } from '../i18n/utils';

/**
 * Site component can access the translations because site module is imported
 * in internationalised site module and translations are provided there.
 */
@Component({
  selector: 'app-site',
  template: `
    <!-- demonstration of usage in component template -->
    <h2>{{lang.language}}</h2>

    <!-- simple language change (could require to be a bit more complex in non demo app) -->
    <ol>
      <li *ngFor="let translation of translations">
        <a [routerLink]="['/', translation[1]]">{{translation[0]}} ({{translation[1]}})</a>
      </li>
    </ol>

    <!-- simple navigation links to switch between two "translated" views -->
    <ul>
      <li>
        <a routerLink="home">home</a>
      </li>
      <li>
        <a routerLink="info">info</a>
      </li>
    </ul>

    <router-outlet></router-outlet>

    <!-- example of using translation that is a function -->
    <h5>{{lang.langsSupported(translations.length)}}</h5>
  `,
})
export class SiteComponent {
  // this will extract tuple of translation key and name from enum
  translations = Object.entries(WebsiteLanguage);

  constructor(@Inject(TRANSLATION) public readonly lang: Translation) {
    // just a simple log to demonstrate usage in component class
    console.log('current language is', lang.language);
  }
}
