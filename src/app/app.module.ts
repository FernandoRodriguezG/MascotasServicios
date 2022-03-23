import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListPetsComponent } from './list-pets/list-pets.component';
import { CapturePetsComponent } from './capture-pets/capture-pets.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPetsComponent,
    CapturePetsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
