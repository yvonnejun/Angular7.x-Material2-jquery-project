import { Component } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.css']
})
export class HeadComponent {
  private title = 'IETM管理系统';
  private isshowtitlesup = false;
  constructor() { }

  ngOnInit() {
  }
  showTitleSup (evt:any) {
    this.isshowtitlesup = true;
  }
}