import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * Only necessary "globals" and i18n routing of site are imported here
 */
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // internationalised routing import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
