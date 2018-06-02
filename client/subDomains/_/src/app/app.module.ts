import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import { States } from "./uiRouter.states";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({states: States, useHash: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
