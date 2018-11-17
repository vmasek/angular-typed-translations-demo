import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';

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
