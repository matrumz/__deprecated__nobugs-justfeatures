import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '../../../../node_modules/@angular/common';

@Component({
    selector: 'app-dark-sky-weather',
    templateUrl: './dark-sky-weather.component.html',
    styleUrls: ['./dark-sky-weather.component.less']
})
export class DarkSkyWeatherComponent implements OnInit
{

    constructor(
        @Inject(DOCUMENT) private document: Document
    )
    {
        this.tickInterval = 1000 * 60 * 60;
    }

    ngOnInit()
    {
        this.darkSkyInit(this.document, 'script', 'weatherwidget-io-js');
        setInterval(
            () => { this.darkSkyInit(this.document, 'script', 'weatherwidget-io-js'); },
            this.tickInterval
        );
    }

    private darkSkyInit(d, s, id)
    {
        let js;
        let fjs = d.getElementsByTagName(s)[0];
        if (!d.getElementById(id)) {
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://weatherwidget.io/js/widget.min.js';
            fjs.parentNode.insertBefore(js, fjs);
        }
    }

    private readonly tickInterval: number;
}
