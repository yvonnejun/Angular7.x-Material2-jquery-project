import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-levelled-para',
  templateUrl: './levelled-para.component.html',
  styleUrls: ['./levelled-para.component.css']
})
export class LevelledParaComponent implements OnInit {

  private isshow = false;
  constructor() { }

  ngOnInit() {
  }
  showPara (evt:any) {
    this.isshow = true;
  }
}
