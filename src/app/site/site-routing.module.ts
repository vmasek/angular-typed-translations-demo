import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './site.component';

const siteRoutes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(siteRoutes)],
  exports: [RouterModule],
})
export class SiteRoutingModule {}
