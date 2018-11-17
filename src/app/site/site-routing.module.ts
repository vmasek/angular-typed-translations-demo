import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './site.component';

const siteRoutes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
      {path: 'home', loadChildren: './home/home.module#HomeModule'},
      {path: 'info', loadChildren: './info/info.module#InfoModule'},
      {path: '', pathMatch: 'full', redirectTo: 'home'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(siteRoutes)],
  exports: [RouterModule],
})
export class SiteRoutingModule {}
