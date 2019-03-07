import { Component, OnInit, ViewChild, Renderer2, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // 获取段落组件
  @ViewChild('title') title
  @ViewChild('levelledpara') levelledpara

  showFiller:any = true;
  constructor(private render:Renderer2) { }

  ngOnInit() {
    
  }
  showTitle (evt:any) {
    this.title.showTitleSup();
  }
  showLevelledPara (evt:any) {
    this.levelledpara.showPara();
  }
}
