import { NgModule } from '@angular/core';
import { cs } from '../i18n/cs.translation';
import { TRANSLATION } from '../i18n/utils';

import { SiteModule } from './site.module';

/* This module should hold only translate related stuff and import site module */

@NgModule({
  imports: [
    SiteModule,
  ],
  providers: [
    // providing the value of czech translation data
    {provide: TRANSLATION, useValue: cs},
  ],
})
export class SiteCsModule {}
