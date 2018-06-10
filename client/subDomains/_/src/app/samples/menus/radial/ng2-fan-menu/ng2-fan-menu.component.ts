import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng2-fan-menu',
    templateUrl: './ng2-fan-menu.component.html',
    styleUrls: ['./ng2-fan-menu.component.less']
})
export class Ng2FanMenuComponent implements OnInit
{

    constructor() { }

    ngOnInit()
    {
    }

    public fanOptions = {
        spinable: true,
        buttonWidth: 40,
        defaultPosition: "topRight"
    };

    public fanWings = [
        {
            "title": "wing1"
        },
        {
            "title": "wing2"
        }
    ];

    public fanGutter = {
        top: 30
    };

    public fanStartAngles = {
        topRight: 90
    }

}
