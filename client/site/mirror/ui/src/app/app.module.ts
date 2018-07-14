import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

import { uiRouterConfig } from "./uiRouter.config";

import { AppComponent } from './app.component';
import { PaneComponent } from './pane/pane.component';
import { StateNotFoundComponent } from './state-not-found/state-not-found.component';
import { SimpleClockComponent } from './widgets/simple-clock/simple-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    PaneComponent,
    StateNotFoundComponent,
    SimpleClockComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot(uiRouterConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
