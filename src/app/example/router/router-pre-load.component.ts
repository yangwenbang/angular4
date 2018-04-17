import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PreLoadService } from './pre-load.service'; 
/**
 * 获取路由信息
 * 
 * @export
 * @class FeatureComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'router-info',
    template: `
      <h2>路由信息</h2>
      <h4>params</h4>
      <pre>{{paramsInfo | json}}</pre>
      <hr />
      <h4>queryParams</h4>
      <pre>{{queryParams | json}}</pre>
      <button class="btn btn-primary" (click)="goBack()">返回</button>
    `
})
export class RouterInfoComponent implements OnInit {
    paramsInfo: any;
    queryParams: any;

    constructor(private router: Router, private route: ActivatedRoute) {
      let id = +this.route.snapshot.params['id']; //快照（ snapshot ）

        //params
        route.params.subscribe(
            params => this.paramsInfo = params
        );
        //queryParams    ?query=query
        route.queryParams.subscribe(
            queryParams => this.queryParams = queryParams
        );
     }

    ngOnInit() { }

    /**
     * 相对路由，并带有 queryParams 参数
     */
    goBack(){
      this.router.navigate(['../'], { queryParams: {search:'ng2'}})     // ?search=ng2
            .then(_ => {
                console.log("跳转前此处处理……");
            });
    }
}


/**
 * 预加载
 * 
 * @export
 * @class RouterComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-router',
  template: `
    <h2>预加载</h2>
    <pre>{{data | json}}</pre>
    <hr />
    <button class="btn btn-primary" [routerLink]="['../router-info', id, title, {text:'angular2'}]">获取路由信息</button>
  `,
  providers: [PreLoadService]
})
export class RouterPreLoadComponent implements OnInit {
  id: string = '1';
  title: string = 'ng2';
  data: any;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("预加载已执行完成!");

    //获取预加载数据
    this.route.data.subscribe((data: { data: any }) => {
          this.data = data;
    });
    
  }

}