import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bio',
    templateUrl: './bio.component.html',
    styleUrls: ['./bio.component.less']
})
export class BioComponent implements OnInit
{

    constructor() { }

    ngOnInit()
    {
        this.bioPicPath = "../../../assets/female-silhouette-hi.png";
        this.aboutYou = "testing testing 123";
    }

    public bioPicPath: string;
    public aboutYou: string;

}
