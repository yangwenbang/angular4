import { Component, OnInit, Inject, ReflectiveInjector } from '@angular/core';

import { ApiService, API_URL } from './api.service';
import { ViewportService } from './viewport.service';

/**
 * 工厂方法
 * 
 * @export
 * @param {*} viewport     dep 依赖的服务
 * @returns
 */
export function httpFactory(viewport: any) {
  return viewport.determineService();
}

@Component({
  selector: 'app-dep-injection',
  template: `
    <h2>依赖注入</h2>

    <button class="btn btn-primary" (click)="factory()">Factory</button>
    <button class="btn btn-primary" (click)="custom()">自定义</button>
  `,
  providers: [
    ApiService,
    ViewportService,
    {
        provide: 'SizeService',          // 提供商重命名   SizeService
        useFactory: httpFactory,         // 工厂方法
        deps: [ViewportService]          // 依赖
    },  
    {
        provide: API_URL,                       // 提供商名  API_URL
        useValue: 'https://www.baidu.com'       // 值
    }
  ]
})
export class DepInjectionComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    @Inject('SizeService') private sizeService: any            // 注入
  ) { }

  ngOnInit() {
    this.invokeApi();
  }

  //调用 api
  invokeApi(){
      this.apiService.get();
  }

  // 工厂
  factory(){
    this.sizeService.run();
  }

  // 自定义
  custom(){
     let injector: any = ReflectiveInjector.resolveAndCreate([
          ViewportService,
          {
              provide: 'OtherSizeService',
              useFactory: (viewport: any) => {   
                  return viewport.determineService();
              },
              deps: [ViewportService]
          }
      ]);

      let sizeService: any = injector.get('OtherSizeService');
      sizeService.run();
  }

}