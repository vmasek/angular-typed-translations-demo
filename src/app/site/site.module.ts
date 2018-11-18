import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';

/**
 * Should contain imports and providers for stuff that is needed for
 * every internationalized side module as it is imported in them
 */
@NgModule({
  imports: [
    CommonModule,

    SiteRoutingModule,
  ],
  exports: [
    CommonModule,
  ],
  declarations: [SiteComponent],
})
export class SiteModule {}
