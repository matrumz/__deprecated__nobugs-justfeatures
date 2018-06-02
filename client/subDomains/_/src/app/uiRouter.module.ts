import { NgModule } from "@angular/core";
import { AppComponent} from "./app.component"
import { Page1Component } from "./test/page1/page1.component";
import * as uirouter from "@uirouter/angular";

export let States: uirouter.Ng2StateDeclaration[] =  [
    {
        name: "app",
        url: "/",
        component: AppComponent
    },
    {
        name: "page1",
        url: "/test",
        component: Page1Component
    }
]
