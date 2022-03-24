import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
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
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
