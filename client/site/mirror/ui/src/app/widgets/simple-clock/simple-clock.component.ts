import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-simple-clock',
    templateUrl: './simple-clock.component.html',
    styleUrls: ['./simple-clock.component.less']
})
export class SimpleClockComponent implements OnInit
{

    constructor()
    {
        this.now = new Date();
        this.tickInterval = 1000;
    }

    ngOnInit()
    {
        setInterval(() => { this.tick() }, this.tickInterval);
    }

    private tick(): void
    {
        this.now = new Date();
    }

    private now: Date;
    private readonly tickInterval: number;

}
