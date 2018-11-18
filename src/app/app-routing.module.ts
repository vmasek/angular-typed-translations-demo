import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteLanguage } from './i18n/utils';

/**
 * Specific i18n site routes prefixed by i18n variation
 */
const routes: Routes = [
  {path: WebsiteLanguage.English, loadChildren: './site/site.en.module#SiteEnModule'}, // lazy loading the English site module
  {path: WebsiteLanguage.Czech, loadChildren: './site/site.cs.module#SiteCsModule'},   // lazy loading the Czech site module

  {path: '**', redirectTo: WebsiteLanguage.English},  // redirecting to default route in case of any other prefix
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
