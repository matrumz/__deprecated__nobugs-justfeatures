import { NgModule } from "@angular/core";
import { AppComponent} from "./app.component"
import { Ng2StateDeclaration } from "@uirouter/angular";
import { CircularMenuComponent } from "./samples/menus/radial/circular-menu/circular-menu.component";
import { Ng2FanMenuComponent } from "./samples/menus/radial/ng2-fan-menu/ng2-fan-menu.component";
import { OMenuComponent } from "./samples/menus/radial/o-menu/o-menu.component";
import { WheelnavComponent } from "./samples/menus/radial/wheelnav/wheelnav.component";



export let States: Ng2StateDeclaration[] =  [
    {
        name: "app",
        url: "/",
        component: AppComponent
    },
    {
        name: "circularMenu",
        url: "/samplemenu/circularmenu",
        component: CircularMenuComponent
    },
    {
        name: "ng2FanMenu",
        url: "/samplemenu/fanmenu",
        component: Ng2FanMenuComponent
    },
    {
        name: "oMenu",
        url: "/samplemenu/omenu",
        component: OMenuComponent
    },
    {
        name: "wheelnav",
        url: "/samplemenu/wheelnav",
        component: WheelnavComponent
    }
]
