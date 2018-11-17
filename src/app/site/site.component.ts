import { Component, Inject } from '@angular/core';
import { Translation, TRANSLATION, WebsiteLanguage } from '../i18n/utils';

@Component({
  selector: 'app-site',
  template: `
    <h2>{{lang.language}}</h2>
    <ol>
      <li *ngFor="let translation of translations">
        <a [routerLink]="['/', translation[1]]">{{translation[0]}} ({{translation[1]}})</a>
      </li>
    </ol>
    <ul>
      <li>
        <a routerLink="home">home</a>
      </li>
      <li>
        <a routerLink="info">info</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
    <h5>{{lang.langsSupported(translations.length)}}</h5>
  `,
})
export class SiteComponent {
  translations = Object.entries(WebsiteLanguage);

  constructor(@Inject(TRANSLATION) public readonly lang: Translation) {
    console.log('current language is', lang.language);
  }
}
