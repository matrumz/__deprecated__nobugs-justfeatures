import * as uirouter from "@uirouter/angular";
import { AppComponent } from "./app.component";
import { PaneComponent } from "./pane/pane.component";
import { StateNotFoundComponent } from "./state-not-found/state-not-found.component";

export let uiRouterConfig: uirouter.RootModule = {
    useHash: false,
    otherwise: "/",
    states: [
        {
            name: "app",
            url: "/",
            component: AppComponent,
            redirectTo: "app.pane"
        },
        //#region Pane
        {
            name: "app.pane",
            url: "",
            component: PaneComponent
        },
        //#endregion
        {
            name: "app.404",
            url: "404",
            component: StateNotFoundComponent
        }
    ]
};
