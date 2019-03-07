import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  constructor(public el: ElementRef) { }
  
  public cloneElement;
  
  public isDown = false;

  public disX; // 记录鼠标点击事件的位置 X 离元素左边位置的间距值
  public disY; // 记录鼠标点击事件的位置 Y 离元素上边位置的间距值

  // 点击事件
  @HostListener('mousedown', ['$event']) onMousedown(event) {
    console.log(this.el);
    const elhost = this.el.nativeElement;
    const host = $(elhost);
    var self = this;
    this.cloneElement = host.clone(false);
    const cloneEle = this.cloneElement;
    cloneEle.empty();
    console.log(cloneEle);
    cloneEle.removeAttr('appdrag');
    cloneEle.attr('appDragCloneElement', '');
    // $(this.el.nativeElement).children().eq(0).clone(true).appendTo(cloneEle);
    $(this.el.nativeElement).children('.item-select').each(function(){
      $(this).clone(true).show().appendTo(self.cloneElement);
    });
    cloneEle.removeClass('element-style').addClass('clone-element-style');
    cloneEle.appendTo('body') // 不能添加到body区域，否则动态生成的元素不受angular指令约束和控制
    // cloneEle.appendTo('.example-container');
    cloneEle.css({
      position:'absolute',
      zIndex: 9,
      top: `${host.offset().top}px`,
      left: `29px`
    });
    this.isDown = true;
    this.disX = event.clientX - host.offset().left;
    this.disY = event.clientY - host.offset().top;
  }

  // 监听document移动事件事件
  @HostListener('document:mousemove', ['$event']) onMousemove(event) {
    // 判断该元素是否被点击了。
    if (this.isDown) {
      var offsetX = event.clientX - this.disX;
      var offsetY = event.clientY - this.disY;
      this.cloneElement.css({
        top: `${offsetY}px`,
        left: `${offsetX}px`,
      });
    }
  }

  // 监听document离开事件
  @HostListener('document:mouseup', ['$event']) onMouseup(event) {
    // 只用当元素移动过了，离开函数体才会触发。
    var self = this;
    console.log(self.cloneElement);
   
    if (this.isDown) {
      $('.clone-element-style').each(function () {
        var currentCloneElement = $(this);
        $(this).mousedown(function (event) {
          console.log($(this));
          //获取鼠标按下的时候左侧偏移量和上侧偏移量
          var disX = event.clientX - currentCloneElement.offset().left;//左侧偏移量
          var disY = event.clientY - currentCloneElement.offset().top;//竖直偏移量
  
          //鼠标移动
          $(document).mousemove(function (event) {
            var moveX = event.clientX - disX;
            var moveY = event.clientY - disY;
            currentCloneElement.css({
                left: moveX + 'px',
                top: moveY + 'px'
            })
          });
          $(this).mouseup(function(){
              $(document).off("mousemove");
          })
        });
      });
  
      $(document).on('click', function(){
        self.cloneElement.css('border', '1px solid transparent');
      });
      self.cloneElement.on('click', function(){
        self.cloneElement.css('border', '1px dashed #aaa');
      });
      console.log('up');
      this.isDown = false;
    }
  }
  ngOnInit() {
    // this.el.nativeElement.style.position = 'absolute';
  }
  // DOM--hook
  ngAfterViewInit(){

  }
}
