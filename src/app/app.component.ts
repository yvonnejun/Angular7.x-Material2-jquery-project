import { Component, ViewChild, Renderer2, ViewContainerRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { AnimateService, heroService } from './service/api.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AnimateService, heroService]
})
export class AppComponent {

  @ViewChild('main') main

  constructor(
    private animate:AnimateService, 
    private hero:heroService, 
    private render:Renderer2,
    private resolver:ComponentFactoryResolver
  ) {

  }
  ngOnInit () {

  }
  ngAfterViewInit (el) {
    console.log('DOM更新后的调用ngAfterViewInit');
  }
  
}