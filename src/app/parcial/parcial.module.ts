import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParcialService } from './parcial.service';
import { ParcialCreateComponent } from './parcial-create/parcial-create.component';
import {FormsModule} from '@angular/forms';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
   // NgbModule,
   FormsModule
  ],
  declarations: [ParcialCreateComponent],
  providers: [ParcialService]
})
export class ParcialModule { }