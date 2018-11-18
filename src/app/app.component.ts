import { Component } from '@angular/core';

/**
 * App component is not internationalised because all i18n data are provided in specific site modules,
 * that means it is only used for bootstrapping of the application.
 */
@Component({
  selector: 'app-root',
  template: `
    <h1>Angular typed translations demo</h1>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
