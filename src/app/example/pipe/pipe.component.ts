import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
})
export class PipeComponent implements OnInit {
  birthday: Date = new Date(2016, 10, 1);

  power: number = 5;
  factor: number = 1;

  constructor() { }

  ngOnInit() {
  }

}