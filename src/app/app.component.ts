import { Component, ViewChild, Renderer2, ViewContainerRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { testService } from './service/api.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [testService]
})
export class AppComponent {

  @ViewChild('main') main
 
  // public isDown = false;
  // public disX; // 记录鼠标点击事件的位置 X
  // public disY; // 记录鼠标点击事件的位置 Y

  constructor(
    private http:HttpClient,
    private test:testService, // 这个test就代表了api.service.ts这个文件了
    private render:Renderer2,
    private resolver:ComponentFactoryResolver
  ) {

  }
  ngOnInit () {
    this.test.getData().subscribe(
      data => {
        console.log(data);
      }
    );
    // this.$http.get("https://api.example.com/api/list")
    //   .subscribe(res=>{ 
    //     this.anyList = res 
    //   })
  }
  ngAfterViewInit (el) {
    console.log(el);
    console.log('DOM更新后的调用ngAfterViewInit');
  }
  
}