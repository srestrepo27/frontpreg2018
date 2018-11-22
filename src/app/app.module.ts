import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import {ParcialModule} from './parcial/parcial.module'; 

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule, ParcialModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
