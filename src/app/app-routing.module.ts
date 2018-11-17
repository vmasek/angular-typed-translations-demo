import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteLanguage } from './i18n/utils';

const routes: Routes = [
  {path: WebsiteLanguage.English, loadChildren: './site/site.en.module#SiteEnModule'},
  {path: WebsiteLanguage.Czech, loadChildren: './site/site.cs.module#SiteCsModule'},

  {path: '**', redirectTo: WebsiteLanguage.English},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
