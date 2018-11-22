import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';

import {ParcialCreateComponent} from '../parcial/parcial-create/parcial-create.component';

const routes: Routes = [
  {path:'', component: ParcialCreateComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})

  ],
  declarations: [],
    exports: [RouterModule]

})
export class AppRoutingModule { }