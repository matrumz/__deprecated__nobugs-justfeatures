import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { FlexLayoutModule } from '@angular/flex-layout';

import { States } from "./uiRouter.states";

import { AppComponent } from './app.component';
import { WheelnavComponent } from './samples/menus/radial/wheelnav/wheelnav.component';
import { CircularMenuComponent } from './samples/menus/radial/circular-menu/circular-menu.component';
import { Ng2FanMenuComponent } from './samples/menus/radial/ng2-fan-menu/ng2-fan-menu.component';
import { OMenuComponent } from './samples/menus/radial/o-menu/o-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    WheelnavComponent,
    CircularMenuComponent,
    Ng2FanMenuComponent,
    OMenuComponent
  ],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({states: States, useHash: false}),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
