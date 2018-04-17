import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { routes } from './app.routing'

// 首页
import { IndexComponent } from './example/index/index.component';

// 表单
import { FormComponent } from './example/form/form.component';
import { FormBuilderComponent } from './example/form-builder/form-builder.component';
import { ValidationComponent } from './example/validation/validation.component';

// 守卫
import { AuthComponent, ProtectedComponent } from './example/auth/auth.component';
import { AuthService } from './example/auth/auth.service';               
import { LoggedInGuardService } from './example/auth/loggedIn.guard';  

// http
import { HttpComponent } from './example/http/http.component';
import { YoutubeSearchComponent, SearchInputComponent } from './example/http/http-search.component';
import { HttpService } from './example/http/http.service';     

// 预加载
import { RouterPreLoadComponent, RouterInfoComponent } from './example/router/router-pre-load.component';
import { PreLoadService } from './example/router/pre-load.service';             
    
// 懒加载模块
import { LazyModule } from './example/lazy/lazy.module';

// 指令
import { DirectiveComponent } from './example/directive/directive.component';     
import { HighlightDirective } from './example/directive/highlight.directive';  

// 通道
import { PipeComponent } from './example/pipe/pipe.component';      
import { ExponentialStrengthPipe } from './example/pipe/exponential.pipe';    


// 通信
import { CommComponent } from './example/comm/comm.component';    
import { CountdownTimerComponent } from './example/comm/timer.Component';    
import { ServiceCommComponent } from './example/comm/service-comm.component';    

// 依赖注入
import { DepInjectionComponent } from './example/dep-injection/dep-injection.component';  

// tab
import { TabDemoComponent } from './component/tab/tab-demo.component';

// 折叠
import { CollapseDemoComponent } from './component/collapse/collapse-demo.component';

// 手风琴
import { AccordionDemoComponent } from './component/accordion/accordion-demo.component';

// 百度地图
import { BaiduMapDemoComponent } from './component/baiduMap/baiduMap-demo.component';

// 模态框
import { ModalDemoComponent } from './component/modal/modal-demo.component';

// 分页
import { PaginationDemoComponent } from './component/pagination/pagination-demo.component';


// 导入组件模块
import { TabModule } from './component/tab';                      // tab
import { CollapseModule } from './component/collapse';            // 折叠
import { AccordionModule } from './component/accordion';          // 手风琴
import { BaiduMapModule } from './component/baiduMap';            // 百度地图
import { ModalModule } from './component/modal';                  // 模态框
import { PaginationModule } from './component/pagination';        // 分页


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    LazyModule,
    TabModule,
    CollapseModule,
    AccordionModule,
    BaiduMapModule,
    ModalModule,
    PaginationModule,
  ],
  declarations: [
    AppComponent,
    IndexComponent,
    FormComponent,
    FormBuilderComponent,
    ValidationComponent,
    HttpComponent,
    YoutubeSearchComponent,
    SearchInputComponent,
    RouterPreLoadComponent,
    RouterInfoComponent,
    AuthComponent,
    ProtectedComponent,
    DirectiveComponent,
    HighlightDirective,
    PipeComponent,
    ExponentialStrengthPipe,
    CommComponent,
    ServiceCommComponent,
    CountdownTimerComponent,
    DepInjectionComponent,
    TabDemoComponent,
    CollapseDemoComponent,
    AccordionDemoComponent,
    BaiduMapDemoComponent,
    ModalDemoComponent,
    PaginationDemoComponent,
  ],
  providers: [
    PreLoadService,
    HttpService,
    AuthService,
    LoggedInGuardService,
    {provide: APP_BASE_HREF, useValue: '/ng2'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
