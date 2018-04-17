import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

// import { CountdownTimerComponent }  from './timer.component';

@Component({
  selector: 'app-comm',
  template: `
    <h2>父组件与子组件通过 本地变量 互动</h2>
    <button (click)="timer.start()">Start</button>
    <button (click)="timer.stop()">Stop</button>
    <div>{{timer.seconds}}</div>

    <countdown-timer #timer></countdown-timer>  
    <hr />

    <button class="btn btn-primary" [routerLink]="['/service-comm']">通过服务来通讯</button>
  `,
})
export class CommComponent implements OnInit, AfterViewInit {

  // @ViewChild(CountdownTimerComponent) private timerComponent: CountdownTimerComponent;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    // console.log(this.timerComponent);
  }


}