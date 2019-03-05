import { Component } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.css']
})
export class HeadComponent {
    private title = 'IETM管理系统';
}