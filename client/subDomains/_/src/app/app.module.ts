import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { States } from "./uiRouter.module";

import { AppComponent } from './app.component';
import { Page1Component } from './test/page1/page1.component';
import { UIRouterModule } from '@uirouter/angular';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({states: States, useHash: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
