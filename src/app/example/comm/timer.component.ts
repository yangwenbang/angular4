import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'countdown-timer',
  template: '<p>子组件提示状态：{{message}}</p>' 
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  intervalId = 0;
  message = '';
  seconds = 10;
  ngOnInit()    { this.start(); }
  ngOnDestroy() { this.clearTimer(); }

  start() { 
    this.countDown(); 
  }
  stop()  {
    this.clearTimer();
    this.message = `暂停到 ${this.seconds} 秒`;
  }
  
  clearTimer() { 
      clearInterval(this.intervalId); 
  }

  /**
   * 时间计算
   * 
   * @private
   * 
   * @memberOf CountdownTimerComponent
   */
  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = '重头再来';
      } else {
        if (this.seconds < 0) { this.seconds = 10; }    // reset
        this.message = `${this.seconds} 秒`;
      }
    }, 1000);
  }
}
