import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarMenuComponent } from './car-menu/car-menu.component';
import { CarTableComponent } from './car-table/car-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CarMenuComponent,
    CarTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
