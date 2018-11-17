import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info.component';

const infoRoutes: Routes = [
  {
    path: '',
    component: InfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(infoRoutes)],
  exports: [RouterModule],
})
export class InfoRoutingModule {}
