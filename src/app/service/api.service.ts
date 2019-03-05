import { Injectable } from '@angular/core';

var Heros = [
  {no:'1', name: '雷神'},
  {no:'2', name: '钢铁侠'},
  {no:'3', name: '美国队长'},
  {no:'4', name: '洛基'},
  {no:'5', name: '奇异博士'},
  {no:'6', name: '浩克'},
  {no:'7', name: '蜘蛛侠'}
];

var Animates = [
    {no:'1', name: '兔子'},
    {no:'2', name: '小狗'},
    {no:'3', name: '老虎'},
    {no:'4', name: '绵羊'},
    {no:'5', name: '哈士奇'},
    {no:'6', name: '泰迪'},
    {no:'7', name: '猎豹'}
];

@Injectable()
export class AnimateService {
    public animateList = Animates;
    constructor() {
        // ...init
    }
}

@Injectable()
export class heroService { 
    public heroList = Heros; 
    constructor() {
        // ...init
    }
}