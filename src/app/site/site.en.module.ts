import { NgModule } from '@angular/core';
import { en } from '../i18n/en.translation';
import { TRANSLATION } from '../i18n/utils';

import { SiteModule } from './site.module';


/* This module should hold only translate related stuff and import site module */

@NgModule({
  imports: [
    SiteModule,
  ],
  providers: [
    // providing the value of english translation data
    {provide: TRANSLATION, useValue: en},
  ],
})
export class SiteEnModule {}
