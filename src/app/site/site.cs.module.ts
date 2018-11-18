import { NgModule } from '@angular/core';
import { cs } from '../i18n/cs.translation';
import { TRANSLATION } from '../i18n/utils';

import { SiteModule } from './site.module';

/**
 * Should hold only internationalisation related stuff like translations
 *
 * Another good examples of what should be here are locales for MomentJS, Timezones
 *
 * Site module should be imported here
 */
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
