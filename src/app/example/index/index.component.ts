import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http/http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  exampleLinks: Array<any> = [
    {path: '/form', text: 'Form'},
    {path: '/form-builder', text: 'FormBuilder'},
    {path: '/validation', text: '表单验证'},
    {path: '/http', text: 'Http'},
    {path: '/http-search', text: '搜索框'},
    {path: '/router', text: 'Router'},
    {path: '/auth', text: '守卫'},
    {path: '/lazy', text: '懒加载'},
    {path: '/directive', text: '指令'},
    {path: '/pipe', text: '通道'},
    {path: '/comm', text: '组件通信'},
    {path: '/dep-injection', text: '依赖注入'},
  ];

  componentLinks: Array<any> = [
    {path: '/tab', text: '标签页'},
    {path: '/collapse', text: '折叠'},
    {path: '/accordion', text: '手风琴'},
    {path: '/baiduMap', text: '百度地图'},
    {path: '/modal', text: '模态框'},
    {path: '/pagination', text: '分页'},
  ];
  constructor(private http: HttpService) { }

  ngOnInit() {
  }

}