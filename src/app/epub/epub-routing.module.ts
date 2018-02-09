import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { EpubComponent } from './epub.component';

const routes: Routes = Route.withShell([
  { path: '', redirectTo: '/epub', pathMatch: 'full' },
  { path: 'epub', component: EpubComponent, data: { title: extract('Details') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class EpubRoutingModule { }
