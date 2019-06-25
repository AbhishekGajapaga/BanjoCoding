import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapviewComponent } from './mapview/mapview.component';
import { AddnewplaceComponent } from './addnewplace/addnewplace.component';
import { UpdateplaceComponent } from './updateplace/updateplace.component';

const routes: Routes = [
  {path: 'home', component: MapviewComponent},
  {path: 'addnew', component: AddnewplaceComponent},
  {path: 'update/:id', component: UpdateplaceComponent},
  {path: '', redirectTo: '/home',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
