import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lazy',
  template: `<h1>懒加载成功！</h1>`,
})
export class LazyComponent {

  constructor() { }

}

@NgModule({
  imports: [
    RouterModule.forChild([{path: 'lazy', component: LazyComponent}])
  ],
  declarations: [LazyComponent]
})
export class LazyModule { }